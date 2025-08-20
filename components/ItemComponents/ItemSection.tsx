import { Text, YStack } from 'tamagui';
import { ItemSectionProps } from './interfaces';

export default function ItemSection({ title, children }: ItemSectionProps) {
  return (
    <YStack mb="$5">
      <Text fontSize="$5" fontWeight="700" color="#EDEDEF" mb="$3">
        {title}
      </Text>
      {children}
    </YStack>
  );
}
