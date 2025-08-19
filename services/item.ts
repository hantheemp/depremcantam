import {
  DRINK_BASES,
  FOOD_BASES,
  ELECTRONIC_BASES,
  CLOTHING_BASES,
  MEDICAL_BASES,
  DOCUMENT_BASES,
  SPECIAL_CARE_BASES,
  HYGIENE_BASES,
} from './constants/item';
import {
  DrinkRecord,
  FoodRecord,
  ElectronicRecord,
  ClothingRecord,
  MedicalRecord,
  DocumentRecord,
  SpecialCareRecord,
  HygieneRecord,
  GeneratorNumberTypes,
  ItemRecord,
  Item,
} from './types/item';

export function generateItems({ adult, children, elderly, baby, pet }: GeneratorNumberTypes): Item {
  try {
    const result: Item = {
      foods: generateFoods({ adult, children, elderly, baby, pet }),
      drinks: generateDrinks({ adult, children, elderly, baby, pet }),
      electronics: generateElectronics({ adult, children, elderly, baby, pet }),
      clothings: generateClothings({ adult, children, elderly, baby, pet }),
      medicals: generateMedicals({ adult, children, elderly, baby, pet }),
      documents: generateDocuments({ adult, children, elderly, baby, pet }),
      specialCares: generateSpecialCares({ adult, children, elderly, baby, pet }),
      hygienes: generateHygienes({ adult, children, elderly, baby, pet }),
    };

    return result;
  } catch (error) {
    throw new Error(`Error generating items: ${error}`);
  }
}

function generateFoods({ adult, children, elderly, baby, pet }: GeneratorNumberTypes): FoodRecord {
  try {
    const today = new Date();
    const sixMonthsLater = new Date(today);
    sixMonthsLater.setMonth(today.getMonth() + 6);
    const expiryDate = sixMonthsLater.toISOString();

    const result: FoodRecord = {
      adult: {
        header: FOOD_BASES.adult.header,
        quantity: adult * FOOD_BASES.adult.quantity,
        expiry_date: expiryDate,
      },
      children: {
        header: FOOD_BASES.children.header,
        quantity: children * FOOD_BASES.children.quantity,
        expiry_date: expiryDate,
      },
      elderly: {
        header: FOOD_BASES.elderly.header,
        quantity: elderly * FOOD_BASES.elderly.quantity,
        expiry_date: expiryDate,
      },
      baby: {
        header: FOOD_BASES.baby.header,
        quantity: baby * FOOD_BASES.baby.quantity,
        expiry_date: expiryDate,
      },
      pet: {
        header: FOOD_BASES.pet.header,
        quantity: pet * FOOD_BASES.pet.quantity,
        expiry_date: expiryDate,
      },
      total: { header: 'Toplam', quantity: 0, expiry_date: '' },
    };

    result.total.quantity =
      result.adult.quantity +
      result.children.quantity +
      result.elderly.quantity +
      result.baby.quantity +
      result.pet.quantity;

    return result;
  } catch (error) {
    throw new Error(`Error generating foods: ${error}`);
  }
}

function generateDrinks({
  adult,
  children,
  elderly,
  baby,
  pet,
}: GeneratorNumberTypes): DrinkRecord {
  try {
    const result: DrinkRecord = {
      adult: {
        header: DRINK_BASES.adult.header,
        liters: adult * DRINK_BASES.adult.liters,
      },
      children: {
        header: DRINK_BASES.children.header,
        liters: children * DRINK_BASES.children.liters,
      },
      elderly: {
        header: DRINK_BASES.elderly.header,
        liters: elderly * DRINK_BASES.elderly.liters,
      },
      baby: {
        header: DRINK_BASES.baby.header,
        liters: baby * DRINK_BASES.baby.liters,
      },
      pet: {
        header: DRINK_BASES.pet.header,
        liters: pet * DRINK_BASES.pet.liters,
      },
      total: { header: 'Toplam', liters: 0 },
    };

    result.total.liters =
      result.adult.liters +
      result.children.liters +
      result.elderly.liters +
      result.baby.liters +
      result.pet.liters;

    return result;
  } catch (error) {
    throw new Error(`Error generating drinks: ${error}`);
  }
}

