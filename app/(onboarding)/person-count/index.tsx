import { YStack, Text, Button } from 'tamagui';
import { ArrowRight } from '@tamagui/lucide-icons';
import CounterInput from '~/components/CounterInput';
import { router } from 'expo-router';

export default function PersonScreen() {
  return (
    <YStack f={1} bg="$background" jc="space-between" py="$8" px="$4">
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
            sheetText="Afet durumlarında her yetişkin için belirli temel ihtiyaçlar ve ekipmanlar gereklidir. Çanta içeriğinin doğru ve yeterli olması için yetişkin sayısı önem taşır. Bu bilgiler sadece çanta hazırlanması sırasında kullanılır ve saklanmaz."></CounterInput>
          <CounterInput
            header="Çocuk Sayısının Önemi"
            disableInfo={false}
            sheetHeader="Neden Çocuk Sayısını İstiyoruz?"
            sheetText="Çocukların ihtiyaçları yetişkinlerden farklı olabilir; uygun miktarda çocuk malzemesi ve besin temini için çocuk sayısı bilinmelidir. Bu veri, acil durum çantasının doğru hazırlanmasını sağlar ve sonrasında saklanmaz."></CounterInput>
        </YStack>
      </YStack>
      <Button
        size="$5"
        borderRadius="$6"
        bg="#DCE8F3"
        w="100%"
        jc="center"
        iconAfter={<ArrowRight color="#141A1F" size="$2" />}
        onPress={() => router.push('/(onboarding)/bag')}>
        <Text fontSize="$6" color="#141A1F" fontWeight="800">
          Devam Et
        </Text>
      </Button>
    </YStack>
  );
}
