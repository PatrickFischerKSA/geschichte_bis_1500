ALTER TABLE `students` ADD `is_active` integer DEFAULT 1 NOT NULL;
--> statement-breakpoint
CREATE TABLE `activity_events` (
  `id` text PRIMARY KEY NOT NULL,
  `student_id` text NOT NULL,
  `action` text NOT NULL,
  `detail` text,
  `created_at` text NOT NULL
);
--> statement-breakpoint
CREATE INDEX `activity_student_idx` ON `activity_events` (`student_id`,`created_at`);
--> statement-breakpoint
CREATE INDEX `activity_created_idx` ON `activity_events` (`created_at`);
