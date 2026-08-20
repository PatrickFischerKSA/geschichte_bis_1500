const COURSE_ID = "geschichte_bis_1500";
const SESSION_DAYS = 30;
const PBKDF2_ITERATIONS = 100000;
const PBKDF2_SCHEME = "pbkdf2-sha256";
let schemaReady;

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (url.pathname.startsWith("/api/")) return handleApi(request, env, url);
    const response = await env.ASSETS.fetch(request);
    if (response.status !== 404) return withSecurityHeaders(response);
    return response;
  }
};

async function handleApi(request, env, url) {
  try {
    await ensureSchemaReady(env.DB);
    if (url.pathname === "/api/student/register" && request.method === "POST") return registerStudent(request, env);
    if (url.pathname === "/api/student/login" && request.method === "POST") return loginStudent(request, env);
    if (url.pathname === "/api/student/me" && request.method === "GET") return studentMe(request, env);
    if (url.pathname === "/api/student/progress") return studentProgress(request, env);
    if (url.pathname === "/api/student/questions") return studentQuestions(request, env);
    if (url.pathname === "/api/teacher/login" && request.method === "POST") return teacherLogin(request, env);
    if (url.pathname === "/api/teacher/dashboard" && request.method === "GET") return teacherDashboard(request, env);
    if (url.pathname.startsWith("/api/teacher/questions/") && request.method === "PATCH") {
      return answerQuestion(request, env, decodeURIComponent(url.pathname.slice("/api/teacher/questions/".length)));
    }
    return json({ error: "Nicht gefunden." }, 404);
  } catch (error) {
    console.error(error);
    return json({ error: "Die Anfrage konnte nicht verarbeitet werden." }, 500);
  }
}

async function registerStudent(request, env) {
  const input = await request.json();
  const profile = validateStudentInput(input, true);
  if (profile.error) return json({ error: profile.error }, 400);
  const existing = await env.DB.prepare("SELECT id FROM students WHERE login_key = ?").bind(profile.loginKey).first();
  if (existing) return json({ error: "Für diesen Namen und diese Klasse besteht bereits ein Konto. Bitte melde dich an." }, 409);
  const id = crypto.randomUUID();
  const password = await hashPassword(profile.password);
  const now = new Date().toISOString();
  const inserted = await env.DB.prepare("INSERT OR IGNORE INTO students (id, first_name, last_name, class_name, login_key, password_hash, password_salt, created_at, updated_at) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)")
    .bind(id, profile.firstName, profile.lastName, profile.className, profile.loginKey, encodePasswordHash(password.hash, PBKDF2_ITERATIONS), password.salt, now, now).run();
  if (!inserted.success || Number(inserted.meta?.changes || 0) !== 1) {
    return json({ error: "Für diesen Namen und diese Klasse besteht bereits ein Konto. Bitte melde dich an." }, 409);
  }
  const token = await createSession(env.DB, id, "student");
  return json({ token, profile: publicProfile({ id, ...profile }) }, 201);
}

async function loginStudent(request, env) {
  const input = await request.json();
  const profile = validateStudentInput(input, false);
  if (profile.error) return json({ error: profile.error }, 400);
  const student = await env.DB.prepare("SELECT * FROM students WHERE login_key = ?").bind(profile.loginKey).first();
  if (!student || !await verifyPassword(profile.password, String(student.password_salt), String(student.password_hash))) {
    return json({ error: "Name, Klasse oder Passwort stimmen nicht." }, 401);
  }
  const token = await createSession(env.DB, String(student.id), "student");
  return json({ token, profile: publicProfile(student) }, 200);
}

async function studentMe(request, env) {
  const session = await requireSession(request, env.DB, "student");
  if (!session) return json({ error: "Bitte melde dich an." }, 401);
  const student = await env.DB.prepare("SELECT * FROM students WHERE id = ?").bind(session.userId).first();
  return student ? json({ profile: publicProfile(student) }, 200) : json({ error: "Konto nicht gefunden." }, 404);
}

