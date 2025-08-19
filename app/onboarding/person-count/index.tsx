import { useState } from 'react';
import { YStack, Text, ScrollView } from 'tamagui';
import CounterInput from '~/components/CounterInput';
import { router } from 'expo-router';
import PrimaryButton from '~/components/PrimaryButton';
import { counterInputData } from '~/constants/counterInput';

export default function PersonScreen() {
  const [counts, setCounts] = useState({
    adult: 1,
    children: 0,
    elderly: 0,
    baby: 0,
    pet: 0,
  });

  const updateCount = (type: keyof typeof counts, value: number) => {
    setCounts((prev) => ({
      ...prev,
      [type]: value,
    }));
  };

  const handleContinue = () => {
    const queryParams = new URLSearchParams({
      adult: counts.adult.toString(),
      children: counts.children.toString(),
      elderly: counts.elderly.toString(),
      baby: counts.baby.toString(),
      pet: counts.pet.toString(),
    }).toString();

    router.push(`/onboarding/bag?${queryParams}`);
  };

  return (
    <YStack f={1} bg="$background" px="$4" py="$8" jc="space-between">
      <ScrollView flex={1} showsVerticalScrollIndicator={false}>
        <YStack jc="center" ai="center" w="100%" py="$12" gap="$8">
          <YStack ai="center" mb="$6">
            <Text fontSize="$9" fontWeight="800" textAlign="center" color="#EDEDEF">
              Kişi ve Hayvan Sayısını Girin
            </Text>
          </YStack>
          <YStack w="100%" maw={400} gap="$6">
            {counterInputData.map((item, index) => {
              const countKeys = ['adult', 'children', 'elderly', 'baby', 'pet'];
              const countKey = countKeys[index] as keyof typeof counts;
              const isAdult = countKey === 'adult';

              return (
                <CounterInput
                  key={index}
                  header={item.header}
                  disableInfo={false}
                  sheetHeader={item.sheetHeader}
                  sheetText={item.sheetText}
                  value={counts[countKey]}
                  onChange={(value) => updateCount(countKey, value)}
                  isAdult={isAdult}
                />
              );
            })}
          </YStack>
        </YStack>
      </ScrollView>

      <PrimaryButton onPress={handleContinue} accessibilityLabel="Devam Et">
        Devam Et
      </PrimaryButton>
    </YStack>
  );
}
