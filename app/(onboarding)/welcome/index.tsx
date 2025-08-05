import { YStack, Text, Button, Image } from 'tamagui';
import { ArrowRight } from '@tamagui/lucide-icons';
import { router } from 'expo-router';

export default function WelcomeScreen() {
  return (
    <YStack f={1} bg="$background" jc="space-between" ai="center" py="$8" px="$4">
      <YStack py="$12" jc="center" ai="center" gap="$8">
        <YStack w={400} h={250} br="$6" overflow="hidden" bg="$gray4" jc="center" ai="center">
          <Image
            source={{
              uri: 'https://picsum.photos/200',
            }}
            width="100%"
            height="100%"
          />
        </YStack>

        <YStack ai="center" space="$6">
          <Text fontSize="$9" fontWeight="800" textAlign="center" color="$color">
            Kendinizi ve Sevdiklerinizi Koruyun
          </Text>
          <Text fontSize="$6" color="$gray8Light" fontWeight="700" textAlign="center">
            Hazırlık bir adımla başlar. Şimdi acil durum çantanızı oluşturun.
          </Text>
        </YStack>
      </YStack>
      <Button
        size="$5"
        borderRadius="$6"
        bg="#DCE8F3"
        w="100%"
        jc="center"
        iconAfter={<ArrowRight color="#141A1F" size="$2" />}
        onPress={() => router.push('/(onboarding)/person-count')}>
        <Text fontSize="$6" color="#141A1F" fontWeight="800">
          Hazırlığa Başla
        </Text>
      </Button>
    </YStack>
  );
}
