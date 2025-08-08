import { Text, YStack } from 'tamagui';

interface BagSectionProps {
  title: string;
  children: React.ReactNode;
}

export default function BagSection({ title, children }: BagSectionProps) {
  return (
    <YStack mb="$5">
      <Text fontSize="$9" fontWeight="700" color="#EDEDEF" mb="$3">
        {title}
      </Text>
      {children}
    </YStack>
  );
}
