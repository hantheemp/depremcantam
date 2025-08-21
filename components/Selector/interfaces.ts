import { ComponentType } from 'react';

export interface SelectorButtonProps {
  Icon: ComponentType<{ size?: string | number }>;
  size?: string | number;
  isSelected: boolean;
  onPress(): void;
}

export interface SelectorProps {
  mappableArray: ComponentType<{ size?: string | number }>[];
}
