import AsyncStorage from '@react-native-async-storage/async-storage';
import { router } from 'expo-router';
import { ActivityIndicator } from 'react-native';
import { View } from 'tamagui';

export default async function IndexScreen() {
  const hasCompletedOnboarding = await AsyncStorage.getItem('onboarding_complete');

  try {
    if (hasCompletedOnboarding === 'true') {
      router.replace('/(main)/home');
    } else {
      router.replace('/(onboarding)/welcome');
    }
  } catch (e) {
    console.error('DB error:', e);
  }

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <ActivityIndicator size="large" />
    </View>
  );
}
