import { Stack } from 'expo-router';
import { ScrollView, TamaguiProvider, Theme } from 'tamagui';
import config from '../tamagui.config';
import { SafeAreaProvider } from 'react-native-safe-area-context';

interface StackScreenOptions {
  headerShown: boolean;
}

const stackScreenOptions: StackScreenOptions = { headerShown: false };

export default function Layout() {
  return (
    <TamaguiProvider config={config}>
      <SafeAreaProvider>
        <Theme name="dark">
          <Stack screenOptions={stackScreenOptions}>
              <Stack.Screen name="index" />
              <Stack.Screen name="(onboarding)" />
              <Stack.Screen name="(main)" />
          </Stack>
        </Theme>
      </SafeAreaProvider>
    </TamaguiProvider>
  );
}
