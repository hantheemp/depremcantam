import { useRouter } from 'expo-router';
import {
  YStack,
  ScrollView,
  Text,
  Button,
  Input,
  TextArea,
  Select,
  XStack,
  Group,
  Adapt,
  Label,
} from 'tamagui';
import {
  Plus,
  Calendar,
  Save,
  SaveAll,
  GlassWater,
  Bandage,
  Baby,
  SoapDispenserDroplet,
  ChevronDown,
  ChevronUp,
  Check,
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
import { getAllItemsByBagId, getItemsByBagId } from '~/db/operators/item';
import { useEffect, useState } from 'react';
import { Sheet } from 'tamagui';
import { LinearGradient } from 'react-native-svg';

interface EditBagComponentProps {
  bagID: number;
}

export default function EditBagComponent({ bagID }: EditBagComponentProps) {
  const router = useRouter();
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
    <ScrollView py="$8" flex={1} showsVerticalScrollIndicator={false}>
      <Group>
        <Text mb="$4" fontSize="$7" fontWeight="800" color="$color">
          Ürün Türü
        </Text>
        <Selector mappableArray={itemTypeIcons} />
      </Group>

      <Group>
        <Text mt="$4" mb="$4" fontSize="$7" fontWeight="800" color="$color">
          Mevsim
        </Text>
        <Selector mappableArray={clothTypeIcons} />
      </Group>

      <Group>
        <Text mt="$4" mb="$4" fontSize="$7" fontWeight="800" color="$color">
          Şarjlı mı?
        </Text>
        <Selector mappableArray={isChargedIcons} />
      </Group>

      <Group>
        <Text mt="$4" mb="$4" fontSize="$7" fontWeight="800" color="$color">
          Kime Ait?
        </Text>
        <Selector mappableArray={belongsToIcons} />
      </Group>

      {selectOptions.map(({ label, options }, i) => (
        <YStack key={i} mt="$4" gap="$2">
          <Label fontSize="$7" fontWeight="800" color="$color">
            {label}
          </Label>
          <Select
            value={options[0].toLowerCase()}
            onValueChange={(val) => console.log(val)}
            disablePreventBodyScroll>
            <Select.Trigger
              borderRadius="$6"
              bg="#EDEDEF"
              maxWidth={220}
              iconAfter={ChevronDown}
              px="$3"
              py="$2">
              <Select.Value placeholder="Seçin" />
            </Select.Trigger>

            <Adapt platform="touch">
              <Sheet modal dismissOnSnapToBottom>
                <Sheet.Frame>
                  <Sheet.ScrollView>
                    <Adapt.Contents />
                  </Sheet.ScrollView>
                </Sheet.Frame>
                <Sheet.Overlay backgroundColor="$shadowColor" />
              </Sheet>
            </Adapt>

            <Select.Content zIndex={200000}>
              <Select.ScrollUpButton
                alignItems="center"
                justifyContent="center"
                height="$3"
                width="100%">
                <YStack zIndex={10}>
                  <ChevronUp size={20} />
                </YStack>
                <LinearGradient />
              </Select.ScrollUpButton>

              <Select.Viewport minWidth={200}>
                <Select.Group>
                  {options.map((opt, idx) => (
                    <Select.Item
                      key={idx}
                      index={idx}
                      value={opt.toLowerCase()}
                      px="$3"
                      py="$2"
                      borderRadius="$6">
                      <Select.ItemText>{opt}</Select.ItemText>
                      <Select.ItemIndicator marginLeft="auto">
                        <Check size={16} />
                      </Select.ItemIndicator>
                    </Select.Item>
                  ))}
                </Select.Group>
              </Select.Viewport>

              <Select.ScrollDownButton
                alignItems="center"
                justifyContent="center"
                height="$3"
                width="100%">
                <YStack zIndex={10}>
                  <ChevronDown size={20} />
                </YStack>
                <LinearGradient />
              </Select.ScrollDownButton>
            </Select.Content>
          </Select>
        </YStack>
      ))}

      <Group>
        <Text mt="$4" mb="$2" fontWeight="700" color="$color">
          Ürün İsmi
        </Text>
        <Input placeholder="Ürün ismi" />
      </Group>
      <Group>
        <Text mt="$4" mb="$2" fontWeight="700" color="$color">
          Ürün Açıklaması
        </Text>
        <TextArea placeholder="Çanta açıklaması girin..." />
      </Group>
      <Group>
        <Text mt="$4" mb="$2" fontWeight="700" color="$color">
          Adet
        </Text>
        <CounterInput header="Adet" sheetHeader="" sheetText="" disableInfo={true} />
      </Group>
      <Group>
        <Text mt="$4" mb="$2" fontWeight="700" color="$color">
          Son Kullanma Tarihi
        </Text>
        <Button icon={<Calendar size="$1" />}>Tarih Seç</Button>
      </Group>
      <Group mt="$6" mb="$2">
        <Button
          size="$5"
          borderRadius="$6"
          bg="#EDEDEF"
          w="100%"
          jc="center"
          iconAfter={<Plus size="$1.5" color="$color1" />}>
          <Text fontSize="$6" color="$color1" fontWeight="800">
            Ekle
          </Text>
        </Button>
      </Group>

      <Text mt="$6" mb="$2" fontSize="$7" fontWeight="700" color="$color">
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
                  body={`SKT: ${item.expiry_date ?? '—'}`}
                  quantity={item.quantity}
                  onDecrease={() => {}}
                  onIncrease={() => {}}
                />
              ))}
            </ItemSection>
          )
      )}

      <Group mt="$6" mb="$2">
        <Button
          size="$5"
          borderRadius="$6"
          bg="#EDEDEF"
          w="100%"
          jc="center"
          iconAfter={<SaveAll size="$1.5" color="$color1" />}>
          <Text fontSize="$6" color="$color1" fontWeight="800">
            Kaydet
          </Text>
        </Button>
      </Group>
    </ScrollView>
  );
}
