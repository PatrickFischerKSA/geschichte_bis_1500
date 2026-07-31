CREATE TABLE `students` (
  `id` text PRIMARY KEY NOT NULL,
  `first_name` text NOT NULL,
  `last_name` text NOT NULL,
  `class_name` text NOT NULL,
  `login_key` text NOT NULL UNIQUE,
  `password_hash` text NOT NULL,
  `password_salt` text NOT NULL,
  `created_at` text NOT NULL,
  `updated_at` text NOT NULL
);
--> statement-breakpoint
CREATE INDEX `students_class_idx` ON `students` (`class_name`);
--> statement-breakpoint
CREATE TABLE `sessions` (
  `token_hash` text PRIMARY KEY NOT NULL,
  `user_id` text,
  `role` text NOT NULL,
  `expires_at` text NOT NULL,
  `created_at` text NOT NULL
);
--> statement-breakpoint
CREATE TABLE `learner_progress` (
  `student_id` text NOT NULL,
  `course_id` text NOT NULL,
  `state_json` text NOT NULL,
  `snapshot_json` text NOT NULL,
  `updated_at` text NOT NULL,
  PRIMARY KEY (`student_id`, `course_id`)
);
--> statement-breakpoint
CREATE TABLE `student_questions` (
  `id` text PRIMARY KEY NOT NULL,
  `student_id` text NOT NULL,
  `course_id` text NOT NULL,
  `module_id` text NOT NULL,
  `module_title` text NOT NULL,
  `question_text` text NOT NULL,
  `status` text DEFAULT 'offen' NOT NULL,
  `answer_text` text,
  `created_at` text NOT NULL,
  `updated_at` text NOT NULL,
  `answered_at` text
);
--> statement-breakpoint
CREATE INDEX `questions_student_idx` ON `student_questions` (`student_id`, `course_id`);
