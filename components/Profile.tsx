import { Avatar, XStack } from 'tamagui';

export default function Profile() {
  return (
    <XStack>
      <Avatar circular size="$10">
        <Avatar.Image
          accessibilityLabel="Cam"
          src="https://images.unsplash.com/photo-1548142813-c348350df52b?&w=150&h=150&dpr=2&q=80"
        />
        <Avatar.Fallback backgroundColor="$blue10" />
      </Avatar>
    </XStack>
  );
}
