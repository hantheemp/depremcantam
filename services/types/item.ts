import {
  DrinkItem,
  FoodItem,
  ClothingItem,
  DocumentItem,
  ElectronicItem,
  MedicalItem,
  SpecialCareItem,
  HygieneItem,
} from '../interfaces/item';

export type GeneratorNumberTypes = {
  adult: number;
  children: number;
  elderly: number;
  baby: number;
  pet: number;
};

export type Item = {
  foods: FoodRecord;
  drinks: DrinkRecord;
  electronics: ElectronicRecord;
  clothings: ClothingRecord;
  medicals: MedicalRecord;
  documents: DocumentRecord;
  specialCares: SpecialCareRecord;
  hygienes: HygieneRecord;
};

export type ItemRecord = Record<string, Item>;

export type FoodRecord = Record<string, FoodItem>;

export type DrinkRecord = Record<string, DrinkItem>;

export type ElectronicRecord = Record<string, ElectronicItem>;

export type ClothingRecord = Record<string, ClothingItem>;

export type MedicalRecord = Record<string, MedicalItem>;

export type DocumentRecord = Record<string, DocumentItem>;

export type SpecialCareRecord = Record<string, SpecialCareItem>;

export type HygieneRecord = Record<string, HygieneItem>;
