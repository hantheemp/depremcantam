import { Info, Minus, Plus } from '@tamagui/lucide-icons';
import { useState } from 'react';
import { Button, Text, XStack, YStack } from 'tamagui';
import InfoSheet from './InfoSheet';

type CounterInputProps = {
  header: string;
  value?: number;
  onChange?: (v: number) => void;
  disableInfo?: boolean;
  sheetText: string;
  sheetHeader: string;
  isAdult?: boolean;
};

export default function CounterInput({
  header,
  value = 0,
  onChange,
  disableInfo = false,
  sheetHeader,
  sheetText,
  isAdult,
}: CounterInputProps) {
  const [local, setLocal] = useState<number>(value);
  const [showSheet, setShowSheet] = useState(false);

  function change(to: number) {
    let next = Math.max(0, to);

    if (isAdult) {
      next = Math.max(1, to);
    }

    setLocal(next);
    onChange?.(next);
  }

  const decrement = () => change(local - 1);
  const increment = () => change(local + 1);

  return (
    <YStack gap="$4">
      <XStack ai="center" jc="space-between">
        <Text fontSize="$6" fontWeight="800" color="#EDEDEF">
          {header}
        </Text>
        {!disableInfo && (
          <Button size="$2" circular bg="transparent" onPress={() => setShowSheet(true)}>
            <Info size="$1.5" color="#EDEDEF" />
          </Button>
        )}
      </XStack>

      <XStack ai="center" jc="space-between" bg="#2B3640" br="$6" p="$4">
        <Button size="$3" circular bg="rgba(75, 85, 99, 0.8)" onPress={decrement}>
          <Minus size="$1.5" color="#EDEDEF" />
        </Button>

        <Text fontSize="$7" fontWeight="700" color="#EDEDEF" textAlign="center" minWidth={40}>
          {local}
        </Text>

        <Button size="$3" circular bg="rgba(75, 85, 99, 0.8)" onPress={increment}>
          <Plus size="$1.5" color="#EDEDEF" />
        </Button>
      </XStack>

      <InfoSheet
        open={showSheet}
        onOpenChange={setShowSheet}
        sheetHeader={sheetHeader}
        sheetText={sheetText}
      />
    </YStack>
  );
}
