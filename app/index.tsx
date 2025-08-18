import { useEffect } from 'react';
import { View, ActivityIndicator } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { router } from 'expo-router';
import { useDB } from '~/db/DBProvider';
import { foodItems } from '~/db/schema';

export default function IndexScreen() {
  const db = useDB();

  useEffect(() => {
    async function init() {
      if (!db) return;

      const items = await db.select().from(foodItems);
      console.log('Food items:', items);

      const hasCompletedOnboarding = await AsyncStorage.getItem('onboarding_complete');
      //if (hasCompletedOnboarding === 'true') {
      if (false) {
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
