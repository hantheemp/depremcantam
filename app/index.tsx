import { useEffect } from 'react';
import { View, ActivityIndicator } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { router } from 'expo-router';
import { getDB, setupDB } from '~/db/connection';
import { resetDB, seedDB } from '~/db/seedData';
import { foodItems } from '~/db/schema';

export default function IndexScreen() {
  useEffect(() => {
    const resetSwitch = true;

    async function initApp() {
      const setupResult = await setupDB();

      if (!setupResult.success) {
        console.error('DB setup failed:', setupResult.error);
        return;
      }

      if (resetSwitch) {
        await resetDB();
      } else {
        await seedDB();
      }

      try {
        const items = await getDB().select().from(foodItems);
        console.log('Sample Food Items:', items);
      } catch (error) {
        console.error('Error fetching items:', error);
      }

      try {
        const hasCompletedOnboarding = await AsyncStorage.getItem('onboarding_complete');

        if (hasCompletedOnboarding === 'true') {
          router.replace('/(main)/home');
        } else {
          router.replace('/(onboarding)/welcome');
        }
      } catch (error) {
        router.replace('/(onboarding)/welcome');
      }
    }

    initApp();
  }, []);
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <ActivityIndicator size="large" />
    </View>
  );
}
