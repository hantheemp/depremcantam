import { useState } from 'react';
import { Alert } from 'react-native';
import { useRouter } from 'expo-router';
import { YStack, Text, ScrollView } from 'tamagui';
import { Package, Smartphone } from '@tamagui/lucide-icons';
import CategorySection from '~/components/CategorySection';
import CategoryItem from '~/components/CategoryItem';
import PrimaryButton from '~/components/PrimaryButton';

interface Item {
  id: string;
  title: string;
  subtitle: string;
  quantity: number;
}

export default function BagScreen() {
  const router = useRouter();

  const [foodItems, setFoodItems] = useState<Item[]>([
    { id: 'f1', title: 'Konserve', subtitle: 'SKT: 28/08/2026', quantity: 15 },
    { id: 'f2', title: 'Su', subtitle: 'SKT: 28/08/2026', quantity: 8 },
  ]);

  const [electronicItems, setElectronicItems] = useState<Item[]>([
    { id: 'e1', title: 'El Feneri', subtitle: 'Pil durumu: %80', quantity: 4 },
    { id: 'e2', title: 'Radyo', subtitle: 'Çalışır durumda', quantity: 5 },
  ]);

  const updateQuantity = (
    setItems: React.Dispatch<React.SetStateAction<Item[]>>,
    id: string,
    delta: number
  ) => {
    setItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: Math.max(0, item.quantity + delta) } : item
      )
    );
  };

  async function handleSave() {
    try {
      router.push('/(main)/home');
    } catch (e) {
      Alert.alert('Hata', 'Kaydetme sırasında bir sorun oluştu.');
    }
  }

  return (
    <YStack f={1} bg="$background" px="$4" py="$8" jc="space-between">
      <ScrollView flex={1} showsVerticalScrollIndicator={false}>
        <YStack minHeight="100%">
          <YStack jc="center" ai="center" w="100%" pt="$12" pb="$4" gap="$6">
            <Text fontSize="$9" mb="$8" fontWeight="800" textAlign="center" color="#EDEDEF">
              Acil Durum Çantanız Hazır!
            </Text>
          </YStack>

          <CategorySection title="Gıdalar">
            {foodItems.map((item) => (
              <CategoryItem
                key={item.id}
                icon={Package}
                title={item.title}
                subtitle={item.subtitle}
                quantity={item.quantity}
                onDecrease={() => updateQuantity(setFoodItems, item.id, -1)}
                onIncrease={() => updateQuantity(setFoodItems, item.id, 1)}
              />
            ))}
          </CategorySection>

          <CategorySection title="Gıdalar">
            {foodItems.map((item) => (
              <CategoryItem
                key={item.id}
                icon={Package}
                title={item.title}
                subtitle={item.subtitle}
                quantity={item.quantity}
                onDecrease={() => updateQuantity(setFoodItems, item.id, -1)}
                onIncrease={() => updateQuantity(setFoodItems, item.id, 1)}
              />
            ))}
          </CategorySection>

          <CategorySection title="Elektronik">
            {electronicItems.map((item) => (
              <CategoryItem
                key={item.id}
                icon={Smartphone}
                title={item.title}
                subtitle={item.subtitle}
                quantity={item.quantity}
                onDecrease={() => updateQuantity(setElectronicItems, item.id, -1)}
                onIncrease={() => updateQuantity(setElectronicItems, item.id, 1)}
              />
            ))}
          </CategorySection>
        </YStack>
      </ScrollView>

      <PrimaryButton onPress={handleSave} accessibilityLabel="Kaydet">
        Kaydet
      </PrimaryButton>
    </YStack>
  );
}
