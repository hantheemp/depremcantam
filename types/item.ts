// Item types
export type FoodItem = {
  id: string;
  header: string;
  quantity: number;
  expiryDate: string; // Optional, for food items
  body?: string; // Additional information to display or send notification
};

export type ElectronicItem = {
  id: string;
  header: string;
  quantity: number;
  charge: string; // Optional, for electronic items
  body: string; // Additional information to display or send notification
};

export type ClothingItem = {
  id: string;
  header: string;
  quantity: number;
  season: string; // Optional, for clothing items
  body: string; // Additional information to display or send notification
};

export type MedicalItem = {
  id: string;
  header: string;
  quantity: number;
  medicineType: string; // Optional, for medical items
  body: string; // Additional information to display or send notification
};

export type DocumentItem = {
  id: string;
  header: string;
  quantity: number;
  documentType: string; // Optional, for document items
  body: string; // Additional information to display or send notification
};

export type SpecialCareItem = {
  id: string;
  header: string;
  quantity: number;
  belongsTo: string; // Optional, to indicate who the item belongs to (for example, diapers for a baby)
  body: string; // Additional information to display or send notification
};

// Union type for all items
export type Item = 
  | FoodItem 
  | ElectronicItem 
  | ClothingItem 
  | MedicalItem 
  | DocumentItem 
  | SpecialCareItem;