import { FoodItem } from '../interfaces/item';

export type GeneratorNumberTypes = {
  adult: number;
  children: number;
  elderly: number;
  baby: number;
  pet: number;
};

export type FoodRecord = Record<string, FoodItem>;

export type DrinkRecord = Record<string, FoodItem>;

export type ElectronicRecord = Record<string, FoodItem>;

export type ClothingRecord = Record<string, FoodItem>;

export type MedicalRecord = Record<string, FoodItem>;

export type DocumentRecord = Record<string, FoodItem>;

export type SpecialRecord = Record<string, FoodItem>;

export type HygieneRecord = Record<string, FoodItem>;
