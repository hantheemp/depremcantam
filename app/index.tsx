import { useEffect } from 'react';
import { View, ActivityIndicator } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { router } from 'expo-router';
import { useDB } from '~/db/DBProvider';
import { getBagWithItems } from '~/services/bagService';

export default function IndexScreen() {
  const db = useDB();

  useEffect(() => {
    async function init() {
      if (!db) {
        return;
      }

      const bag = await getBagWithItems(1);
      console.log('Bag with items:', bag);

      try {
        const hasCompletedOnboarding = await AsyncStorage.getItem('onboarding_complete');
        if (hasCompletedOnboarding === 'true') {
          router.replace('/(main)/home');
        } else {
          router.replace('/(onboarding)/welcome');
        }
      } catch (e) {
        console.error('DB error:', e);
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
