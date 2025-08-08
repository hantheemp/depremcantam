import { YStack, XStack, Text, Button } from 'tamagui';
import { Hamburger, Minus, Plus } from '@tamagui/lucide-icons';
import type { Item } from '~/utils/bag';

type Props = {
  category: string;
  items: Item[];
  onChangeQuantity?: (id: string, quantity: number) => void;
  onPressItem?: (id: string) => void;
};

export default function CategoryItems({ category, items, onChangeQuantity, onPressItem }: Props) {
  return (
    <YStack>
      <Text fontSize="$6" fontWeight="800" color="$color" mb="$3">
        {category}
      </Text>

      {items.map((item) => (
        <XStack
          key={item.id}
          ai="center"
          jc="space-between"
          my="$3"
          py="$3"
          onPress={() => onPressItem?.(item.id)}
          role="button"
          aria-label={`${category} - ${item.header}`}>
          <Button mr="$3" bg="$gray3" icon={<Hamburger size={16} />}></Button>
          <YStack flex={1}>
            <Text fontWeight="700">
              {item.header}
              {item.quantity > 1 ? ` (${item.quantity})` : ''}
            </Text>
            {item.body ? (
              <Text fontSize="$3" color="$gray8Light">
                {item.body}
              </Text>
            ) : null}
          </YStack>

          <XStack ai="center" gap="$2">
            <Button
              size="$4"
              onPress={() => onChangeQuantity?.(item.id, Math.max(0, item.quantity - 1))}
              aria-label={`Eksilt ${item.header}`}
              circular>
              <Minus size={16} />
            </Button>

            <Text minWidth={24} textAlign="center" fontWeight="700">
              {item.quantity}
            </Text>

            <Button
              size="$4"
              onPress={() => onChangeQuantity?.(item.id, item.quantity + 1)}
              aria-label={`Arttır ${item.header}`}
              circular>
              <Plus size={16} />
            </Button>
          </XStack>
        </XStack>
      ))}
    </YStack>
  );
}
