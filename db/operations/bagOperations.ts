import { eq } from 'drizzle-orm';
import { getDB } from '../connection';
import { bags } from '../schema';

export async function createBag(
  name: string,
  description: string,
  saved_at: string,
  is_owned: boolean
) {
  try {
    const db = await getDB();

    db.insert(bags).values({
      name: name,
      description: description,
      saved_at: saved_at,
      is_owned: is_owned,
    });
  } catch (error) {
    throw new Error(`Error occured while creating new bag: ${error}`);
  }
}

export async function getBagByID(id: number) {
  try {
    const db = await getDB();

    const bag = db.select().from(bags).where(eq(bags.id, id)).get();

    if (bag) {
      return bag;
    } else {
      return;
    }
  } catch (error) {
    throw new Error(`Error fetching bag: ${id}`);
  }
}

export async function getAllBags() {
  try {
    const db = await getDB();

    const allBags = db.select().from(bags).all();

    if (allBags) {
      return allBags;
    } else {
      return;
    }
  } catch (error) {
    throw new Error(`Error fetching all bags: ${error}`);
  }
}

export default async function updateBag(
  id: number,
  name: string,
  description: string,
  saved_at: string,
  is_owned: boolean
) {
  try {
    const db = await getDB();

    db.update(bags)
      .set({
        name: name,
        description: description,
        saved_at: saved_at,
        is_owned: is_owned,
      })
      .where(eq(bags.id, id));
  } catch (error) {
    throw new Error(`Error updating bag ${id}`);
  }
}

export async function deleteBag(id: number) {
  try {
    const db = await getDB();

    db.delete(bags).where(eq(bags.id, id));
  } catch (error) {
    throw new Error(`Error deleting bag ${id}`);
  }
}
