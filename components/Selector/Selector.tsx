import { XStack } from 'tamagui';
import SelectorButton from './SelectorButton';
import { SelectorProps } from './interfaces';

export default function Selector({ mappableArray }: SelectorProps) {
  return (
    <XStack flex={1} flexWrap="wrap" gap="$2">
      {mappableArray.map((Icon, i) => (
        <SelectorButton key={i} Icon={Icon} />
      ))}
    </XStack>
  );
}
