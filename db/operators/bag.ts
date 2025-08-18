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

    const result = await db.insert(bags).values({
      name,
      description,
      saved_at,
      is_owned,
    });

    const bagID = result.lastInsertRowId;

    if (!bagID) throw new Error('Failed to get inserted bag ID');

    return bagID;
  } catch (error) {
    throw new Error(`Error occurred while creating new bag: ${error}`);
  }
}

export async function getBagByID(id: number) {
  try {
    const db = await getDB();

    const bag = await db.select().from(bags).where(eq(bags.id, id)).get();

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

    const allBags = await db.select().from(bags).all();

    if (allBags) {
      return allBags;
    } else {
      return;
    }
  } catch (error) {
    throw new Error(`Error fetching all bags: ${error}`);
  }
}

export async function updateBag(id: number, bagUpdates: Partial<typeof bags.$inferInsert>) {
  try {
    const db = await getDB();

    await db
      .update(bags)
      .set({
        name: bagUpdates.name,
        description: bagUpdates.description,
        saved_at: bagUpdates.saved_at,
        is_owned: bagUpdates.is_owned,
      })
      .where(eq(bags.id, id));
  } catch (error) {
    throw new Error(`Error updating bag ${id}`);
  }
}

export async function deleteBag(id: number) {
  try {
    const db = await getDB();

    await db.delete(bags).where(eq(bags.id, id));
  } catch (error) {
    throw new Error(`Error deleting bag ${id}`);
  }
}
