import { ArrowLeft, Trash2 } from '@tamagui/lucide-icons';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { Button, ScrollView, Text, XStack, YStack } from 'tamagui';
import EditBagComponent from '~/components/BagComponents/EditBag';

export default function EditBagScreen() {
  const router = useRouter();
  const params = useLocalSearchParams();

  // Extract bagID from the dynamic route parameter
  const bagID = parseInt(params.bagID as string);

  // Add some error handling
  if (isNaN(bagID)) {
    return (
      <YStack f={1} bg="$background" px="$4" py="$10" jc="center" ai="center">
        <Text color="$color">Invalid bag ID</Text>
        <Button onPress={() => router.replace('/main/home')} mt="$4">
          Go Back
        </Button>
      </YStack>
    );
  }

  return (
    <YStack f={1} bg="$background" px="$4" py="$10">
      <XStack jc="space-between" ai="center" mb="$4">
        <Button
          circular
          size="$3"
          icon={<ArrowLeft size="$1" />}
          onPress={() => router.replace('/main/home')}
        />
        <Text fontSize="$7" fontWeight="800" color="$color">
          Çantayı Düzenle
        </Text>
        <Button
          circular
          size="$3"
          icon={<Trash2 size="$1" />}
          onPress={() => console.log('Delete bag with ID:', bagID)}
        />
      </XStack>

      <ScrollView flex={1} showsVerticalScrollIndicator={false}>
        <EditBagComponent bagID={bagID} />
      </ScrollView>
    </YStack>
  );
}
