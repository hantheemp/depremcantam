import { Text, YStack } from 'tamagui';

export default function HomeScreen() {
  return (
    <YStack f={1} bg="$background" jc="center" ai="center">
      <Text fontSize="$6" color="$textPrimary">
        Welcome to the Home Screen!
      </Text>
    </YStack>
  );
}
