import { Button } from 'tamagui';
import { SelectorButtonProps } from './interfaces';
export default function SelectorButton({ Icon, isSelected, onPress }: SelectorButtonProps) {
  return (
    <Button
      bg={isSelected ? 'rgba(65, 140, 140, 1)' : 'rgba(75, 85, 99, 0.6)'}
      size="$5"
      w="$6"
      h="$6"
      background="$gray5"
      icon={<Icon size="$1.5" />}
      onPress={onPress}
    />
  );
}
