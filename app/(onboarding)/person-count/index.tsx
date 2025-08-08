import { YStack, Text, ScrollView } from 'tamagui';
import CounterInput from '~/components/CounterInput';
import { router } from 'expo-router';
import PrimaryButton from '~/components/PrimaryButton';

export default function PersonScreen() {
  return (
    <YStack f={1} bg="$background" px="$4" py="$8" jc="space-between">
      <ScrollView flex={1} showsVerticalScrollIndicator={false}>
        <YStack jc="center" ai="center" w="100%" py="$12" gap="$8">
          <YStack ai="center" mb="$6">
            <Text fontSize="$9" fontWeight="800" textAlign="center" color="#EDEDEF">
              Kişi Sayısını Girin
            </Text>
          </YStack>
          <YStack w="100%" maw={400} gap="$6">
            <CounterInput
              header="Yetişkin Sayısı"
              disableInfo={false}
              sheetHeader="Yetişkin Sayısının Önemi"
              sheetText="Afet durumlarında her yetişkin için belirli temel ihtiyaçlar ve ekipmanlar gereklidir. Çanta içeriğinin doğru ve yeterli olması için yetişkin sayısı önem taşır. Bu bilgiler sadece çanta hazırlanması sırasında kullanılır ve saklanmaz."
            />
            <CounterInput
              header="Çocuk Sayısı"
              disableInfo={false}
              sheetHeader="Neden Çocuk Sayısını İstiyoruz?"
              sheetText="Çocukların ihtiyaçları yetişkinlerden farklı olabilir; uygun miktarda çocuk malzemesi ve besin temini için çocuk sayısı bilinmelidir. Bu veri, acil durum çantasının doğru hazırlanmasını sağlar ve sonrasında saklanmaz."
            />
          </YStack>
        </YStack>
      </ScrollView>

      <PrimaryButton onPress={() => router.push('/(onboarding)/bag')} accessibilityLabel="Devam Et">
        Devam Et
      </PrimaryButton>
    </YStack>
  );
}
