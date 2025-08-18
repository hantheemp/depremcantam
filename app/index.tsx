import { useEffect } from 'react';
import { View, ActivityIndicator } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { router } from 'expo-router';
import { useDB } from '~/db/DBProvider';
import { foodItems } from '~/db/schema';
import { seedDB } from '~/db/seedData';
import { eq } from 'drizzle-orm';

export default function IndexScreen() {
  const db = useDB();

  useEffect(() => {
    async function init() {
      if (!db) {
        return;
      }

      try {
        const items = await db.select().from(foodItems);

        console.log('Food items:', items);
        console.log('separator');

        const item = await db.select().from(foodItems).where(eq(foodItems.bag_id, 1));
        console.log('Specific Food', item);
      } catch (e) {
        console.error('DB error:', e);
      }

      const hasCompletedOnboarding = await AsyncStorage.getItem('onboarding_complete');
      if (hasCompletedOnboarding === 'true') {
        router.replace('/(main)/home');
      } else {
        router.replace('/(onboarding)/welcome');
      }
    }

    init();
  }, [db]);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <ActivityIndicator size="large" />
    </View>
  );
}
