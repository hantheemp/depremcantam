/*
  This class is responsible for generating bags while new users are onboarding.
  Auto generates bags with retrieving corresponding bag items.

*/

import { createBag } from '~/db/operators/bag';

import { createItem } from '~/db/operators/item';
import { CATEGORY_TABLES, TABLE_MAPPERS } from './constants';
import { ItemsForUI } from '~/services/item/itemGenerator/interfaces';

type BagGenerator = {
  name: string;
  description: string;
  saved_at: string;
  is_owned: boolean;
  itemInserts: ItemsForUI;
};

export async function bagGenerator({
  name,
  description,
  saved_at,
  is_owned,
  itemInserts,
}: BagGenerator) {
  try {
    const bagID = await createBag(name, description, saved_at, is_owned);
    if (!bagID) throw new Error('Error creating bag!');

    const now = new Date().toISOString();

    for (const [category, table] of Object.entries(CATEGORY_TABLES)) {
      const items = itemInserts[category as keyof typeof CATEGORY_TABLES];
      if (!items || items.length === 0) continue;

      const mapper = TABLE_MAPPERS[category as keyof typeof TABLE_MAPPERS];
      const dbItems = items.map((item) =>
        mapper({ ...item, bag_id: bagID, added_at: now, expiry_date: item.expiry_date ?? '' })
      );

      await createItem(table, dbItems);
    }

    return bagID;
  } catch (error) {
    throw new Error(`Error creating bag: ${error}`);
  }
}
