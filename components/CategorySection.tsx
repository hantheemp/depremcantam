import { Text, YStack } from 'tamagui';

interface CategorySectionProps {
  title: string;
  children: React.ReactNode;
}

export default function CategorySection({ title, children }: CategorySectionProps) {
  return (
    <YStack mb="$5">
      <Text fontSize="$5" fontWeight="700" color="#EDEDEF" mb="$3">
        {title}
      </Text>
      {children}
    </YStack>
  );
}
