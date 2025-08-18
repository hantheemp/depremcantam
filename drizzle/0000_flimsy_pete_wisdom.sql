CREATE TABLE `bags` (
	`id` text PRIMARY KEY NOT NULL,
	`name` text NOT NULL,
	`description` text NOT NULL,
	`saved_at` text NOT NULL,
	`is_owned` integer NOT NULL
);
--> statement-breakpoint
CREATE TABLE `clothing_items` (
	`id` text PRIMARY KEY NOT NULL,
	`header` text NOT NULL,
	`quantity` integer NOT NULL,
	`season` text NOT NULL,
	`body` text NOT NULL,
	`bag_id` text NOT NULL,
	`added_at` text NOT NULL,
	FOREIGN KEY (`bag_id`) REFERENCES `bags`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `document_items` (
	`id` text PRIMARY KEY NOT NULL,
	`header` text NOT NULL,
	`quantity` integer NOT NULL,
	`document_type` text NOT NULL,
	`body` text NOT NULL,
	`bag_id` text NOT NULL,
	`added_at` text NOT NULL,
	FOREIGN KEY (`bag_id`) REFERENCES `bags`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `electronic_items` (
	`id` text PRIMARY KEY NOT NULL,
	`header` text NOT NULL,
	`quantity` integer NOT NULL,
	`charge` text NOT NULL,
	`body` text NOT NULL,
	`bag_id` text NOT NULL,
	`added_at` text NOT NULL,
	FOREIGN KEY (`bag_id`) REFERENCES `bags`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `food_items` (
	`id` text PRIMARY KEY NOT NULL,
	`header` text NOT NULL,
	`quantity` integer NOT NULL,
	`expiry_date` text NOT NULL,
	`body` text,
	`bag_id` text NOT NULL,
	`added_at` text NOT NULL,
	FOREIGN KEY (`bag_id`) REFERENCES `bags`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `medical_items` (
	`id` text PRIMARY KEY NOT NULL,
	`header` text NOT NULL,
	`quantity` integer NOT NULL,
	`medicine_type` text NOT NULL,
	`body` text NOT NULL,
	`bag_id` text NOT NULL,
	`added_at` text NOT NULL,
	FOREIGN KEY (`bag_id`) REFERENCES `bags`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `shared_bags` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`shared_bag_id` text NOT NULL,
	`can_edit` integer NOT NULL,
	`shared_at` text NOT NULL,
	FOREIGN KEY (`shared_bag_id`) REFERENCES `bags`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `special_care_items` (
	`id` text PRIMARY KEY NOT NULL,
	`header` text NOT NULL,
	`quantity` integer NOT NULL,
	`belongs_to` text NOT NULL,
	`body` text NOT NULL,
	`bag_id` text NOT NULL,
	`added_at` text NOT NULL,
	FOREIGN KEY (`bag_id`) REFERENCES `bags`(`id`) ON UPDATE no action ON DELETE no action
);
