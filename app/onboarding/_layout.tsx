// #NOTE: Adding this or TypeScript won't shut the fuck up while compiling.

import { Stack } from 'expo-router';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Theme, YStack } from 'tamagui';

interface StackScreenOptions {
  headerShown: boolean;
}

const stackScreenOptions: StackScreenOptions = { headerShown: false };

export default function Layout() {
  return (
    <SafeAreaProvider>
      <Theme name="dark">
        <YStack flex={1}>
          <Stack screenOptions={stackScreenOptions}>
            <Stack.Screen name="bag/index" />
            <Stack.Screen name="person-count/index" />
            <Stack.Screen name="welcome/index" />
          </Stack>
        </YStack>
      </Theme>
    </SafeAreaProvider>
  );
}
