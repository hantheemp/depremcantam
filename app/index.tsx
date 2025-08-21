import AsyncStorage from '@react-native-async-storage/async-storage';
import { router } from 'expo-router';
import { ActivityIndicator } from 'react-native';
import { View } from 'tamagui';
import { useEffect, useState } from 'react';

export default function IndexScreen() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const hasCompletedOnboarding = await AsyncStorage.getItem('onboarding_complete');
        if (hasCompletedOnboarding === 'true') {
          router.replace('/main/home');
        } else {
          router.replace('/onboarding/welcome');
        }
      } catch (error) {
        console.error(`Error occurred with hasCompletedOnboarding : ${error}`);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <ActivityIndicator size="large" />
    </View>
  );
}