function generateElectronics({
  adult,
  children,
  elderly,
  baby,
  pet,
}: GeneratorNumberTypes): ElectronicRecord {
  try {
    const result: ElectronicRecord = {
      adult: {
        header: ELECTRONIC_BASES.adult.header,
        quantity: adult * ELECTRONIC_BASES.adult.quantity,
        charge: ELECTRONIC_BASES.adult.charge,
      },
      children: {
        header: ELECTRONIC_BASES.children.header,
        quantity: children * ELECTRONIC_BASES.children.quantity,
        charge: ELECTRONIC_BASES.children.charge,
      },
      elderly: {
        header: ELECTRONIC_BASES.elderly.header,
        quantity: elderly * ELECTRONIC_BASES.elderly.quantity,
        charge: ELECTRONIC_BASES.elderly.charge,
      },
      baby: {
        header: ELECTRONIC_BASES.baby.header,
        quantity: baby * ELECTRONIC_BASES.baby.quantity,
        charge: ELECTRONIC_BASES.baby.charge,
      },
      pet: {
        header: ELECTRONIC_BASES.pet.header,
        quantity: pet * ELECTRONIC_BASES.pet.quantity,
        charge: ELECTRONIC_BASES.pet.charge,
      },
      total: { header: 'Toplam', quantity: 0 },
    };

    result.total.quantity =
      result.adult.quantity +
      result.children.quantity +
      result.elderly.quantity +
      result.baby.quantity +
      result.pet.quantity;

    return result;
  } catch (error) {
    throw new Error(`Error generating electronics: ${error}`);
  }
}

function generateClothings({
  adult,
  children,
  elderly,
  baby,
  pet,
}: GeneratorNumberTypes): ClothingRecord {
  try {
    const result: ClothingRecord = {
      adult: {
        header: CLOTHING_BASES.adult.header,
        quantity: adult * CLOTHING_BASES.adult.quantity,
        season: CLOTHING_BASES.adult.season,
      },
      children: {
        header: CLOTHING_BASES.children.header,
        quantity: children * CLOTHING_BASES.children.quantity,
        season: CLOTHING_BASES.children.season,
      },
      elderly: {
        header: CLOTHING_BASES.elderly.header,
        quantity: elderly * CLOTHING_BASES.elderly.quantity,
        season: CLOTHING_BASES.elderly.season,
      },
      baby: {
        header: CLOTHING_BASES.baby.header,
        quantity: baby * CLOTHING_BASES.baby.quantity,
        season: CLOTHING_BASES.baby.season,
      },
      pet: {
        header: CLOTHING_BASES.pet.header,
        quantity: pet * CLOTHING_BASES.pet.quantity,
        season: CLOTHING_BASES.pet.season,
      },
      total: { header: 'Toplam', quantity: 0 },
    };

    result.total.quantity =
      result.adult.quantity +
      result.children.quantity +
      result.elderly.quantity +
      result.baby.quantity +
      result.pet.quantity;

    return result;
  } catch (error) {
    throw new Error(`Error generating clothings: ${error}`);
  }
}

function generateMedicals({
  adult,
  children,
  elderly,
  baby,
  pet,
}: GeneratorNumberTypes): MedicalRecord {
  try {
    const result: MedicalRecord = {
      adult: {
        header: MEDICAL_BASES.adult.header,
        quantity: adult * MEDICAL_BASES.adult.quantity,
        medicine_type: MEDICAL_BASES.adult.medicine_type,
      },
      children: {
        header: MEDICAL_BASES.children.header,
        quantity: children * MEDICAL_BASES.children.quantity,
        medicine_type: MEDICAL_BASES.children.medicine_type,
      },
      elderly: {
        header: MEDICAL_BASES.elderly.header,
        quantity: elderly * MEDICAL_BASES.elderly.quantity,
        medicine_type: MEDICAL_BASES.elderly.medicine_type,
      },
      baby: {
        header: MEDICAL_BASES.baby.header,
        quantity: baby * MEDICAL_BASES.baby.quantity,
        medicine_type: MEDICAL_BASES.baby.medicine_type,
      },
      pet: {
        header: MEDICAL_BASES.pet.header,
        quantity: pet * MEDICAL_BASES.pet.quantity,
        medicine_type: MEDICAL_BASES.pet.medicine_type,
      },
      total: { header: 'Toplam', quantity: 0 },
    };

    result.total.quantity =
      result.adult.quantity +
      result.children.quantity +
      result.elderly.quantity +
      result.baby.quantity +
      result.pet.quantity;

    return result;
  } catch (error) {
    throw new Error(`Error generating medicals: ${error}`);
  }
}

