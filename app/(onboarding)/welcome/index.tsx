// screens/WelcomeScreen.tsx
import React from 'react';
import { YStack, Text, Image, ScrollView } from 'tamagui';
import { ArrowRight } from '@tamagui/lucide-icons';
import PrimaryButton from '~/components/PrimaryButton';
import { useRouter } from 'expo-router';

export default function WelcomeScreen() {
  const router = useRouter();

  return (
    <ScrollView bg="$background">
    <YStack f={1} bg="$background" jc="space-between" ai="center" py="$8" px="$4">
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

      <PrimaryButton
        onPress={() => router.push('/(onboarding)/person-count')}
        accessibilityLabel="Hazırlığa Başla">
        Hazırlığa Başla
      </PrimaryButton>
    </YStack>
    </ScrollView>
  );
}
