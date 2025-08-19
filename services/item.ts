import { FOOD_BASES } from './constants/item';
import { FoodRecord, GeneratorNumberTypes } from './types/item';

export function generateFoods({
  adult,
  children,
  elderly,
  baby,
  pet,
}: GeneratorNumberTypes): FoodRecord {
  try {
    const result: FoodRecord = {
      adult: { label: FOOD_BASES.adult.label, amount: adult * FOOD_BASES.adult.quantity },
      children: {
        label: FOOD_BASES.children.label,
        amount: children * FOOD_BASES.children.quantity,
      },
      elderly: { label: FOOD_BASES.elderly.label, amount: elderly * FOOD_BASES.elderly.quantity },
      baby: { label: FOOD_BASES.baby.label, amount: baby * FOOD_BASES.baby.quantity },
      pet: { label: FOOD_BASES.pet.label, amount: pet * FOOD_BASES.pet.quantity },
      total: { label: 'Toplam', amount: 0 },
    };

    result.total.amount =
      result.adult.amount +
      result.children.amount +
      result.elderly.amount +
      result.baby.amount +
      result.pet.amount;

    return result;
  } catch (error) {
    throw new Error(`Error generating foods: ${error}`);
  }
}

export function generateDrinks({
  adult,
  children,
  elderly,
  baby,
  pet,
}: GeneratorNumberTypes): Record<string, number> {
  try {
  } catch (error) {
    throw new Error(`Error generating drinks: ${error}`);
  }
}

export function generateElectronics({
  adult,
  children,
  elderly,
  baby,
  pet,
}: GeneratorNumberTypes): number {
  try {
  } catch (error) {
    throw new Error(`Error generating electronics: ${error}`);
  }
}

export function generateClothings({
  adult,
  children,
  elderly,
  baby,
  pet,
}: GeneratorNumberTypes): number {
  try {
  } catch (error) {
    throw new Error(`Error generating clothings: ${error}`);
  }
}

export function generateMedicals({
  adult,
  children,
  elderly,
  baby,
  pet,
}: GeneratorNumberTypes): number {
  try {
  } catch (error) {
    throw new Error(`Error generating medicals: ${error}`);
  }
}

export function generateDocuments({
  adult,
  children,
  elderly,
  baby,
  pet,
}: GeneratorNumberTypes): number {
  try {
  } catch (error) {
    throw new Error(`Error generating documents: ${error}`);
  }
}

export function generateSpecialCares({
  adult,
  children,
  elderly,
  baby,
  pet,
}: GeneratorNumberTypes): number {
  try {
  } catch (error) {
    throw new Error(`Error generating specialCares: ${error}`);
  }
}

export function generateHygienes({
  adult,
  children,
  elderly,
  baby,
  pet,
}: GeneratorNumberTypes): number {
  try {
  } catch (error) {
    throw new Error(`Error generating hygienes: ${error}`);
  }
}
