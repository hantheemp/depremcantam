import { Text, YStack } from 'tamagui';

interface BagSectionProps {
  title: string;
  children: React.ReactNode;
}

export default function BagSection({ title, children }: BagSectionProps) {
  return (
    <YStack mb="$6">
      <Text fontSize="$9" fontWeight="700" color="#EDEDEF" mb="$6">
        {title}
      </Text>
      {children}
    </YStack>
  );
}
