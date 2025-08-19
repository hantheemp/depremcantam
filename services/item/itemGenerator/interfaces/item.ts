export interface ItemForUI {
  header: string;
  quantity: number;
  expiry_date?: string;
  charge?: string;
  season?: string;
  medicine_type?: string;
  document_type?: string;
  belongs_to?: string;
  liters?: number;
}

export interface ItemsForUI {
  foods: ItemForUI[];
  drinks: ItemForUI[];
  electronics: ItemForUI[];
  clothings: ItemForUI[];
  medicals: ItemForUI[];
  documents: ItemForUI[];
  specialCares: ItemForUI[];
  hygienes: ItemForUI[];
}
