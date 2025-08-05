import { useEffect } from 'react';
import { router } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { View, ActivityIndicator } from 'react-native';

export default function IndexScreen() {
  useEffect(() => {
    checkOnboardingStatus();
  }, []);

  const checkOnboardingStatus = async () => {
    try {
      await AsyncStorage.setItem('onboarding_complete', 'false');

      const hasCompletedOnboarding = await AsyncStorage.getItem('onboarding_complete');

      if (hasCompletedOnboarding === 'true') {
        // router.replace('/(tabs)/' as any);
        // Currently real implementation does not exist.
      } else {
        router.replace('/(onboarding)/welcome/' as any);
      }
    } catch (error) {
      router.replace('/(onboarding)/welcome/' as any);
    }
  };

  return (
    <View className="flex-1 bg-gray-900 justify-center items-center">
      <ActivityIndicator size="large" color="#ffffff" />
    </View>
  );
}
