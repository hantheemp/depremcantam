import { updateBag, getBagByID, getAllBags, deleteBag } from '~/db/operations/bagOperations';
import { deleteItem, getItemsByBagId, updateItem } from '~/db/operations/itemOperations';
import {
  bags,
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
      return {};
    }

    const [foods, electronic, clothing, medical, document, specialCare] = await Promise.all([
      await getItemsByBagId(foodItems, bagID),
      await getItemsByBagId(electronicItems, bagID),
      await getItemsByBagId(clothingItems, bagID),
      await getItemsByBagId(medicalItems, bagID),
      await getItemsByBagId(documentItems, bagID),
      await getItemsByBagId(specialCareItems, bagID),
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
      return {};
    }

    const bagWithItems = await Promise.all(
      bags.map(async (bag) => {
        const [foods, electronic, clothing, medical, document, specialCare] = await Promise.all([
          await getItemsByBagId(foodItems, bag.id),
          await getItemsByBagId(electronicItems, bag.id),
          await getItemsByBagId(clothingItems, bag.id),
          await getItemsByBagId(medicalItems, bag.id),
          await getItemsByBagId(documentItems, bag.id),
          await getItemsByBagId(specialCareItems, bag.id),
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

export async function updateBagWithItems(
  bagID: number,
  bagUpdates: Partial<typeof bags.$inferInsert>,
  itemUpdates: {
    foods?: (typeof foodItems.$inferInsert)[];
    electronic?: (typeof electronicItems.$inferInsert)[];
    clothing?: (typeof clothingItems.$inferInsert)[];
    medical?: (typeof medicalItems.$inferInsert)[];
    document?: (typeof documentItems.$inferInsert)[];
    specialCare?: (typeof specialCareItems.$inferInsert)[];
  }
) {
  try {
    await updateBag(bagID, bagUpdates);

    if (itemUpdates.foods) {
      for (const food of itemUpdates.foods) {
        if (!food.id) {
          throw new Error(`An id should be declared for every item!`);
        } else {
          await updateItem(foodItems, bagID, food.id, food);
        }
      }
    }

    if (itemUpdates.electronic) {
      for (const electronic of itemUpdates.electronic) {
        if (!electronic.id) {
          throw new Error(`An id should be declared for every item!`);
        } else {
          await updateItem(electronicItems, bagID, electronic.id, electronic);
        }
      }
    }

    if (itemUpdates.clothing) {
      for (const clothing of itemUpdates.clothing) {
        if (!clothing.id) {
          throw new Error(`An id should be declared for every item!`);
        } else {
          await updateItem(clothingItems, bagID, clothing.id, clothing);
        }
      }
    }

    if (itemUpdates.medical) {
      for (const medical of itemUpdates.medical) {
        if (!medical.id) {
          throw new Error(`An id should be declared for every item!`);
        } else {
          await updateItem(medicalItems, bagID, medical.id, medical);
        }
      }
    }

    if (itemUpdates.document) {
      for (const document of itemUpdates.document) {
        if (!document.id) {
          throw new Error(`An id should be declared for every item!`);
        } else {
          await updateItem(documentItems, bagID, document.id, document);
        }
      }
    }

    if (itemUpdates.specialCare) {
      for (const specialCare of itemUpdates.specialCare) {
        if (!specialCare.id) {
          throw new Error(`An id should be declared for every item!`);
        } else {
          await updateItem(specialCareItems, bagID, specialCare.id, specialCare);
        }
      }
    }
  } catch (error) {
    throw new Error(`Error updating bag: ${bagID}`);
  }
}

export async function deleteBagWithItems(bagID: number) {
  try {
    const bag = await getBagByID(bagID);

    const [foods, electronics, clothings, medicals, documents, specialCares] = await Promise.all([
      await getItemsByBagId(foodItems, bagID),
      await getItemsByBagId(electronicItems, bagID),
      await getItemsByBagId(clothingItems, bagID),
      await getItemsByBagId(medicalItems, bagID),
      await getItemsByBagId(documentItems, bagID),
      await getItemsByBagId(specialCareItems, bagID),
    ]);

    if (!bag) {
      throw new Error(`Bag instance can not be null while performing deletion!`);
    }

    if (foods) {
      for (const food of foods) {
        if (!food.id) {
          throw new Error(`An id should be declared for every item!`);
        } else {
          await deleteItem(foodItems, food.id);
        }
      }
    }

    if (electronics) {
      for (const electronic of electronics) {
        if (!electronic.id) {
          throw new Error(`An id should be declared for every item!`);
        } else {
          await deleteItem(foodItems, electronic.id);
        }
      }
    }

    if (clothings) {
      for (const clothing of clothings) {
        if (!clothing.id) {
          throw new Error(`An id should be declared for every item!`);
        } else {
          await deleteItem(foodItems, clothing.id);
        }
      }
    }

    if (medicals) {
      for (const medical of medicals) {
        if (!medical.id) {
          throw new Error(`An id should be declared for every item!`);
        } else {
          await deleteItem(foodItems, medical.id);
        }
      }
    }

    if (documents) {
      for (const document of documents) {
        if (!document.id) {
          throw new Error(`An id should be declared for every item!`);
        } else {
          await deleteItem(foodItems, document.id);
        }
      }
    }

    if (specialCares) {
      for (const specialCare of specialCares) {
        if (!specialCare.id) {
          throw new Error(`An id should be declared for every item!`);
        } else {
          await deleteItem(foodItems, specialCare.id);
        }
      }
    }

    await deleteBag(bagID);
  } catch (error) {
    throw new Error(`Error deleting bag: ${bagID}`);
  }
}
