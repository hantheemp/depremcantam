export interface FoodItem {
  id: number;
  header: string;
  quantity: number;
  expiry_date: string;
  body?: string;
  bag_id: number;
  added_at: string;
}

export interface DrinkItem {
  id: number;
  header: string;
  quantity: number;
  liters: number;
  body?: string;
  bag_id: number;
  added_at: string;
}

export interface ElectronicItem {
  id: number;
  header: string;
  quantity: number;
  charge: string;
  body: string;
  bag_id: number;
  added_at: string;
}

export interface ClothingItem {
  id: number;
  header: string;
  quantity: number;
  season: string;
  body: string;
  bag_id: number;
  added_at: string;
}

export interface MedicalItem {
  id: number;
  header: string;
  quantity: number;
  medicine_type: string;
  body: string;
  bag_id: number;
  added_at: string;
}

export interface DocumentItem {
  id: number;
  header: string;
  quantity: number;
  document_type: string;
  body: string;
  bag_id: number;
  added_at: string;
}

export interface SpecialCareItem {
  id: number;
  header: string;
  quantity: number;
  belongs_to: string;
  body: string;
  bag_id: number;
  added_at: string;
}

export interface HygieneItem {
  id: number;
  header: string;
  quantity: number;
  belongs_to: string;
  body: string;
  bag_id: number;
  added_at: string;
}
