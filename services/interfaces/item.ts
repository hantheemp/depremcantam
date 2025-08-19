export interface FoodItem {
  header: string;
  quantity: number;
  expiry_date: string;
}

export interface DrinkItem {
  header: string;
  liters: number;
}

export interface ElectronicItem {
  header: string;
  quantity: number;
  charge?: string;
}

export interface ClothingItem {
  header: string;
  quantity: number;
  season?: string;
}

export interface MedicalItem {
  header: string;
  quantity: number;
  medicine_type?: string;
}

export interface DocumentItem {
  header: string;
  quantity: number;
  document_type: string;
}

export interface SpecialCareItem {
  header: string;
  quantity: number;
  belongs_to: string;
}

export interface HygieneItem {
  header: string;
  quantity: number;
  belongs_to?: string;
}
