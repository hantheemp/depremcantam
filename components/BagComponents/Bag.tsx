import { ChevronRight, Hamburger } from '@tamagui/lucide-icons';
import { Button, Text, XStack, YStack } from 'tamagui';

type BagProps = {
  header: string;
  quantity: number;
  body: string;
};

export default function Bag({ header, quantity, body }: BagProps) {
  return (
    <YStack bg="$background" jc="space-between">
      <XStack ai="center" jc="flex-start" w="100%" py="$4">
        <Button disabled size="$5" borderRadius="$6" bg="#2B3640" jc="center" />
        <YStack f={1} ml="$4" gap="$2">
          <Text fontSize="$6" fontWeight="800" color="#EDEDEF">
            {header} ({quantity})
          </Text>
          <Text fontSize="$5" color="#7C8996" fontWeight="400">
            {body}
          </Text>
        </YStack>
        <Button iconAfter={<ChevronRight color="#EDEDED" size="$1.5" />}></Button>
      </XStack>
    </YStack>
  );
}
