import { index, primaryKey, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const students = sqliteTable("students", {
  id: text("id").primaryKey(),
  firstName: text("first_name").notNull(),
  lastName: text("last_name").notNull(),
  className: text("class_name").notNull(),
  loginKey: text("login_key").notNull().unique(),
  passwordHash: text("password_hash").notNull(),
  passwordSalt: text("password_salt").notNull(),
  createdAt: text("created_at").notNull(),
  updatedAt: text("updated_at").notNull(),
}, table => [index("students_class_idx").on(table.className)]);

export const sessions = sqliteTable("sessions", {
  tokenHash: text("token_hash").primaryKey(),
  userId: text("user_id"),
  role: text("role").notNull(),
  expiresAt: text("expires_at").notNull(),
  createdAt: text("created_at").notNull(),
});

export const learnerProgress = sqliteTable("learner_progress", {
  studentId: text("student_id").notNull(),
  courseId: text("course_id").notNull(),
  stateJson: text("state_json").notNull(),
  snapshotJson: text("snapshot_json").notNull(),
  updatedAt: text("updated_at").notNull(),
}, table => [primaryKey({ columns: [table.studentId, table.courseId] })]);

export const studentQuestions = sqliteTable("student_questions", {
  id: text("id").primaryKey(),
  studentId: text("student_id").notNull(),
  courseId: text("course_id").notNull(),
  moduleId: text("module_id").notNull(),
  moduleTitle: text("module_title").notNull(),
  questionText: text("question_text").notNull(),
  status: text("status").notNull().default("offen"),
  answerText: text("answer_text"),
  createdAt: text("created_at").notNull(),
  updatedAt: text("updated_at").notNull(),
  answeredAt: text("answered_at"),
}, table => [index("questions_student_idx").on(table.studentId, table.courseId)]);
