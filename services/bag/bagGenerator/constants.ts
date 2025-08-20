import {
  foodItems,
  drinkItems,
  electronicItems,
  clothingItems,
  medicalItems,
  documentItems,
  specialCareItems,
  hygieneItems,
} from '~/db/schema';
import { Item } from '~/services/item/itemGenerator/interfaces';

export const CATEGORY_TABLES = {
  foods: foodItems,
  drinks: drinkItems,
  electronics: electronicItems,
  clothings: clothingItems,
  medicals: medicalItems,
  documents: documentItems,
  specialCares: specialCareItems,
  hygienes: hygieneItems,
};

export const TABLE_MAPPERS = {
  foods: (item: Item) => ({
    header: item.header,
    quantity: item.quantity,
    expiry_date: item.expiry_date ?? '',
    bag_id: item.bag_id!,
    added_at: item.added_at!,
    body: item.body ?? '',
  }),
  drinks: (item: Item) => ({
    header: item.header,
    quantity: item.quantity,
    liters: item.liters!,
    bag_id: item.bag_id!,
    added_at: item.added_at!,
    body: item.body ?? '',
  }),
  electronics: (item: Item) => ({
    header: item.header,
    quantity: item.quantity,
    charge: item.charge!,
    bag_id: item.bag_id!,
    added_at: item.added_at!,
    body: item.body ?? '',
  }),
  clothings: (item: Item) => ({
    header: item.header,
    quantity: item.quantity,
    season: item.season!,
    bag_id: item.bag_id!,
    added_at: item.added_at!,
    body: item.body ?? '',
  }),
  medicals: (item: Item) => ({
    header: item.header,
    quantity: item.quantity,
    medicine_type: item.medicine_type!,
    bag_id: item.bag_id!,
    added_at: item.added_at!,
    body: item.body ?? '',
  }),
  documents: (item: Item) => ({
    header: item.header,
    quantity: item.quantity,
    document_type: item.document_type!,
    bag_id: item.bag_id!,
    added_at: item.added_at!,
    body: item.body ?? '',
  }),
  specialCares: (item: Item) => ({
    header: item.header,
    quantity: item.quantity,
    belongs_to: item.belongs_to!,
    bag_id: item.bag_id!,
    added_at: item.added_at!,
    body: item.body ?? '',
  }),
  hygienes: (item: Item) => ({
    header: item.header,
    quantity: item.quantity,
    belongs_to: item.belongs_to!,
    bag_id: item.bag_id!,
    added_at: item.added_at!,
    body: item.body ?? '',
  }),
};
