export interface Item {
  id?: number; // optional for DB (autoincrement)
  bag_id?: number; // set in DB, not required in UI
  added_at?: string; // set in DB, not required in UI

  header: string;
  quantity: number;
  body?: string | null;

  // category-specific
  expiry_date?: string; // food
  liters?: number; // drinks
  charge?: string; // electronics
  season?: string; // clothing
  medicine_type?: string; // medicals
  document_type?: string; // documents
  belongs_to?: string; // special care / hygiene
}

// What UI works with (no DB-only props)
export type ItemForUI = Omit<Item, 'id' | 'bag_id' | 'added_at'>;

// What DB expects (everything filled)
export type ItemForDB = Required<Pick<Item, 'bag_id' | 'added_at'>> & Item;

export type ItemsForUI = {
  foods: ItemForUI[];
  drinks: ItemForUI[];
  electronics: ItemForUI[];
  clothings: ItemForUI[];
  medicals: ItemForUI[];
  documents: ItemForUI[];
  specialCares: ItemForUI[];
  hygienes: ItemForUI[];
};
