export interface ItemProps {
  icon: React.ComponentType<{ size: number; color: string }>;
  header: string;
  body: string;
  quantity: number;
  onDecrease: () => void;
  onIncrease: () => void;
}

export interface ItemSectionProps {
  title: string;
  children: React.ReactNode;
}
