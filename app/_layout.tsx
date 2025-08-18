import { Stack } from 'expo-router';
import { ScrollView, TamaguiProvider, Theme } from 'tamagui';
import config from '../tamagui.config';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ActivityIndicator } from 'react-native';
import { Suspense, useEffect } from 'react';
import { SQLiteProvider } from 'expo-sqlite';
import { DATABASE_NAME } from '@env';
import { DBProvider } from '~/db/DBProvider';

interface StackScreenOptions {
  headerShown: boolean;
}

const stackScreenOptions: StackScreenOptions = { headerShown: false };

export default function Layout() {
  return (
    <Suspense fallback={<ActivityIndicator size="large"></ActivityIndicator>}>
      <SQLiteProvider
        databaseName={DATABASE_NAME}
        options={{ enableChangeListener: true }}
        useSuspense>
        <DBProvider>
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
        </DBProvider>
      </SQLiteProvider>
    </Suspense>
  );
}
