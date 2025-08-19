CREATE TABLE `drink_items` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`header` text NOT NULL,
	`quantity` integer NOT NULL,
	`liters` float NOT NULL,
	`body` text,
	`bag_id` integer NOT NULL,
	`added_at` text NOT NULL,
	FOREIGN KEY (`bag_id`) REFERENCES `bags`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `hygiene_items` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`header` text NOT NULL,
	`quantity` integer NOT NULL,
	`belongs_to` text NOT NULL,
	`body` text NOT NULL,
	`bag_id` integer NOT NULL,
	`added_at` text NOT NULL,
	FOREIGN KEY (`bag_id`) REFERENCES `bags`(`id`) ON UPDATE no action ON DELETE no action
);
