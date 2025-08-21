import { XStack } from 'tamagui';
import SelectorButton from './SelectorButton';
import { SelectorProps } from './interfaces';
import { useState } from 'react';

export default function Selector({ mappableArray }: SelectorProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  return (
    <XStack flex={1} flexWrap="wrap" gap="$2">
      {mappableArray.map((Icon, i) => (
        <SelectorButton
          key={i}
          Icon={Icon}
          isSelected={selectedIndex === i}
          onPress={() => setSelectedIndex(i)}
        />
      ))}
    </XStack>
  );
}
