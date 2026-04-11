create extension if not exists pgcrypto;

create table if not exists public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  email text unique,
  full_name text,
  class_name text,
  role text not null default 'student' check (role in ('student', 'teacher')),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.learner_progress (
  user_id uuid not null references public.profiles(id) on delete cascade,
  course_id text not null,
  learner_name text not null,
  class_name text,
  passed_modules integer not null default 0,
  total_modules integer not null default 12,
  interaction_completed integer not null default 0,
  interaction_total integer not null default 0,
  overall_percent integer not null default 0,
  next_module text,
  module_scores jsonb not null default '[]'::jsonb,
  state_json jsonb not null default '{}'::jsonb,
  updated_at timestamptz not null default now(),
  primary key (user_id, course_id)
);

create table if not exists public.student_questions (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references public.profiles(id) on delete cascade,
  course_id text not null,
  learner_name text not null,
  class_name text,
  module_id text not null,
  module_title text not null,
  question_text text not null,
  status text not null default 'offen' check (status in ('offen', 'in_bearbeitung', 'beantwortet')),
  answer_text text,
  teacher_id uuid references public.profiles(id) on delete set null,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  answered_at timestamptz
);

create or replace function public.handle_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

drop trigger if exists profiles_updated_at on public.profiles;
create trigger profiles_updated_at
before update on public.profiles
for each row
execute function public.handle_updated_at();

drop trigger if exists learner_progress_updated_at on public.learner_progress;
create trigger learner_progress_updated_at
before update on public.learner_progress
for each row
execute function public.handle_updated_at();

drop trigger if exists student_questions_updated_at on public.student_questions;
create trigger student_questions_updated_at
before update on public.student_questions
for each row
execute function public.handle_updated_at();

alter table public.profiles enable row level security;
alter table public.learner_progress enable row level security;
alter table public.student_questions enable row level security;

create or replace function public.is_teacher()
returns boolean
language sql
stable
as $$
  select exists (
    select 1
    from public.profiles
    where id = auth.uid() and role = 'teacher'
  );
$$;

drop policy if exists "profiles_select_own_or_teacher" on public.profiles;
create policy "profiles_select_own_or_teacher"
on public.profiles
for select
using (auth.uid() = id or public.is_teacher());

drop policy if exists "profiles_insert_own" on public.profiles;
create policy "profiles_insert_own"
on public.profiles
for insert
with check (
  auth.uid() = id
  and coalesce(role, 'student') = 'student'
);

drop policy if exists "profiles_update_own_non_role_fields" on public.profiles;
create policy "profiles_update_own_non_role_fields"
on public.profiles
for update
using (auth.uid() = id)
with check (
  auth.uid() = id
  and role = (select p.role from public.profiles as p where p.id = auth.uid())
);

drop policy if exists "learner_progress_select_own_or_teacher" on public.learner_progress;
create policy "learner_progress_select_own_or_teacher"
on public.learner_progress
for select
using (auth.uid() = user_id or public.is_teacher());

drop policy if exists "learner_progress_upsert_own" on public.learner_progress;
create policy "learner_progress_upsert_own"
on public.learner_progress
for insert
with check (auth.uid() = user_id);

drop policy if exists "learner_progress_update_own" on public.learner_progress;
create policy "learner_progress_update_own"
on public.learner_progress
for update
using (auth.uid() = user_id)
with check (auth.uid() = user_id);

drop policy if exists "student_questions_select_own_or_teacher" on public.student_questions;
create policy "student_questions_select_own_or_teacher"
on public.student_questions
for select
using (auth.uid() = user_id or public.is_teacher());

drop policy if exists "student_questions_insert_own" on public.student_questions;
create policy "student_questions_insert_own"
on public.student_questions
for insert
with check (auth.uid() = user_id);

drop policy if exists "student_questions_update_own_or_teacher" on public.student_questions;
create policy "student_questions_update_own_or_teacher"
on public.student_questions
for update
using (auth.uid() = user_id or public.is_teacher())
with check (auth.uid() = user_id or public.is_teacher());

-- Nach der ersten Anmeldung die Lehrperson hochstufen, z. B.:
-- update public.profiles set role = 'teacher' where email = 'deine.mail@schule.ch';
