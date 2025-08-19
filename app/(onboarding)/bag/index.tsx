// BagScreen.tsx
import { Alert } from 'react-native';
import { useRouter } from 'expo-router';
import { YStack, Text, ScrollView } from 'tamagui';
import { Package, Smartphone, Shirt, FileText, Heart, Hamburger } from '@tamagui/lucide-icons';
import PrimaryButton from '~/components/PrimaryButton';
import ItemSection from '~/components/ItemComponents/ItemSection';
import ItemComponent from '~/components/ItemComponents/Item';
import { generateAFADBag } from '~/services/item';

export default function BagScreen() {
  const router = useRouter();

  // currently it is fixed for 3 persons, it should be switched to dynamic
  // also, the person count should be handled separately for adults and children.
  const personCount = 3;
  const items = generateAFADBag({
    adult: 1,
    children: 1,
    elderly: 1,
    baby: 1,
    pet: 1,
  });

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
              Acil Durum Çantanız Hazır! (Kişi sayısı: {personCount})
            </Text>
          </YStack>

          <ItemSection title="Gıdalar">
            {items.food?.map((item, idx) => (
              <ItemComponent
                key={idx}
                icon={Package}
                header={item.header}
                body={`SKT: ${item.expiry_date}`}
                quantity={item.quantity}
                onDecrease={() => {}}
                onIncrease={() => {}}
              />
            ))}
          </ItemSection>

          <ItemSection title="Elektronik">
            {items.electronics?.map((item, idx) => (
              <ItemComponent
                key={idx}
                icon={Smartphone}
                header={item.header}
                body={`Pil durumu: ${item.charge}`}
                quantity={item.quantity}
                onDecrease={() => {}}
                onIncrease={() => {}}
              />
            ))}
          </ItemSection>

          <ItemSection title="Giyim">
            {items.clothings?.map((item, idx) => (
              <ItemComponent
                key={idx}
                icon={Shirt}
                header={item.header}
                body={`Mevsim: ${item.season}`}
                quantity={item.quantity}
                onDecrease={() => {}}
                onIncrease={() => {}}
              />
            ))}
          </ItemSection>

          <ItemSection title="Tıbbi Malzemeler">
            {items.medicals?.map((item, idx) => (
              <ItemComponent
                key={idx}
                icon={Hamburger}
                header={item.header}
                body={`Tür: ${item.medicine_type}`}
                quantity={item.quantity}
                onDecrease={() => {}}
                onIncrease={() => {}}
              />
            ))}
          </ItemSection>

          <ItemSection title="Belgeler">
            {items.documents?.map((item, idx) => (
              <ItemComponent
                key={idx}
                icon={FileText}
                header={item.header}
                body={`Tip: ${item.document_type}`}
                quantity={item.quantity}
                onDecrease={() => {}}
                onIncrease={() => {}}
              />
            ))}
          </ItemSection>

          <ItemSection title="Özel Bakım">
            {items.specialCares?.map((item, idx) => (
              <ItemComponent
                key={idx}
                icon={Heart}
                header={item.header}
                body={`Kime ait: ${item.belongs_to}`}
                quantity={item.quantity}
                onDecrease={() => {}}
                onIncrease={() => {}}
              />
            ))}
          </ItemSection>
        </YStack>
      </ScrollView>

      <PrimaryButton onPress={handleSave} accessibilityLabel="Kaydet">
        Kaydet
      </PrimaryButton>
    </YStack>
  );
}