async function studentProgress(request, env) {
  const session = await requireSession(request, env.DB, "student");
  if (!session) return json({ error: "Bitte melde dich an." }, 401);
  if (request.method === "GET") {
    const row = await env.DB.prepare("SELECT state_json, snapshot_json, updated_at FROM learner_progress WHERE student_id = ? AND course_id = ?").bind(session.userId, COURSE_ID).first();
    return json({ progress: row ? { state: parseJson(row.state_json), snapshot: parseJson(row.snapshot_json), updatedAt: row.updated_at } : null }, 200);
  }
  if (request.method === "PUT") {
    const body = await request.json();
    const state = body.state && typeof body.state === "object" ? body.state : null;
    const snapshot = body.snapshot && typeof body.snapshot === "object" ? body.snapshot : null;
    if (!state || !snapshot) return json({ error: "Ungültiger Lernstand." }, 400);
    const stateJson = JSON.stringify(state);
    const snapshotJson = JSON.stringify(snapshot);
    if (stateJson.length > 500000 || snapshotJson.length > 100000) return json({ error: "Der Lernstand ist zu gross." }, 413);
    const now = new Date().toISOString();
    const write = await env.DB.prepare(`INSERT INTO learner_progress (student_id, course_id, state_json, snapshot_json, updated_at)
      VALUES (?, ?, ?, ?, ?) ON CONFLICT(student_id, course_id) DO UPDATE SET
      state_json=excluded.state_json, snapshot_json=excluded.snapshot_json, updated_at=excluded.updated_at`)
      .bind(session.userId, COURSE_ID, stateJson, snapshotJson, now).run();
    if (!write.success) throw new Error("D1 hat den Lernstand nicht bestätigt.");
    const confirmation = await env.DB.prepare("SELECT updated_at FROM learner_progress WHERE student_id = ? AND course_id = ?")
      .bind(session.userId, COURSE_ID).first();
    if (!confirmation || String(confirmation.updated_at) !== now) {
      throw new Error("Der gespeicherte Lernstand konnte nicht bestätigt werden.");
    }
    return json({ ok: true, updatedAt: now }, 200);
  }
  return json({ error: "Methode nicht erlaubt." }, 405);
}

async function studentQuestions(request, env) {
  const session = await requireSession(request, env.DB, "student");
  if (!session) return json({ error: "Bitte melde dich an." }, 401);
  if (request.method === "GET") {
    const rows = (await env.DB.prepare("SELECT id, module_id, module_title, question_text, status, answer_text, created_at, updated_at, answered_at FROM student_questions WHERE student_id = ? AND course_id = ? ORDER BY created_at DESC").bind(session.userId, COURSE_ID).all()).results;
    return json({ questions: rows }, 200);
  }
  if (request.method === "POST") {
    const body = await request.json();
    const questionText = String(body.questionText || "").trim().slice(0, 3000);
    const moduleId = String(body.moduleId || "").trim().slice(0, 80);
    const moduleTitle = String(body.moduleTitle || "").trim().slice(0, 180);
    if (!questionText || !moduleId) return json({ error: "Bitte formuliere eine konkrete Frage." }, 400);
    const now = new Date().toISOString();
    await env.DB.prepare("INSERT INTO student_questions (id, student_id, course_id, module_id, module_title, question_text, status, answer_text, created_at, updated_at, answered_at) VALUES (?, ?, ?, ?, ?, ?, 'offen', NULL, ?, ?, NULL)")
      .bind(crypto.randomUUID(), session.userId, COURSE_ID, moduleId, moduleTitle, questionText, now, now).run();
    return json({ ok: true }, 201);
  }
  return json({ error: "Methode nicht erlaubt." }, 405);
}

async function teacherLogin(request, env) {
  const body = await request.json();
  const suppliedHash = await sha256(String(body.password || ""));
  const expectedHash = await sha256(String(env.TEACHER_PASSWORD || ""));
  if (!env.TEACHER_PASSWORD || !timingSafeEqual(suppliedHash, expectedHash)) return json({ error: "Das Passwort stimmt nicht." }, 401);
  const token = await createSession(env.DB, null, "teacher", 12 * 60 * 60);
  return json({ token }, 200);
}

async function teacherDashboard(request, env) {
  const session = await requireSession(request, env.DB, "teacher", env.TEACHER_SESSION_EPOCH);
  if (!session) return json({ error: "Kein Lehrpersonen-Zugriff." }, 401);
  const rows = (await env.DB.prepare(`SELECT s.id, s.first_name, s.last_name, s.class_name, p.snapshot_json, p.updated_at
    FROM students s LEFT JOIN learner_progress p ON p.student_id = s.id AND p.course_id = ?
    ORDER BY s.class_name, s.last_name, s.first_name`).bind(COURSE_ID).all()).results;
  const students = rows.map(row => ({
    id: row.id,
    firstName: row.first_name,
    lastName: row.last_name,
    className: row.class_name,
    progress: row.snapshot_json ? { snapshot: parseJson(row.snapshot_json), updatedAt: row.updated_at } : null
  }));
  const questionRows = (await env.DB.prepare(`SELECT q.id, q.module_id, q.module_title, q.question_text, q.status, q.answer_text,
    q.created_at, q.updated_at, q.answered_at, s.first_name || ' ' || s.last_name AS learner_name, s.class_name
    FROM student_questions q JOIN students s ON s.id = q.student_id WHERE q.course_id = ? ORDER BY q.created_at DESC`).bind(COURSE_ID).all()).results;
  const classes = [...new Set(students.map(student => student.className))];
  return json({ students, classes, questions: questionRows }, 200);
}

