import { useEffect, useState } from 'react';
import { ScrollView, Text, YStack } from 'tamagui';
import Bag from '~/components/BagComponents/Bag';
import BagSection from '~/components/BagComponents/BagSection';
import Profile from '~/components/Profile';
import { getAllBags } from '~/db/operators/bag';

export default function HomeScreen() {
  const [bags, setBags] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const data = await getAllBags();
        if (data) setBags(data);
      } catch (err) {
        console.error('Error fetching bags:', err);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  if (loading) {
    return (
      <YStack f={1} jc="center" ai="center">
        <Text>Yükleniyor...</Text>
      </YStack>
    );
  }

  return (
    <YStack f={1} bg="$background" px="$4" py="$8" jc="space-between">
      <ScrollView flex={1} showsVerticalScrollIndicator={false}>
        <YStack minHeight="100%">
          <YStack jc="flex-end" ai="flex-end" w="100%">
            <Profile />
          </YStack>

          {bags.length > 0 ? (
            <BagSection title="Çantalarım">
              {bags.map((item) => (
                <Bag
                  id={item.id}
                  key={item.id}
                  name={item.name}
                  description={item.description}
                  saved_at={item.saved_at}
                  body={bags.length + ' Öğe, Son Güncelleme: '}
                />
              ))}
            </BagSection>
          ) : (
            <YStack>
              <Text>Oluşturulmuş çantalar bulunamadı!</Text>
            </YStack>
          )}
        </YStack>
      </ScrollView>
    </YStack>
  );
}
