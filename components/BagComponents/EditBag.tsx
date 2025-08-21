import { useRouter } from 'expo-router';
import { ScrollView, Text, Button, Input, TextArea, Select, XStack, Group } from 'tamagui';
import {
  Plus,
  SaveAll,
  GlassWater,
  Bandage,
  Baby,
  SoapDispenserDroplet,
  CalendarDays,
} from '@tamagui/lucide-icons';

import {
  belongsToIcons,
  clothTypeIcons,
  isChargedIcons,
  itemTypeIcons,
  selectOptions,
} from '../Selector/constants';
import Selector from '../Selector/Selector';
import CounterInput from '../CounterInput/CounterInput';
import ItemSection from '../ItemComponents/ItemSection';
import ItemComponent from '../ItemComponents/Item';
import { Smartphone, Shirt, FileText, Hamburger } from '@tamagui/lucide-icons';
import { getAllItemsByBagId } from '~/db/operators/item';
import { useEffect, useState } from 'react';
import SelectGroup from './SelectGroup';
import DateTimePicker from '../DateTimePicker';

interface EditBagComponentProps {
  bagID: number;
}

export default function EditBagComponent({ bagID }: EditBagComponentProps) {
  const router = useRouter();

  const [selectedItemType, setSelectedItemType] = useState<string | null>(null);
  const [selectedClothType, setSelectedClothType] = useState<string | null>(null);
  const [selectedIsCharged, setSelectedIsCharged] = useState<string | null>(null);
  const [selectedBelongsTo, setSelectedBelongsTo] = useState<string | null>(null);
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [expiryDate, setExpiryDate] = useState<Date | null>(null);

  const [items, setItems] = useState<{
    foods: any[];
    clothes: any[];
    electronics: any[];
    documents: any[];
    drinks: any[];
    hygienes: any[];
    medicals: any[];
    specialCares: any[];
  }>({
    foods: [],
    clothes: [],
    electronics: [],
    documents: [],
    drinks: [],
    hygienes: [],
    medicals: [],
    specialCares: [],
  });

  const itemTypes = [
    {
      key: 'foods',
      title: 'Gıdalar',
      icon: Hamburger,
      items: items.foods,
    },

    {
      key: 'medicals',
      title: 'Medikal Malzemeler',
      icon: Bandage,
      items: items.medicals,
    },
    {
      key: 'specialCares',
      title: 'Özel Bakım',
      icon: Baby,
      items: items.specialCares,
    },
    {
      key: 'hygienes',
      title: 'Hijyen',
      icon: SoapDispenserDroplet,
      items: items.hygienes,
    },

    {
      key: 'drinks',
      title: 'İçecekler',
      icon: GlassWater,
      items: items.drinks,
    },
    {
      key: 'clothes',
      title: 'Kıyafetler',
      icon: Shirt,
      items: items.clothes,
    },
    {
      key: 'electronics',
      title: 'Elektronikler',
      icon: Smartphone,
      items: items.electronics,
    },
    {
      key: 'documents',
      title: 'Belgeler',
      icon: FileText,
      items: items.documents,
    },
  ];

  useEffect(() => {
    (async () => {
      try {
        const items = await getAllItemsByBagId(bagID);
        if (items) setItems(items);
      } catch (err) {
        console.error('Error fetching items:', err);
      }
    })();
  }, []);

  const totalItemsCount = Object.values(items).reduce(
    (total, itemArray) => total + itemArray.length,
    0
  );

  return (
    <ScrollView flex={1} showsVerticalScrollIndicator={false}>
      <Group>
        <Text mb="$3" fontSize="$6" fontWeight="700" color="$color">
          Ürün Türü
        </Text>
        <Selector mappableArray={itemTypeIcons} />
      </Group>

      <Group>
        <Text mt="$5" mb="$3" fontSize="$6" fontWeight="700" color="$color">
          Mevsim
        </Text>
        <Selector mappableArray={clothTypeIcons} />
      </Group>

      <Group>
        <Text mt="$5" mb="$3" fontSize="$6" fontWeight="700" color="$color">
          Şarjlı mı?
        </Text>
        <Selector mappableArray={isChargedIcons} />
      </Group>

      <Group>
        <Text mt="$5" mb="$3" fontSize="$6" fontWeight="700" color="$color">
          Kime Ait?
        </Text>
        <Selector mappableArray={belongsToIcons} />
      </Group>

      {selectOptions.map(({ label, options }, i) => (
        <SelectGroup
          key={i}
          label={label}
          options={options}
          onValueChange={(val) => console.log(val)}
        />
      ))}

      <Group>
        <Text fontSize="$6" mt="$5" mb="$3" fontWeight="700" color="$color">
          Ürün İsmi
        </Text>
        <Input
          size="$4"
          height="$5"
          w="100%"
          placeholderTextColor="$color"
          bg="rgba(75, 85, 99, 0.6)"
          placeholder="Ürün ismi"
          borderRadius="$4"
        />
      </Group>
      <Group>
        <Text fontSize="$6" mt="$5" mb="$3" fontWeight="700" color="$color">
          Ürün Açıklaması
        </Text>
        <TextArea
          w="100%"
          height="$8"
          placeholderTextColor="$color"
          bg="rgba(75, 85, 99, 0.6)"
          placeholder="Çanta açıklaması girin..."
          size="$4"
          borderRadius="$4"
        />
      </Group>
      <Group mt="$5" mb="$3">
        <CounterInput header="Adet" sheetHeader="" sheetText="" disableInfo={true} />
      </Group>
      <Group>
        <Text mt="$5" fontSize="$7" mb="$2" fontWeight="700" color="$color">
          Son Kullanma Tarihi
        </Text>
        <XStack mt="$5" p="$4" bg="rgba(75, 85, 99, 0.6)" jc="space-between" ai="center" mb="$4">
          <Text fontSize="$6" fontWeight="700" color="$color">
            {expiryDate ? expiryDate.toLocaleDateString() : new Date().toLocaleDateString()}
          </Text>
          <Button
            circular
            bg="rgba(75, 85, 99, 0.8)"
            icon={<CalendarDays size="$1"></CalendarDays>}
            onPress={() => setDatePickerVisibility(true)}
          />
          <DateTimePicker
            isVisible={isDatePickerVisible}
            onConfirm={(date) => {
              setExpiryDate(date);
              setDatePickerVisibility(false);
            }}
            onCancel={() => setDatePickerVisibility(false)}
          />
        </XStack>
      </Group>
      <Group mt="$6" mb="$4">
        <XStack jc="center">
          <Button
            borderRadius="$5"
            bg="#EDEDEF"
            w="100%"
            jc="center"
            iconAfter={<Plus size="$1.5" color="$color1" />}>
            <Text fontSize="$5" color="$color1" fontWeight="700">
              Ekle
            </Text>
          </Button>
        </XStack>
      </Group>

      <Text mt="$6" mb="$4" fontSize="$6" fontWeight="700" color="$color">
        Ürünler ({totalItemsCount})
      </Text>

      {itemTypes.map(
        (itemType) =>
          itemType.items.length > 0 && (
            <ItemSection key={itemType.key} title={itemType.title}>
              {itemType.items.map((item, idx) => (
                <ItemComponent
                  key={`${itemType.key}-${idx}`}
                  icon={itemType.icon}
                  header={item.header}
                  body={`SKT: ${item.body ?? '—'}`}
                  quantity={item.quantity}
                  onDecrease={() => {}}
                  onIncrease={() => {}}
                  isPlusMinus={false}
                />
              ))}
            </ItemSection>
          )
      )}

      <Group mt="$6" mb="$8">
        <XStack jc="center">
          <Button
            size="$4"
            height="$5"
            borderRadius="$5"
            bg="#EDEDEF"
            w="100%"
            jc="center"
            iconAfter={<SaveAll size="$1.5" color="$color1" />}>
            <Text fontSize="$5" color="$color1" fontWeight="700">
              Kaydet
            </Text>
          </Button>
        </XStack>
      </Group>
    </ScrollView>
  );
}
