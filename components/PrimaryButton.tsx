import React from 'react';
import { Button, Text } from 'tamagui';

type PrimaryButtonProps = {
  children: React.ReactNode;
  onPress?: () => void;
  accessibilityLabel?: string;
  disabled?: boolean;
};

export default function PrimaryButton({
  children,
  onPress,
  accessibilityLabel,
  disabled = false,
}: PrimaryButtonProps) {
  return (
    <Button
      size="$5"
      borderRadius="$6"
      bg="#EDEDEF"
      w="100%"
      jc="center"
      onPress={onPress}
      aria-label={accessibilityLabel}
      disabled={disabled}
    >
      <Text fontSize="$6" color="$color1" fontWeight="800">
        {children}
      </Text>
    </Button>
  );
}
