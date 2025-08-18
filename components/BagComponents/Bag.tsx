import { ChevronRight, Minus, Plus } from '@tamagui/lucide-icons';
import { router } from 'expo-router';
import { Button, Text, XStack, YStack } from 'tamagui';

interface BagProps {
  id: string;
  icon: React.ComponentType<{ size: number; color: string }>;
  title: string;
  body: string;
}

export default function Bag({ id, icon: Icon, title, body }: BagProps) {
  return (
    <XStack ai="center" jc="space-between" p="$4" mb="$3" bg="#2B3640" borderRadius="$6">
      <XStack ai="center" gap="$3" f={1}>
        <YStack w={40} h={40} ai="center" jc="center" bg="rgba(75, 85, 99, 0.6)" borderRadius="$3">
          <Icon size={20} color="#EDEDEF" />
        </YStack>
        <YStack f={1}>
          <Text fontSize="$5" fontWeight="600" color="#EDEDEF">
            {title}
          </Text>
          <Text fontSize="$3" color="#9CA3AF">
            {body}
          </Text>
        </YStack>
      </XStack>

      <XStack ai="center" gap="$3">
        <Button
          size="$3"
          circular
          bg="#2B3640"
          onPress={() => {
            console.log(id);
            router.replace(`/(main)/home/${id}`);
          }}>
          <ChevronRight size={24} color="#EDEDEF" />
        </Button>
      </XStack>
    </XStack>
  );
}
