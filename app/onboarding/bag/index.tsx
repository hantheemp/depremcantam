import { Alert } from 'react-native';
import { useRouter, useLocalSearchParams } from 'expo-router';
import { YStack, Text, ScrollView } from 'tamagui';
import { Package, Smartphone, Shirt, FileText, Heart, Hamburger } from '@tamagui/lucide-icons';
import PrimaryButton from '~/components/PrimaryButton';
import ItemSection from '~/components/ItemComponents/ItemSection';
import ItemComponent from '~/components/ItemComponents/Item';
import { itemGenerator } from '~/services/item/itemGenerator/itemGenerator';
import { bagGenerator } from '~/services/bag/bagGenerator/bagGenerator';
import { getBagByID } from '~/db/operators/bag';
import { getItemsByBagId } from '~/db/operators/item';
import { foodItems } from '~/db/schema';

export default function BagScreen() {
  const router = useRouter();
  const params = useLocalSearchParams();

  const adult = parseInt(params.adult as string) || 1;
  const children = parseInt(params.children as string) || 0;
  const elderly = parseInt(params.elderly as string) || 0;
  const baby = parseInt(params.baby as string) || 0;
  const pet = parseInt(params.pet as string) || 0;

  const totalPersonCount = adult + children + elderly + baby + pet;

  const items = itemGenerator({
    adult,
    baby,
    children,
    elderly,
    pet,
  });

  // Replace the text, looks lame.

  async function handleSave() {
    try {
      const date = new Date().toISOString();
      const generatedBagID = await bagGenerator({
        name: 'Acil Durum Çantam',
        description: 'AFAD önerileri baz alınarak hazırlanan acil durum çantanız.',
        saved_at: date,
        is_owned: true,
        itemInserts: items,
      });

      if (generatedBagID) {
        router.push('/main/home');
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <YStack f={1} bg="$background" px="$4" py="$8" jc="space-between">
      <ScrollView flex={1} showsVerticalScrollIndicator={false}>
        <YStack minHeight="100%">
          <YStack jc="center" ai="center" w="100%" pt="$12" pb="$4" gap="$6">
            <Text fontSize="$9" mb="$8" fontWeight="800" textAlign="center" color="#EDEDEF">
              Acil Durum Çantanız Hazır! (Kişi sayısı: {totalPersonCount})
            </Text>
          </YStack>

          <ItemSection title="Gıdalar">
            {items.foods.map((item, idx) => (
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