async function answerQuestion(request, env, id) {
  const session = await requireSession(request, env.DB, "teacher", env.TEACHER_SESSION_EPOCH);
  if (!session) return json({ error: "Kein Lehrpersonen-Zugriff." }, 401);
  const body = await request.json();
  const answer = String(body.answerText || "").trim().slice(0, 5000);
  const status = ["offen", "in_bearbeitung", "beantwortet"].includes(body.status) ? body.status : "beantwortet";
  if (!answer) return json({ error: "Bitte eine Antwort eintragen." }, 400);
  const now = new Date().toISOString();
  await env.DB.prepare("UPDATE student_questions SET answer_text = ?, status = ?, updated_at = ?, answered_at = ? WHERE id = ?")
    .bind(answer, status, now, status === "beantwortet" ? now : null, id).run();
  return json({ ok: true }, 200);
}

function validateStudentInput(input, registration) {
  const firstName = cleanName(input.firstName);
  const lastName = cleanName(input.lastName);
  const className = String(input.className || "").trim().replace(/\s+/g, " ").slice(0, 60);
  const password = String(input.password || "");
  if (firstName.length < 2 || lastName.length < 2 || !className) return { error: "Bitte Vorname, Nachname und Klasse vollständig eintragen." };
  if (password.length < 6) return { error: registration ? "Das Passwort muss mindestens 6 Zeichen lang sein." : "Bitte das Passwort eingeben." };
  const loginKey = normalize(`${className}|${firstName}|${lastName}`);
  return { firstName, lastName, className, password, loginKey };
}

