import { SaveAll } from '@tamagui/lucide-icons';
import { router } from 'expo-router';
import { Button, Text, YStack } from 'tamagui';
import CategoryItems from '~/components/CategoryComponents/CategoryItems';

export default function BagScreen() {
  const foodItems = [
    { header: 'Konserve', quantity: 12, body: 'SKT: 28/08/2026' },
    { header: 'Su', quantity: 1, body: 'SKT: 28/08/2026' },
  ];

  const electronicItems = [
    { header: 'El Feneri', quantity: 2, body: 'Pil durumu: %80' },
    { header: 'Radyo', quantity: 1, body: 'Çalışır durumda' },
  ];

  return (
    <YStack f={1} bg="$background" jc="space-between" py="$8" px="$4">
      <YStack jc="center" ai="center" w="100%" py="$12" gap="$8">
        <YStack ai="center" mb="$6">
          <Text fontSize="$9" fontWeight="800" textAlign="center" color="#EDEDEF">
            Acil Durum Çantanız Hazır!
          </Text>
        </YStack>
        <YStack w="100%" gap="$3">
          <CategoryItems
            category="Gıdalar"
            items={foodItems}
          />
          <CategoryItems
            category="Elektronik"
            items={electronicItems}
          />
        </YStack>
      </YStack>
      <Button
        size="$5"
        borderRadius="$6"
        bg="#DCE8F3"
        w="100%"
        jc="center"
        iconAfter={<SaveAll color="#141A1F" size="$2" />}
        onPress={() => router.push('/(onboarding)/bag')}>
        <Text fontSize="$6" color="#141A1F" fontWeight="800">
          Kaydet
        </Text>
      </Button>
    </YStack>
  );
}