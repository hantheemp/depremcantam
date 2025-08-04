import { Sheet, Text } from 'tamagui';

type InfoSheetProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  sheetHeader: string;
  sheetText: string;
};

export default function InfoSheet({ open, onOpenChange, sheetHeader, sheetText }: InfoSheetProps) {
  return (
    <Sheet
      open={open}
      onOpenChange={onOpenChange}
      snapPointsMode="constant"
      snapPoints={[180]}
      dismissOnSnapToBottom
      modal>
      <Sheet.Overlay
        animation="lazy"
        backgroundColor="$shadowColor"
        opacity={0.5}
        enterStyle={{ opacity: 0 }}
        exitStyle={{ opacity: 0 }}
      />
      <Sheet.Handle />
      <Sheet.Frame p="$4" bg="#2B3640" br="$4" borderTopLeftRadius="$4" borderTopRightRadius="$4">
        <Text fontSize="$7" color="#EDEDEF" textAlign="left">
          {sheetHeader}
        </Text>
        <Text fontSize="$5" color="#EDEDEF" mt="$2" textAlign="left">
          {sheetText}
        </Text>
      </Sheet.Frame>
    </Sheet>
  );
}
