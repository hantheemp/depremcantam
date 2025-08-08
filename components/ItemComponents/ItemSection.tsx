import { Text, YStack } from 'tamagui';

interface ItemSectionProps {
  title: string;
  children: React.ReactNode;
}

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
