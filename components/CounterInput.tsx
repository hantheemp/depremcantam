import { Info, Minus, Plus } from '@tamagui/lucide-icons';
import { useState } from 'react';
import { Button, Text, XStack, YStack } from 'tamagui';
import InfoSheet from './InfoSheet';

type CounterInputProps = {
  header: string;
  disableInfo: boolean;
  sheetText: string;
  sheetHeader: string;
};

export default function CounterInput({
  header,
  disableInfo,
  sheetHeader,
  sheetText,
}: CounterInputProps) {
  const [number, setNumber] = useState(3);
  const [showSheet, setShowSheet] = useState(false);

  const decrement = () => setNumber((prev) => Math.max(0, prev - 1));
  const increment = () => setNumber((prev) => prev + 1);

  return (
    <YStack gap="$4">
      <XStack ai="center" gap="$2" jc="space-between">
        <Text fontSize="$7" fontWeight="bold" color="#EDEDEF">
          {header}
        </Text>

        {!disableInfo && (
          <>
            <Button size="$2" chromeless circular onPress={() => setShowSheet(true)}>
              <Info size="$1.5" color="#EDEDEF" />
            </Button>

            <InfoSheet
              open={showSheet}
              onOpenChange={setShowSheet}
              sheetHeader={sheetHeader}
              sheetText={sheetText}
            />
          </>
        )}
      </XStack>

      <XStack ai="center" jc="space-between" bg="#2B3640" br="$6" p="$4" gap="$4">
        <Button size="$3" chromeless onPress={decrement}>
          <Minus size="$1.5" color="#EDEDEF" />
        </Button>

        <Text fontSize="$7" fontWeight="700" color="#EDEDEF" ta="center" minWidth={40}>
          {number}
        </Text>

        <Button size="$3" chromeless onPress={increment}>
          <Plus size="$1.5" color="#EDEDEF" />
        </Button>
      </XStack>
    </YStack>
  );
}
