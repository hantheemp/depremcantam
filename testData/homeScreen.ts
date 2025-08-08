import { Item } from '~/types/item';
import {
  foodItems,
  electronicItems,
  clothingItems,
  medicalItems,
  documentItems,
  specialCareItems,
} from '~/testData/bagScreen';
import { BagPayload } from '~/types/bag';

const allItems: Item[] = [
  ...foodItems,
  ...electronicItems,
  ...clothingItems,
  ...medicalItems,
  ...documentItems,
  ...specialCareItems,
];

export const testBag: BagPayload[] = [
  {
    id: 'bag001',
    name: 'Test Çantası',
    description: 'Test amaçlı hazırlanmış acil durum çantası',
    savedAt: new Date(),
    items: allItems,
  },
];
