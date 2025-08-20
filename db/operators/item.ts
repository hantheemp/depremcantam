import { SQLiteTable } from 'drizzle-orm/sqlite-core';
import { getDB } from '../connection';
import { eq } from 'drizzle-orm';
import {
  clothingItems,
  documentItems,
  drinkItems,
  electronicItems,
  foodItems,
  hygieneItems,
  medicalItems,
  specialCareItems,
} from '../schema';

export async function createItem<T extends SQLiteTable>(
  table: T,
  values: T['$inferInsert'] | T['$inferInsert'][]
) {
  try {
    const db = await getDB();
    if (Array.isArray(values)) {
      await db.insert(table).values(values);
    } else {
      await db.insert(table).values(values);
    }
  } catch (error) {
    throw new Error(`Error occurred while creating item: ${error}`);
  }
}

export async function getItemById<T extends SQLiteTable>(table: T, id: number) {
  try {
    const db = await getDB();

    return await db
      .select()
      .from(table)
      .where(eq((table as any).id, id))
      .get();
  } catch (error) {
    throw new Error(`Error occured while fetching item: ${error}`);
  }
}

export async function getItemsByBagId<T extends SQLiteTable>(table: T, bagID: number) {
  try {
    const db = await getDB();

    return await db
      .select()
      .from(table)
      .where(eq((table as any).bag_id, bagID))
      .all();
  } catch (error) {
    throw new Error(`Error occured while fetching items of : ${error}`);
  }
}

export async function getAllItemsByBagId(bagID: number) {
  const foods = await getItemsByBagId(foodItems, bagID);
  const drinks = await getItemsByBagId(drinkItems, bagID);
  const clothes = await getItemsByBagId(clothingItems, bagID);
  const documents = await getItemsByBagId(documentItems, bagID);
  const electronics = await getItemsByBagId(electronicItems, bagID);
  const medicals = await getItemsByBagId(medicalItems, bagID);
  const specialCares = await getItemsByBagId(specialCareItems, bagID);
  const hygienes = await getItemsByBagId(hygieneItems, bagID);

  return { foods, clothes, documents, electronics, drinks, medicals, specialCares, hygienes };
}

export async function updateItem<T extends SQLiteTable>(
  table: T,
  bagID: number,
  id: number,
  values: Partial<typeof table.$inferInsert>
) {
  try {
    const db = await getDB();

    await db
      .update(table)
      .set(values)
      .where(eq((table as any).id, id) && eq((table as any).bag_id, bagID));
  } catch (error) {
    throw new Error(`Error occured while updating item : ${error}`);
  }
}

export async function deleteItem<T extends SQLiteTable>(table: T, id: number) {
  try {
    const db = await getDB();
    await db.delete(table).where(eq((table as any).id, id));
  } catch (error) {
    throw new Error(`Error occured while deleting item : ${error}`);
  }
}
