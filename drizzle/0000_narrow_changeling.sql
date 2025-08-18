CREATE TABLE `bags` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`name` text NOT NULL,
	`description` text NOT NULL,
	`saved_at` text NOT NULL,
	`is_owned` integer NOT NULL
);
--> statement-breakpoint
CREATE TABLE `clothing_items` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`header` text NOT NULL,
	`quantity` integer NOT NULL,
	`season` text NOT NULL,
	`body` text NOT NULL,
	`bag_id` integer NOT NULL,
	`added_at` text NOT NULL,
	FOREIGN KEY (`bag_id`) REFERENCES `bags`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `document_items` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`header` text NOT NULL,
	`quantity` integer NOT NULL,
	`document_type` text NOT NULL,
	`body` text NOT NULL,
	`bag_id` integer NOT NULL,
	`added_at` text NOT NULL,
	FOREIGN KEY (`bag_id`) REFERENCES `bags`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `electronic_items` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`header` text NOT NULL,
	`quantity` integer NOT NULL,
	`charge` text NOT NULL,
	`body` text NOT NULL,
	`bag_id` integer NOT NULL,
	`added_at` text NOT NULL,
	FOREIGN KEY (`bag_id`) REFERENCES `bags`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `food_items` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`header` text NOT NULL,
	`quantity` integer NOT NULL,
	`expiry_date` text NOT NULL,
	`body` text,
	`bag_id` integer NOT NULL,
	`added_at` text NOT NULL,
	FOREIGN KEY (`bag_id`) REFERENCES `bags`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `medical_items` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`header` text NOT NULL,
	`quantity` integer NOT NULL,
	`medicine_type` text NOT NULL,
	`body` text NOT NULL,
	`bag_id` integer NOT NULL,
	`added_at` text NOT NULL,
	FOREIGN KEY (`bag_id`) REFERENCES `bags`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `shared_bags` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`shared_bag_id` integer NOT NULL,
	`can_edit` integer NOT NULL,
	`shared_at` text NOT NULL,
	FOREIGN KEY (`shared_bag_id`) REFERENCES `bags`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `special_care_items` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`header` text NOT NULL,
	`quantity` integer NOT NULL,
	`belongs_to` text NOT NULL,
	`body` text NOT NULL,
	`bag_id` integer NOT NULL,
	`added_at` text NOT NULL,
	FOREIGN KEY (`bag_id`) REFERENCES `bags`(`id`) ON UPDATE no action ON DELETE no action
);
