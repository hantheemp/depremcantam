import { Hamburger, Shirt } from '@tamagui/lucide-icons';

export const itemTypes = [
  {
    key: 'foods',
    title: 'Gıdalar',
    icon: Hamburger,
    items: items.foods,
  },
  {
    key: 'clothes',
    title: 'Kıyafetler',
    icon: Shirt,
    items: items.clothes,
  },
  {
    key: 'electronics',
    title: 'Elektronikler',
    icon: Smartphone,
    items: items.electronics,
  },
  {
    key: 'documents',
    title: 'Belgeler',
    icon: FileText,
    items: items.documents,
  },
];
