import {
  FoodItem,
  ElectronicItem,
  ClothingItem,
  MedicalItem,
  DocumentItem,
  SpecialCareItem,
} from '~/types/item';

export const foodItems: FoodItem[] = [
  {
    id: 'f1',
    header: 'Konserve',
    quantity: 15,
    expiryDate: '28/08/2026',
    body: 'Konserveler yüksek enerji içerir.',
  },
  {
    id: 'f2',
    header: 'Su',
    quantity: 8,
    expiryDate: '28/08/2026',
    body: 'İçme suyu, sağlıklı kalmak için gereklidir.',
  },
];

export const electronicItems: ElectronicItem[] = [
  {
    id: 'e1',
    header: 'El Feneri',
    quantity: 4,
    charge: '%80',
    body: 'Uzun süreli kullanım için şarj durumu önemli.',
  },
  {
    id: 'e2',
    header: 'Radyo',
    quantity: 5,
    charge: 'Çalışır durumda',
    body: 'Acil durum haberleri için kullanılır.',
  },
];

export const clothingItems: ClothingItem[] = [
  {
    id: 'c1',
    header: 'Yağmurluk',
    quantity: 2,
    season: 'Yağmur Mevsimi',
    body: 'Su geçirmez ve hafif malzeme.',
  },
  {
    id: 'c2',
    header: 'Kazak',
    quantity: 3,
    season: 'Kış',
    body: 'Soğuk hava için kalın kazaklar.',
  },
];

export const medicalItems: MedicalItem[] = [
  {
    id: 'm1',
    header: 'Ağrı Kesici',
    quantity: 10,
    medicineType: 'Tablet',
    body: 'Baş ağrısı ve hafif ağrılar için.',
  },
  {
    id: 'm2',
    header: 'Antiseptik Krem',
    quantity: 2,
    medicineType: 'Krem',
    body: 'Yara bakımı için antiseptik krem.',
  },
];

export const documentItems: DocumentItem[] = [
  {
    id: 'd1',
    header: 'Kimlik',
    quantity: 1,
    documentType: 'Nüfus Cüzdanı',
    body: 'Kimlik kartı, acil durumlarda gereklidir.',
  },
  {
    id: 'd2',
    header: 'Sigorta Poliçesi',
    quantity: 1,
    documentType: 'Sigorta',
    body: 'Sağlık ve ev sigortası belgeleri.',
  },
];

export const specialCareItems: SpecialCareItem[] = [
  {
    id: 's1',
    header: 'Bebek Bezi',
    quantity: 20,
    belongsTo: 'Bebek',
    body: 'Bebek için gerekli hijyen ürünü.',
  },
  {
    id: 's2',
    header: 'Engelli Tekerlekli Sandalye',
    quantity: 1,
    belongsTo: 'Engelli Birey',
    body: 'Mobilite desteği sağlar.',
  },
];