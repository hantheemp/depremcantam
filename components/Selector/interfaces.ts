import { ComponentType } from 'react';

export interface SelectorButtonProps {
  Icon: ComponentType<{ size?: string | number }>;
  size?: string | number;
}

export interface SelectorProps {
  mappableArray: ComponentType<{ size?: string | number }>[];
}
