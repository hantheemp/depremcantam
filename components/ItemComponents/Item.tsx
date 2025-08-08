import { ChevronRight, Hamburger, Minus, Plus } from '@tamagui/lucide-icons';
import { Button, Text, XStack, YStack } from 'tamagui';

interface ItemProps {
  icon: React.ComponentType<{ size: number; color: string }>;
  header: string;
  body: string;
  quantity: number;
  onDecrease: () => void;
  onIncrease: () => void;
}

export default function ItemComponent({
  icon: Icon,
  header,
  body,
  quantity,
  onDecrease,
  onIncrease,
}: ItemProps) {
  return (
    <XStack ai="center" jc="space-between" p="$4" mb="$3" bg="#2B3640" borderRadius="$6">
      <XStack ai="center" gap="$3" f={1}>
        <YStack w={40} h={40} ai="center" jc="center" bg="rgba(75, 85, 99, 0.6)" borderRadius="$3">
          <Icon size={20} color="#EDEDEF" />
        </YStack>
        <YStack f={1}>
          <Text fontSize="$5" fontWeight="600" color="#EDEDEF">
            {header}
          </Text>
          <Text fontSize="$3" color="#9CA3AF">
            {body}
          </Text>
        </YStack>
      </XStack>

      <XStack ai="center" gap="$3">
        <Button size="$3" circular bg="rgba(75, 85, 99, 0.8)" onPress={onDecrease}>
          <Minus size={16} color="#EDEDEF" />
        </Button>

        <Text fontSize="$5" fontWeight="700" color="#EDEDEF" minWidth={30} textAlign="center">
          {quantity}
        </Text>

        <Button size="$3" circular bg="rgba(75, 85, 99, 0.8)" onPress={onIncrease}>
          <Plus size={16} color="#EDEDEF" />
        </Button>
      </XStack>
    </XStack>
  );
}
