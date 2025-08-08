import { Text, YStack } from "tamagui";

export default function SettingsScreen() {
  return (
    <YStack f={1} bg="$background" jc="center" ai="center">
      <Text fontSize="$6" color="$textPrimary">
        Welcome to the Settings Screen!
      </Text>
    </YStack>
  );
}