function cleanName(value) {
  return String(value || "").trim().replace(/\s+/g, " ").replace(/[^\p{L}\p{M}' -]/gu, "").slice(0, 80);
}

function normalize(value) {
  return String(value).toLocaleLowerCase("de-CH").normalize("NFD").replace(/[\u0300-\u036f]/g, "").trim();
}

function publicProfile(row) {
  return {
    id: row.id,
    firstName: row.first_name || row.firstName,
    lastName: row.last_name || row.lastName,
    className: row.class_name || row.className
  };
}

async function hashPassword(password, salt = randomHex(16), iterations = PBKDF2_ITERATIONS) {
  const key = await crypto.subtle.importKey("raw", new TextEncoder().encode(password), "PBKDF2", false, ["deriveBits"]);
  const bits = await crypto.subtle.deriveBits({ name: "PBKDF2", hash: "SHA-256", salt: hexBytes(salt), iterations }, key, 256);
  return { salt, hash: bytesHex(new Uint8Array(bits)) };
}

async function verifyPassword(password, salt, expected) {
  const stored = decodePasswordHash(expected);
  if (!stored || stored.scheme !== PBKDF2_SCHEME || stored.iterations > PBKDF2_ITERATIONS) return false;
  const actual = (await hashPassword(password, salt, stored.iterations)).hash;
  return timingSafeEqual(actual, stored.hash);
}

function encodePasswordHash(hash, iterations) {
  return `${PBKDF2_SCHEME}$${iterations}$${hash}`;
}

function decodePasswordHash(value) {
  const text = String(value || "");
  if (/^[a-f0-9]{64}$/i.test(text)) {
    return { scheme: PBKDF2_SCHEME, iterations: PBKDF2_ITERATIONS, hash: text };
  }
  const [scheme, iterationText, hash] = text.split("$");
  const iterations = Number(iterationText);
  if (scheme !== PBKDF2_SCHEME || !Number.isInteger(iterations) || iterations < 1 || !/^[a-f0-9]{64}$/i.test(hash || "")) return null;
  return { scheme, iterations, hash };
}

async function createSession(db, userId, role, lifetimeSeconds = SESSION_DAYS * 86400) {
  const token = randomHex(32);
  const hash = await sha256(token);
  const expiresAt = new Date(Date.now() + lifetimeSeconds * 1000).toISOString();
  await db.prepare("INSERT INTO sessions (token_hash, user_id, role, expires_at, created_at) VALUES (?, ?, ?, ?, ?)")
    .bind(hash, userId, role, expiresAt, new Date().toISOString()).run();
  return token;
}

async function requireSession(request, db, role, minimumCreatedAt = null) {
  const header = request.headers.get("authorization") || "";
  const token = header.startsWith("Bearer ") ? header.slice(7) : "";
  if (!token) return null;
  const hash = await sha256(token);
  const row = await db.prepare("SELECT user_id, role, expires_at, created_at FROM sessions WHERE token_hash = ?").bind(hash).first();
  if (!row || row.role !== role || new Date(String(row.expires_at)).getTime() < Date.now()) return null;
  if (minimumCreatedAt && new Date(String(row.created_at)).getTime() < new Date(String(minimumCreatedAt)).getTime()) return null;
  return { userId: row.user_id ? String(row.user_id) : null, role: String(row.role) };
}

async function sha256(value) {
  return bytesHex(new Uint8Array(await crypto.subtle.digest("SHA-256", new TextEncoder().encode(value))));
}

function randomHex(length) {
  const bytes = new Uint8Array(length);
  crypto.getRandomValues(bytes);
  return bytesHex(bytes);
}

function hexBytes(hex) {
  return new Uint8Array(hex.match(/.{2}/g).map(byte => parseInt(byte, 16)));
}

function bytesHex(bytes) {
  return Array.from(bytes, byte => byte.toString(16).padStart(2, "0")).join("");
}

function timingSafeEqual(a, b) {
  if (a.length !== b.length) return false;
  let mismatch = 0;
  for (let i = 0; i < a.length; i++) mismatch |= a.charCodeAt(i) ^ b.charCodeAt(i);
  return mismatch === 0;
}

function parseJson(value) {
  try { return JSON.parse(String(value)); } catch { return null; }
}

async function ensureSchema(db) {
  await db.batch([
    db.prepare("CREATE TABLE IF NOT EXISTS students (id TEXT PRIMARY KEY, first_name TEXT NOT NULL, last_name TEXT NOT NULL, class_name TEXT NOT NULL, login_key TEXT NOT NULL UNIQUE, password_hash TEXT NOT NULL, password_salt TEXT NOT NULL, created_at TEXT NOT NULL, updated_at TEXT NOT NULL)"),
    db.prepare("CREATE TABLE IF NOT EXISTS sessions (token_hash TEXT PRIMARY KEY, user_id TEXT, role TEXT NOT NULL, expires_at TEXT NOT NULL, created_at TEXT NOT NULL)"),
    db.prepare("CREATE TABLE IF NOT EXISTS learner_progress (student_id TEXT NOT NULL, course_id TEXT NOT NULL, state_json TEXT NOT NULL, snapshot_json TEXT NOT NULL, updated_at TEXT NOT NULL, PRIMARY KEY (student_id, course_id))"),
    db.prepare("CREATE TABLE IF NOT EXISTS student_questions (id TEXT PRIMARY KEY, student_id TEXT NOT NULL, course_id TEXT NOT NULL, module_id TEXT NOT NULL, module_title TEXT NOT NULL, question_text TEXT NOT NULL, status TEXT NOT NULL DEFAULT 'offen', answer_text TEXT, created_at TEXT NOT NULL, updated_at TEXT NOT NULL, answered_at TEXT)"),
    db.prepare("CREATE INDEX IF NOT EXISTS students_class_idx ON students(class_name)"),
    db.prepare("CREATE INDEX IF NOT EXISTS questions_student_idx ON student_questions(student_id, course_id)")
  ]);
}

function ensureSchemaReady(db) {
  if (!schemaReady) {
    schemaReady = ensureSchema(db).catch((error) => {
      schemaReady = null;
      throw error;
    });
  }
  return schemaReady;
}

function json(body, status) {
  return new Response(JSON.stringify(body), { status, headers: { "content-type": "application/json; charset=utf-8", "cache-control": "no-store" } });
}

function withSecurityHeaders(response) {
  const headers = new Headers(response.headers);
  headers.set("x-content-type-options", "nosniff");
  headers.set("referrer-policy", "strict-origin-when-cross-origin");
  return new Response(response.body, { status: response.status, statusText: response.statusText, headers });
}
