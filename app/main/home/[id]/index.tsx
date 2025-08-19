import { Button, ScrollView, Text, YStack } from 'tamagui';
import { useLocalSearchParams } from 'expo-router';

export default function EditBagScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();

  return (
    <YStack f={1} bg="$background" px="$4" py="$8" jc="space-between">
      <ScrollView flex={1} showsVerticalScrollIndicator={false}>
        <Button background="#2B3640" w="$4" h="$4" borderRadius="$4"></Button>
      </ScrollView>
    </YStack>
  );
}