function generateDocuments({
  adult,
  children,
  elderly,
  baby,
  pet,
}: GeneratorNumberTypes): DocumentRecord {
  try {
    const result: DocumentRecord = {
      adult: {
        header: DOCUMENT_BASES.adult.header,
        quantity: adult * DOCUMENT_BASES.adult.quantity,
        document_type: DOCUMENT_BASES.adult.document_type,
      },
      children: {
        header: DOCUMENT_BASES.children.header,
        quantity: children * DOCUMENT_BASES.children.quantity,
        document_type: DOCUMENT_BASES.children.document_type,
      },
      elderly: {
        header: DOCUMENT_BASES.elderly.header,
        quantity: elderly * DOCUMENT_BASES.elderly.quantity,
        document_type: DOCUMENT_BASES.elderly.document_type,
      },
      baby: {
        header: DOCUMENT_BASES.baby.header,
        quantity: baby * DOCUMENT_BASES.baby.quantity,
        document_type: DOCUMENT_BASES.baby.document_type,
      },
      pet: {
        header: DOCUMENT_BASES.pet.header,
        quantity: pet * DOCUMENT_BASES.pet.quantity,
        document_type: DOCUMENT_BASES.pet.document_type,
      },
      total: { header: 'Toplam', quantity: 0, document_type: '' },
    };

    result.total.quantity =
      result.adult.quantity +
      result.children.quantity +
      result.elderly.quantity +
      result.baby.quantity +
      result.pet.quantity;

    return result;
  } catch (error) {
    throw new Error(`Error generating documents: ${error}`);
  }
}

function generateSpecialCares({
  adult,
  children,
  elderly,
  baby,
  pet,
}: GeneratorNumberTypes): SpecialCareRecord {
  try {
    const result: SpecialCareRecord = {
      adult: {
        header: SPECIAL_CARE_BASES.adult.header,
        quantity: adult * SPECIAL_CARE_BASES.adult.quantity,
        belongs_to: SPECIAL_CARE_BASES.adult.belongs_to,
      },
      children: {
        header: SPECIAL_CARE_BASES.children.header,
        quantity: children * SPECIAL_CARE_BASES.children.quantity,
        belongs_to: SPECIAL_CARE_BASES.children.belongs_to,
      },
      elderly: {
        header: SPECIAL_CARE_BASES.elderly.header,
        quantity: elderly * SPECIAL_CARE_BASES.elderly.quantity,
        belongs_to: SPECIAL_CARE_BASES.elderly.belongs_to,
      },
      baby: {
        header: SPECIAL_CARE_BASES.baby.header,
        quantity: baby * SPECIAL_CARE_BASES.baby.quantity,
        belongs_to: SPECIAL_CARE_BASES.baby.belongs_to,
      },
      pet: {
        header: SPECIAL_CARE_BASES.pet.header,
        quantity: pet * SPECIAL_CARE_BASES.pet.quantity,
        belongs_to: SPECIAL_CARE_BASES.pet.belongs_to,
      },
      total: { header: 'Toplam', quantity: 0, belongs_to: '' },
    };

    result.total.quantity =
      result.adult.quantity +
      result.children.quantity +
      result.elderly.quantity +
      result.baby.quantity +
      result.pet.quantity;

    return result;
  } catch (error) {
    throw new Error(`Error generating specialCares: ${error}`);
  }
}

function generateHygienes({
  adult,
  children,
  elderly,
  baby,
  pet,
}: GeneratorNumberTypes): HygieneRecord {
  try {
    const result: HygieneRecord = {
      adult: {
        header: HYGIENE_BASES.adult.header,
        quantity: adult * HYGIENE_BASES.adult.quantity,
        belongs_to: HYGIENE_BASES.adult.belongs_to,
      },
      children: {
        header: HYGIENE_BASES.children.header,
        quantity: children * HYGIENE_BASES.children.quantity,
        belongs_to: HYGIENE_BASES.children.belongs_to,
      },
      elderly: {
        header: HYGIENE_BASES.elderly.header,
        quantity: elderly * HYGIENE_BASES.elderly.quantity,
        belongs_to: HYGIENE_BASES.elderly.belongs_to,
      },
      baby: {
        header: HYGIENE_BASES.baby.header,
        quantity: baby * HYGIENE_BASES.baby.quantity,
        belongs_to: HYGIENE_BASES.baby.belongs_to,
      },
      pet: {
        header: HYGIENE_BASES.pet.header,
        quantity: pet * HYGIENE_BASES.pet.quantity,
        belongs_to: HYGIENE_BASES.pet.belongs_to,
      },
      total: { header: 'Toplam', quantity: 0 },
    };

    result.total.quantity =
      result.adult.quantity +
      result.children.quantity +
      result.elderly.quantity +
      result.baby.quantity +
      result.pet.quantity;

    return result;
  } catch (error) {
    throw new Error(`Error generating hygienes: ${error}`);
  }
}
