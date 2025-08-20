import {
  Hamburger,
  GlassWater,
  Bandage,
  CircuitBoard,
  SoapDispenserDroplet,
  Shirt,
  IdCard,
  Hammer,
  Baby,
  Sun,
  Snowflake,
  X,
  Check,
  Accessibility,
  Dog,
} from '@tamagui/lucide-icons';

export const itemTypeIcons = [
  Hamburger,
  GlassWater,
  Bandage,
  CircuitBoard,
  SoapDispenserDroplet,
  Shirt,
  IdCard,
  Hammer,
  Baby,
];

export const clothTypeIcons = [Sun, Snowflake];

export const isChargedIcons = [X, Check];

export const belongsToIcons = [Baby, Accessibility, Dog];

export const selectOptions = [
  {
    label: 'Kıyafet Türü',
    options: ['Seçin', 'Tişört', 'Mont', 'Pantolon'],
  },
  {
    label: 'İlaç Türü',
    options: ['Seçin', 'Ağrı Kesici', 'Antibiyotik', 'Vitamin'],
  },
  {
    label: 'Ürün Türü',
    options: ['Seçin', 'Elektronik', 'Gıda', 'Hijyen'],
  },
  {
    label: 'Belge Türü',
    options: ['Seçin', 'Kimlik', 'Pasaport', 'Ehliyet'],
  },
];
