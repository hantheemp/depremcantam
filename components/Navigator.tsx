import { Home, Plus, Search } from '@tamagui/lucide-icons';
import { Link } from 'expo-router';
import { Button, XStack } from 'tamagui';

export default function Navigator() {
  return (
    <XStack
      position="absolute"
      bottom={30}
      width="100%"
      borderTopWidth={1}
      borderColor="$borderColor"
      justifyContent="space-around"
      backgroundColor="$background"
      paddingVertical="$2">
      <Link href="/home" asChild>
        <Button scaleIcon={1.5} icon={Home} />
      </Link>
      <Link href="/add-bag" asChild>
        <Button scaleIcon={1.5} icon={Plus} />
      </Link>
      <Link href="/explore" asChild>
        <Button scaleIcon={1.5} icon={Search} />
      </Link>
    </XStack>
  );
}
