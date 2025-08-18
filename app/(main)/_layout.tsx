// (main)/layout.tsx
import { Stack } from 'expo-router';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Theme, YStack } from 'tamagui';
import Navigator from '~/components/Navigator';

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
            <Stack.Screen name="home/index" />
            <Stack.Screen name="explore/index" />
            <Stack.Screen name="add-bag/index" />
            <Stack.Screen name="home/[id]/index" />
            <Stack.Screen name="settings/index" />
          </Stack>
          <Navigator />
        </YStack>
      </Theme>
    </SafeAreaProvider>
  );
}