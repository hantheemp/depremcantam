import { float } from 'drizzle-orm/mysql-core';
import { sqliteTable, text, integer } from 'drizzle-orm/sqlite-core';

export type ItemInputsCollection = {
  foods?: FoodItemInput[];
  electronics?: ElectronicItemInput[];
  clothings?: ClothingItemInput[];
  medicals?: MedicalItemInput[];
  documents?: DocumentItemInput[];
  specialCares?: SpecialCareItemInput[];
};

// BAGS TABLE
export const bags = sqliteTable('bags', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  name: text('name').notNull(),
  description: text('description').notNull(),
  saved_at: text('saved_at').notNull(),
  is_owned: integer('is_owned', { mode: 'boolean' }).notNull(),
});

// SHARED BAGS TABLE
export const sharedBags = sqliteTable('shared_bags', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  shared_bag_id: integer('shared_bag_id')
    .notNull()
    .references(() => bags.id),
  can_edit: integer('can_edit', { mode: 'boolean' }).notNull(),
  shared_at: text('shared_at').notNull(),
});

// FOOD ITEMS TABLE
export const foodItems = sqliteTable('food_items', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  header: text('header').notNull(),
  quantity: integer('quantity').notNull(),
  expiry_date: text('expiry_date').notNull(),
  body: text('body'),
  bag_id: integer('bag_id')
    .notNull()
    .references(() => bags.id),
  added_at: text('added_at').notNull(),
});

// DRINK ITEMS TABLE
export const drinkItems = sqliteTable('drink_items', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  header: text('header').notNull(),
  quantity: integer('quantity').notNull(),
  liters: float('liters').notNull(),
  body: text('body'),
  bag_id: integer('bag_id')
    .notNull()
    .references(() => bags.id),
  added_at: text('added_at').notNull(),
});

// ELECTRONIC ITEMS TABLE
export const electronicItems = sqliteTable('electronic_items', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  header: text('header').notNull(),
  quantity: integer('quantity').notNull(),
  charge: text('charge').notNull(),
  body: text('body').notNull(),
  bag_id: integer('bag_id')
    .notNull()
    .references(() => bags.id),
  added_at: text('added_at').notNull(),
});

// CLOTHING ITEMS TABLE
export const clothingItems = sqliteTable('clothing_items', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  header: text('header').notNull(),
  quantity: integer('quantity').notNull(),
  season: text('season').notNull(),
  body: text('body').notNull(),
  bag_id: integer('bag_id')
    .notNull()
    .references(() => bags.id),
  added_at: text('added_at').notNull(),
});

// MEDICAL ITEMS TABLE
export const medicalItems = sqliteTable('medical_items', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  header: text('header').notNull(),
  quantity: integer('quantity').notNull(),
  medicine_type: text('medicine_type').notNull(),
  body: text('body').notNull(),
  bag_id: integer('bag_id')
    .notNull()
    .references(() => bags.id),
  added_at: text('added_at').notNull(),
});

// DOCUMENT ITEMS TABLE
export const documentItems = sqliteTable('document_items', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  header: text('header').notNull(),
  quantity: integer('quantity').notNull(),
  document_type: text('document_type').notNull(),
  body: text('body').notNull(),
  bag_id: integer('bag_id')
    .notNull()
    .references(() => bags.id),
  added_at: text('added_at').notNull(),
});

// SPECIAL CARE ITEMS TABLE
export const specialCareItems = sqliteTable('special_care_items', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  header: text('header').notNull(),
  quantity: integer('quantity').notNull(),
  belongs_to: text('belongs_to').notNull(),
  body: text('body').notNull(),
  bag_id: integer('bag_id')
    .notNull()
    .references(() => bags.id),
  added_at: text('added_at').notNull(),
});

// HYGIENE ITEMS TABLE
export const hygieneItems = sqliteTable('hygiene_items', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  header: text('header').notNull(),
  quantity: integer('quantity').notNull(),
  belongs_to: text('belongs_to').notNull(),
  body: text('body').notNull(),
  bag_id: integer('bag_id')
    .notNull()
    .references(() => bags.id),
  added_at: text('added_at').notNull(),
});

export type FoodItemInput = Omit<typeof foodItems.$inferInsert, 'bag_id'>;
export type ElectronicItemInput = Omit<typeof electronicItems.$inferInsert, 'bag_id'>;
export type ClothingItemInput = Omit<typeof clothingItems.$inferInsert, 'bag_id'>;
export type MedicalItemInput = Omit<typeof medicalItems.$inferInsert, 'bag_id'>;
export type DocumentItemInput = Omit<typeof documentItems.$inferInsert, 'bag_id'>;
export type SpecialCareItemInput = Omit<typeof specialCareItems.$inferInsert, 'bag_id'>;
export type DrinkItemInput = Omit<typeof drinkItems.$inferSelect, 'bag_id'>;
export type HygieneItemInput = Omit<typeof hygieneItems.$inferSelect, 'bag_id'>;

// TYPE INFERENCES
export type Bag = typeof bags.$inferSelect;
export type SharedBag = typeof sharedBags.$inferSelect;
export type FoodItem = typeof foodItems.$inferSelect;
export type ElectronicItem = typeof electronicItems.$inferSelect;
export type ClothingItem = typeof clothingItems.$inferSelect;
export type MedicalItem = typeof medicalItems.$inferSelect;
export type DocumentItem = typeof documentItems.$inferSelect;
export type SpecialCareItem = typeof specialCareItems.$inferSelect;
export type HygieneItem = typeof hygieneItems.$inferSelect;
