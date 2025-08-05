import { Stack } from 'expo-router';
import { TamaguiProvider, Theme } from 'tamagui';
import config from '../tamagui.config';
interface StackScreenOptions {
  headerShown: boolean;
}
const stackScreenOptions: StackScreenOptions = { headerShown: false };

export default function Layout() {
  return (
    <TamaguiProvider config={config}>
      <Theme name="dark">
        <Stack screenOptions={stackScreenOptions}>
          <Stack.Screen name="index" />
          <Stack.Screen name="(onboarding)" />
          <Stack.Screen name="(tabs)" />
        </Stack>
      </Theme>
    </TamaguiProvider>
  );
}
