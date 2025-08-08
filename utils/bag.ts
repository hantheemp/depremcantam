/*
  NOTE: This file is responsible for managing the emergency bag's data storage.
  It handles saving, loading, and clearing the bag's contents using AsyncStorage (CRUD).
  Potentially, it can be extended to include more complex logic in the future, or it will be removed if not needed.
  #TODO: The structure of the bag and items should be refactored to allow for more flexibility.
  #TODO: Consider adding validation for the bag contents before saving.
*/

import AsyncStorage from '@react-native-async-storage/async-storage';

// #TODO: Refactor for new bag structure.
export type BagPayload = {
  foodItems: Item[];
  electronicItems: Item[];
  savedAt?: string;
};

// #TODO: Refactor for new item structure.
export type Item = {
  id: string;
  header: string;
  quantity: number;
  body?: string;
};

export async function saveBag(payload: BagPayload) {
  await AsyncStorage.setItem("BAG_KEY", JSON.stringify({ ...payload, savedAt: new Date().toISOString() }));
}

export async function getBag(): Promise<BagPayload | null> {
  const raw = await AsyncStorage.getItem("BAG_KEY");
  if (!raw) return null;
  try {
    return JSON.parse(raw) as BagPayload;
  } catch {
    return null;
  }
}

export async function clearBag() {
  await AsyncStorage.removeItem("BAG_KEY");
}