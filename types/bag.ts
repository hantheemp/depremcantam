// Bag types. Created for consistency, not needed in the current context.

import { Item } from 'types/item';

export type BagPayload = {
  items: Item[];
  savedAt: Date;
  id: string;
  name: string;
  description: string;
};
