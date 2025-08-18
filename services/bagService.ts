import { getBagByID, getAllBags } from '~/db/operations/bagOperations';
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
  try {
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
  } catch (error) {
    throw new Error(`Error fetching bag with items: ${bagID}`);
  }
}

export async function getAllBagsWithItems() {
  try {
    const bags = await getAllBags();

    if (!bags || bags.length === 0) {
      return [];
    }

    const bagWithItems = await Promise.all(
      bags.map(async (bag) => {
        const [foods, electronic, clothing, medical, document, specialCare] = await Promise.all([
          getItemsByBagId(foodItems, bag.id),
          getItemsByBagId(electronicItems, bag.id),
          getItemsByBagId(clothingItems, bag.id),
          getItemsByBagId(medicalItems, bag.id),
          getItemsByBagId(documentItems, bag.id),
          getItemsByBagId(specialCareItems, bag.id),
        ]);

        return {
          ...bag,
          items: { foods, electronic, clothing, medical, document, specialCare },
        };
      })
    );

    return bagWithItems;
  } catch (error) {
    throw new Error(`Error fetching bags: ${error}`);
  }
}

// TODO: Implement the actual logic using operations,

export async function updateBag(bagID: number) {
  try {
  } catch (error) {
    throw new Error(`Error updating bag: ${bagID}`);
  }
}

export async function deleteBag(bagID: number) {
  try {
  } catch (error) {
    throw new Error(`Error deleting bag: ${bagID}`);
  }
}
