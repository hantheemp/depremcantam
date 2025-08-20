import { Badge, ChevronRight } from '@tamagui/lucide-icons';
import { router } from 'expo-router';
import { Button, Text, XStack, YStack } from 'tamagui';

interface BagProps {
  id: number;
  name: string;
  description: string;
  body: string;
  saved_at: string;
}

export default function BagComponent({ id, name, description, body, saved_at }: BagProps) {
  return (
    <XStack ai="center" jc="space-between" p="$4" mb="$3" bg="#2B3640" borderRadius="$6">
      <XStack ai="center" gap="$3" f={1}>
        <YStack w={40} h={40} ai="center" jc="center" bg="rgba(75, 85, 99, 0.6)" borderRadius="$3">
          <Badge size={20} color="#EDEDEF"></Badge>
        </YStack>
        <YStack f={1}>
          <Text fontSize="$5" fontWeight="600" color="#EDEDEF">
            {name}
          </Text>
          <Text fontSize="$3" color="#9CA3AF">
            {body}
            {saved_at}
          </Text>
        </YStack>
      </XStack>

      <XStack ai="center" gap="$3">
        <Button
          size="$3"
          circular
          bg="#2B3640"
          onPress={() => {
            router.push(`/main/home/${id}`);
          }}>
          <ChevronRight size={24} color="#EDEDEF" />
        </Button>
      </XStack>
    </XStack>
  );
}
