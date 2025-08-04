import { YStack, Text, Button } from 'tamagui';
import { ArrowRight } from '@tamagui/lucide-icons';
import CounterInput from '~/components/CounterInput';

export default function YeniSayfa() {
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
            sheetHeader="Neden Yetişkin Sayısını İstiyoruz?"
            sheetText="AFAD tarafından önerilen çanta hazırlama yolu kişi sayısına endekslidir. Bu veriler çanta oluşturulduktan sonra saklanmayacaktır."></CounterInput>
          <CounterInput
            header="Çocuk Sayısı"
            disableInfo={false}
            sheetHeader="Neden Çocuk Sayısını İstiyoruz?"
            sheetText="AFAD tarafından önerilen çanta hazırlama yolu kişi sayısına endekslidir. Bu veriler çanta oluşturulduktan sonra saklanmayacaktır."></CounterInput>
        </YStack>
      </YStack>
      <Button
        size="$5"
        borderRadius="$6"
        bg="#DCE8F3"
        w="100%"
        jc="center"
        iconAfter={<ArrowRight color="#141A1F" size="$2" />}
        onPress={() => console.log('Navigate to next screen')}>
        <Text fontSize="$6" color="#141A1F" fontWeight="800">
          Devam Et
        </Text>
      </Button>
    </YStack>
  );
}
