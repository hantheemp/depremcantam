import { Package } from '@tamagui/lucide-icons';
import { useState } from 'react';
import { ScrollView, YStack } from 'tamagui';
import Bag from '~/components/BagComponents/Bag';
import BagSection from '~/components/BagComponents/BagSection';
import PrimaryButton from '~/components/PrimaryButton';
import Profile from '~/components/Profile';

export default function HomeScreen() {
  //const [bag, setBag] = useState(testBag);
  /*return (
    <YStack f={1} bg="$background" px="$4" py="$8" jc="space-between">
      <ScrollView flex={1} showsVerticalScrollIndicator={false}>
        <YStack minHeight="100%">
          <YStack jc="flex-end" ai="flex-end" w="100%">
            <Profile></Profile>
          </YStack>

          <BagSection title="Çantalarım">
            {bag.map((item) => (
              <Bag
                id={item.id}
                key={item.id}
                icon={Package}
                title={item.name}
                body={item.items.length + ' Öğe, Son Güncelleme: Dün'}
              />
            ))}
          </BagSection>
        </YStack>
      </ScrollView>
    </YStack>
  );*/
}
