import { YStack, Label, Select, Adapt } from 'tamagui';
import { Sheet } from 'tamagui';
import { ChevronDown, ChevronUp, Check } from '@tamagui/lucide-icons';
import { LinearGradient } from 'react-native-svg';

interface SelectGroupProps {
  label: string;
  options: string[];
  defaultValue?: string;
  onValueChange?: (val: string) => void;
}

export default function SelectGroup({
  label,
  options,
  defaultValue,
  onValueChange,
}: SelectGroupProps) {
  const firstValue = (defaultValue ?? options[0]).toLowerCase();

  return (
    <YStack mt="$4" gap="$2">
      <Label fontSize="$7" fontWeight="800" color="$color">
        {label}
      </Label>

      <Select value={firstValue} onValueChange={onValueChange} disablePreventBodyScroll>
        <Select.Trigger
          borderRadius="$6"
          bg="rgba(75, 85, 99, 0.6)"
          iconAfter={ChevronDown}
          px="$3"
          py="$2">
          <Select.Value placeholder="Seçin" />
        </Select.Trigger>

        <Adapt platform="touch">
          <Sheet modal dismissOnSnapToBottom>
            <Sheet.Frame>
              <Sheet.ScrollView>
                <Adapt.Contents />
              </Sheet.ScrollView>
            </Sheet.Frame>
            <Sheet.Overlay backgroundColor="$shadowColor" />
          </Sheet>
        </Adapt>

        <Select.Content zIndex={200000}>
          <Select.ScrollUpButton
            alignItems="center"
            justifyContent="center"
            height="$3"
            width="100%">
            <YStack zIndex={10}>
              <ChevronUp size={20} />
            </YStack>
            <LinearGradient />
          </Select.ScrollUpButton>

          <Select.Viewport minWidth={200}>
            <Select.Group>
              {options.map((opt, idx) => (
                <Select.Item
                  key={idx}
                  index={idx}
                  value={opt.toLowerCase()}
                  px="$3"
                  py="$2"
                  borderRadius="$6">
                  <Select.ItemText>{opt}</Select.ItemText>
                  <Select.ItemIndicator marginLeft="auto">
                    <Check size={16} />
                  </Select.ItemIndicator>
                </Select.Item>
              ))}
            </Select.Group>
          </Select.Viewport>

          <Select.ScrollDownButton
            alignItems="center"
            justifyContent="center"
            height="$3"
            width="100%">
            <YStack zIndex={10}>
              <ChevronDown size={20} />
            </YStack>
            <LinearGradient />
          </Select.ScrollDownButton>
        </Select.Content>
      </Select>
    </YStack>
  );
}
