import React from 'react';
import { YStack, Text, Image, ScrollView } from 'tamagui';
import { useRouter } from 'expo-router';
import PrimaryButton from '~/components/PrimaryButton';

export default function WelcomeScreen() {
  const router = useRouter();

  return (
    <YStack f={1} bg="$background" justifyContent="space-between" px="$4" py="$8">
      <ScrollView flex={1} showsVerticalScrollIndicator={false}>
        <YStack py="$12" jc="center" ai="center" gap="$8" w="100%">
          <YStack
            w="100%"
            maw={400}
            h={250}
            br="$6"
            overflow="hidden"
            bg="$gray4"
            jc="center"
            ai="center">
            <Image
              source={{ uri: 'https://picsum.photos/800/600' }}
              width="100%"
              height="100%"
              objectFit="cover"
              accessibilityLabel="Acil durum görseli"
            />
          </YStack>

          <YStack ai="center" gap="$6">
            <Text fontSize="$9" fontWeight="800" textAlign="center" color="$color">
              Kendinizi ve Sevdiklerinizi Koruyun
            </Text>
            <Text fontSize="$6" color="$gray8Light" fontWeight="700" textAlign="center">
              Hazırlık bir adımla başlar. Şimdi acil durum çantanızı oluşturun.
            </Text>
          </YStack>
        </YStack>
      </ScrollView>
      <PrimaryButton
        onPress={() => router.push('/(onboarding)/person-count')}
        accessibilityLabel="Hazırlığa Başla">
        Hazırlığa Başla
      </PrimaryButton>
    </YStack>
  );
}
