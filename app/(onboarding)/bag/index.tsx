// screens/BagScreen.tsx
import { useEffect, useState } from 'react';
import { Alert } from 'react-native';
import { useRouter } from 'expo-router';
import { YStack, Text, ScrollView } from 'tamagui';
import CategoryItems from '~/components/CategoryItemComponents/CategoryItems';
import PrimaryButton from '~/components/PrimaryButton';
import type { Item } from '~/utils/bag';
import { saveBag, getBag } from '~/utils/bag';

export default function BagScreen() {
  const router = useRouter();

  // #TODO: Replace with actual data fetching or state management.
  // #TODO: setFoodItems, setElectronicItems is redundant. Should be handled in a single state.

  const [foodItems, setFoodItems] = useState<Item[]>([
    { id: 'f1', header: 'Konserve', quantity: 12, body: 'SKT: 28/08/2026' },
    { id: 'f2', header: 'Su', quantity: 1, body: 'SKT: 28/08/2026' },
  ]);

  const [electronicItems, setElectronicItems] = useState<Item[]>([
    { id: 'e1', header: 'El Feneri', quantity: 2, body: 'Pil durumu: %80' },
    { id: 'e2', header: 'Radyo', quantity: 1, body: 'Çalışır durumda' },
  ]);

  useEffect(() => {
    (async () => {
      const saved = await getBag();
      if (saved) {
        setFoodItems(saved.foodItems);
        setElectronicItems(saved.electronicItems);
      }
    })();
  }, []);

  function onChangeQuantity(category: 'food' | 'electronic', id: string, quantity: number) {
    const setter = category === 'food' ? setFoodItems : setElectronicItems;
    setter((prev) => prev.map((it) => (it.id === id ? { ...it, quantity } : it)));
    console.log(`Updated ${category} item ${id} to quantity ${quantity}`);
  }

  async function handleSave() {
    try {
      await saveBag({ foodItems, electronicItems });
      console.log(await getBag());
      router.push('/(main)/home');
    } catch (e) {
      Alert.alert('Hata', 'Kaydetme sırasında bir sorun oluştu.');
    }
  }

  return (
    <ScrollView bg="$background">
      <YStack f={1} bg="$background" jc="space-between" py="$8" px="$4">
        <YStack jc="center" ai="center" w="100%" py="$12" gap="$8">
          <Text fontSize="$9" fontWeight="800" textAlign="center" color="#EDEDEF">
            Acil Durum Çantanız Hazır!
          </Text>

          <YStack w="100%" gap="$3" maw={600}>
            <CategoryItems
              category="Gıdalar"
              items={foodItems}
              onChangeQuantity={(id, q) => onChangeQuantity('food', id, q)}
            />

            <CategoryItems
              category="Elektronik"
              items={electronicItems}
              onChangeQuantity={(id, q) => onChangeQuantity('electronic', id, q)}
            />

            <CategoryItems
              category="Elektronik"
              items={electronicItems}
              onChangeQuantity={(id, q) => onChangeQuantity('electronic', id, q)}
            />

            <CategoryItems
              category="Elektronik"
              items={electronicItems}
              onChangeQuantity={(id, q) => onChangeQuantity('electronic', id, q)}
            />
          </YStack>
        </YStack>

        <PrimaryButton onPress={handleSave} accessibilityLabel="Çantayı kaydet">
          Kaydet
        </PrimaryButton>
      </YStack>
    </ScrollView>
  );
}
