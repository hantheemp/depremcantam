// BagScreen.tsx
import { useState } from 'react';
import { Alert } from 'react-native';
import { useRouter } from 'expo-router';
import { YStack, Text, ScrollView } from 'tamagui';
import { Package, Smartphone, Shirt, FileText, Heart, Hamburger } from '@tamagui/lucide-icons';
import PrimaryButton from '~/components/PrimaryButton';
import ItemSection from '~/components/ItemComponents/ItemSection';
import ItemComponent from '~/components/ItemComponents/Item';

export default function BagScreen() {
  const router = useRouter();

  /*const [food, setFood] = useState(foodItems);
  const [electronics, setElectronics] = useState(electronicItems);
  const [clothing, setClothing] = useState(clothingItems);
  const [medical, setMedical] = useState(medicalItems);
  const [documents, setDocuments] = useState(documentItems);
  const [specialCare, setSpecialCare] = useState(specialCareItems);
*/
  const updateQuantity = <T extends { id: string; quantity: number }>(
    setItems: React.Dispatch<React.SetStateAction<T[]>>,
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

  /*return (
    <YStack f={1} bg="$background" px="$4" py="$8" jc="space-between">
      <ScrollView flex={1} showsVerticalScrollIndicator={false}>
        <YStack minHeight="100%">
          <YStack jc="center" ai="center" w="100%" pt="$12" pb="$4" gap="$6">
            <Text fontSize="$9" mb="$8" fontWeight="800" textAlign="center" color="#EDEDEF">
              Acil Durum Çantanız Hazır!
            </Text>
          </YStack>

          <ItemSection title="Gıdalar">
            {food.map((item) => (
              <ItemComponent
                key={item.id}
                icon={Package}
                header={item.header}
                body={`SKT: ${item.expiryDate}`}
                quantity={item.quantity}
                onDecrease={() => updateQuantity(setFood, item.id, -1)}
                onIncrease={() => updateQuantity(setFood, item.id, 1)}
              />
            ))}
          </ItemSection>

          <ItemSection title="Elektronik">
            {electronics.map((item) => (
              <ItemComponent
                key={item.id}
                icon={Smartphone}
                header={item.header}
                body={`Pil durumu: ${item.charge}`}
                quantity={item.quantity}
                onDecrease={() => updateQuantity(setElectronics, item.id, -1)}
                onIncrease={() => updateQuantity(setElectronics, item.id, 1)}
              />
            ))}
          </ItemSection>

          <ItemSection title="Giyim">
            {clothing.map((item) => (
              <ItemComponent
                key={item.id}
                icon={Shirt}
                header={item.header}
                body={`Mevsim: ${item.season}`}
                quantity={item.quantity}
                onDecrease={() => updateQuantity(setClothing, item.id, -1)}
                onIncrease={() => updateQuantity(setClothing, item.id, 1)}
              />
            ))}
          </ItemSection>

          <ItemSection title="Tıbbi Malzemeler">
            {medical.map((item) => (
              <ItemComponent
                key={item.id}
                icon={Hamburger}
                header={item.header}
                body={`Tür: ${item.medicineType}`}
                quantity={item.quantity}
                onDecrease={() => updateQuantity(setMedical, item.id, -1)}
                onIncrease={() => updateQuantity(setMedical, item.id, 1)}
              />
            ))}
          </ItemSection>

          <ItemSection title="Belgeler">
            {documents.map((item) => (
              <ItemComponent
                key={item.id}
                icon={FileText}
                header={item.header}
                body={`Tip: ${item.documentType}`}
                quantity={item.quantity}
                onDecrease={() => updateQuantity(setDocuments, item.id, -1)}
                onIncrease={() => updateQuantity(setDocuments, item.id, 1)}
              />
            ))}
          </ItemSection>

          <ItemSection title="Özel Bakım">
            {specialCare.map((item) => (
              <ItemComponent
                key={item.id}
                icon={Heart}
                header={item.header}
                body={`Kime ait: ${item.belongsTo}`}
                quantity={item.quantity}
                onDecrease={() => updateQuantity(setSpecialCare, item.id, -1)}
                onIncrease={() => updateQuantity(setSpecialCare, item.id, 1)}
              />
            ))}
          </ItemSection>
        </YStack>
      </ScrollView>

      <PrimaryButton onPress={handleSave} accessibilityLabel="Kaydet">
        Kaydet
      </PrimaryButton>
    </YStack>
  );*/
}
