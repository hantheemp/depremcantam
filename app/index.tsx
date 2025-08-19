import AsyncStorage from '@react-native-async-storage/async-storage';
import { router } from 'expo-router';
import { ActivityIndicator } from 'react-native';
import { View } from 'tamagui';
import { generateItems } from '~/services/item';

export default async function IndexScreen() {
  const items = generateItems({ adult: 1, children: 1, elderly: 1, baby: 1, pet: 1 });

  console.log(items);

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
