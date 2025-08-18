import { getBagByID } from '~/db/operations/bagOperations';
import { getItemsByBagId } from '~/db/operations/itemOperations';
import {
  clothingItems,
  documentItems,
  electronicItems,
  foodItems,
  medicalItems,
  specialCareItems,
} from '~/db/schema';

export async function getBagWithItems(bagID: number) {
  const bag = await getBagByID(bagID);

  if (!bag) {
    return;
  }

  const [foods, electronic, clothing, medical, document, specialCare] = await Promise.all([
    getItemsByBagId(foodItems, bagID),
    getItemsByBagId(electronicItems, bagID),
    getItemsByBagId(clothingItems, bagID),
    getItemsByBagId(medicalItems, bagID),
    getItemsByBagId(documentItems, bagID),
    getItemsByBagId(specialCareItems, bagID),
  ]);

  return {
    ...bag,
    items: { foods, electronic, clothing, medical, document, specialCare },
  };
}
