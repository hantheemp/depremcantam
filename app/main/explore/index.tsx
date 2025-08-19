import { Text, YStack } from "tamagui";

export default function ExploreScreen(){
    return (
        <YStack f={1} bg="$background" jc="center" ai="center">
        <Text fontSize="$6" color="$textPrimary">
            Welcome to the Explore Screen!
        </Text>
        </YStack>
    );
}