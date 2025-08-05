import { Text, YStack } from 'tamagui';
import CategoryItem from './CategoryItem';

type ItemProps = {
  header: string;
  quantity: number;
  body: string;
};

type CategoryItemsProps = {
  category: string;
  items: ItemProps[];
};

export default function CategoryItems({ category, items }: CategoryItemsProps) {
  return (
    <YStack bg="$background" jc="space-between" gap="$2">
      <Text fontSize="$8" fontWeight="800" color="#EDEDEF">
        {category}
      </Text>
      {items.map((item, index) => (
        <CategoryItem 
          key={`${category}-${index}`}
          header={item.header} 
          quantity={item.quantity} 
          body={item.body}
        />
      ))}
    </YStack>
  );
}