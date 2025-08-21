import DateTimePickerModal from 'react-native-modal-datetime-picker';

interface DateTimePickerInterface {
  isVisible: boolean;
  onConfirm: (date: Date) => void;
  onCancel: () => void;
}

export default function DateTimePicker({
  isVisible,
  onConfirm,
  onCancel,
}: DateTimePickerInterface) {
  return (
    <DateTimePickerModal
      isVisible={isVisible}
      mode="date"
      onConfirm={onConfirm}
      onCancel={onCancel}
    />
  );
}
