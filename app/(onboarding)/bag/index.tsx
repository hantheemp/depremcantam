import { useState } from 'react';
import { Alert } from 'react-native';
import { useRouter } from 'expo-router';
import { YStack, Text, ScrollView, XStack, Button } from 'tamagui';
import { Package, Smartphone, Copy } from '@tamagui/lucide-icons';
import CategorySection from '~/components/CategorySection';
import CategoryItem from '~/components/CategoryItem';

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

  // #TODO: Implement actual save logic

  async function handleSave() {
    try {
      router.push('/(main)/home');
    } catch (e) {
      Alert.alert('Hata', 'Kaydetme sırasında bir sorun oluştu.');
    }
  }

  return (
    <YStack f={1} bg="$background">
      <ScrollView f={1} contentContainerStyle={{ flexGrow: 1 }} showsVerticalScrollIndicator={false}>
        <YStack minHeight="100%" jc="space-between" py="$8" px="$4">
          <YStack>
            <YStack jc="center" ai="center" w="100%" py="$12" gap="$6">
              <Text fontSize="$9" fontWeight="800" textAlign="center" color="#EDEDEF">
                Acil Durum Çantanız Hazır!
              </Text>
            </YStack>

            <YStack gap="$4">
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
          </YStack>
          <Button
            size="$5"
            bg="#E5E7EB"
            borderRadius="$6"
            mt="$6"
            onPress={handleSave}
            pressStyle={{ opacity: 0.8 }}>
            <XStack ai="center" gap="$2">
              <Text color="#1F2937" fontWeight="800" fontSize="$5">
                Kaydet
              </Text>
              <Copy size={18} color="#1F2937" />
            </XStack>
          </Button>
        </YStack>
      </ScrollView>
    </YStack>
  );
}
