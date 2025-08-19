/* 
    This file is used for:
        * Seeding database for test data.
        * Clearing database.
        * Resetting database ( clear + seed )
    
    Instead of dealing with bullshit json test files, migrated to SQLite at the early phases of development.
*/

import { getDB } from '../connection';
import {
  bags,
  foodItems,
  electronicItems,
  clothingItems,
  medicalItems,
  documentItems,
  specialCareItems,
  sharedBags,
} from '../schema';

export async function seedDB() {
  try {
    const db = await getDB();

    const sampleBags = [
      {
        id: 1,
        name: 'Ana Acil Durum Çantası',
        description: 'Temel acil durum malzemeleri içeren ana çanta',
        saved_at: new Date().toISOString(),
        is_owned: true,
      },
      {
        id: 2,
        name: 'Araç Acil Durum Kiti',
        description: 'Araçta bulundurulması gereken acil durum malzemeleri',
        saved_at: new Date().toISOString(),
        is_owned: true,
      },
      {
        id: 3,
        name: 'Paylaşılan Aile Çantası',
        description: 'Aile üyeleri arasında paylaşılan acil durum çantası',
        saved_at: new Date().toISOString(),
        is_owned: false,
      },
    ];

    await db.insert(bags).values(sampleBags);

    const sharedBagRelations = [
      {
        shared_bag_id: 3,
        can_edit: true,
        shared_at: new Date().toISOString(),
      },
    ];

    await db.insert(sharedBags).values(sharedBagRelations);

    const sampleFoodItems = [
      {
        id: 1,
        header: 'Konserve Fasulye',
        quantity: 12,
        expiry_date: '2026-12-31',
        body: 'Protein açısından zengin, uzun raf ömrü',
        bag_id: 1,
        added_at: new Date().toISOString(),
      },
      {
        id: 2,
        header: 'İçme Suyu (5L)',
        quantity: 6,
        expiry_date: '2025-06-15',
        body: 'Temiz içme suyu, acil durumlar için',
        bag_id: 1,
        added_at: new Date().toISOString(),
      },
      {
        id: 3,
        header: 'Enerji Barı',
        quantity: 20,
        expiry_date: '2025-09-30',
        body: 'Yüksek kalori, kompakt boyut',
        bag_id: 2,
        added_at: new Date().toISOString(),
      },
      {
        id: 4,
        header: 'Kurutulmuş Meyve',
        quantity: 8,
        expiry_date: '2025-12-01',
        body: 'Vitamin kaynağı, doğal şeker',
        bag_id: 3,
        added_at: new Date().toISOString(),
      },
    ];

    await db.insert(foodItems).values(sampleFoodItems);

    const sampleElectronicItems = [
      {
        id: 1,
        header: 'LED El Feneri',
        quantity: 3,
        charge: '%85',
        body: 'Su geçirmez, uzun pil ömrü',
        bag_id: 1,
        added_at: new Date().toISOString(),
      },
      {
        id: 2,
        header: 'Güneş Panelli Radyo',
        quantity: 1,
        charge: 'Çalışır durumda',
        body: 'Hava durumu ve acil haberler için',
        bag_id: 1,
        added_at: new Date().toISOString(),
      },
      {
        id: 3,
        header: 'Power Bank 20000mAh',
        quantity: 2,
        charge: '%100',
        body: 'Yüksek kapasiteli şarj cihazı',
        bag_id: 2,
        added_at: new Date().toISOString(),
      },
      {
        id: 4,
        header: 'Acil Durum Düdüğü',
        quantity: 4,
        charge: 'Pil gerektirmez',
        body: 'Yardım çağırmak için ses verici',
        bag_id: 3,
        added_at: new Date().toISOString(),
      },
    ];

    await db.insert(electronicItems).values(sampleElectronicItems);

    const sampleClothingItems = [
      {
        id: 1,
        header: 'Su Geçirmez Yağmurluk',
        quantity: 4,
        season: 'Her mevsim',
        body: 'Hafif, katlanabilir, su geçirmez',
        bag_id: 1,
        added_at: new Date().toISOString(),
      },
      {
        id: 2,
        header: 'Termal İç Çamaşır Seti',
        quantity: 2,
        season: 'Kış',
        body: 'Vücut ısısını korur',
        bag_id: 1,
        added_at: new Date().toISOString(),
      },
      {
        id: 3,
        header: 'Çok Amaçlı Eldiven',
        quantity: 6,
        season: 'Her mevsim',
        body: 'İş eldiveni, koruyucu',
        bag_id: 2,
        added_at: new Date().toISOString(),
      },
      {
        id: 4,
        header: 'Kalın Çorap',
        quantity: 8,
        season: 'Kış',
        body: 'Ayak sıcaklığı için kalın çoraplar',
        bag_id: 3,
        added_at: new Date().toISOString(),
      },
    ];

    await db.insert(clothingItems).values(sampleClothingItems);

    const sampleMedicalItems = [
      {
        id: 1,
        header: 'İlk Yardım Kiti',
        quantity: 1,
        medicine_type: 'Kit',
        body: 'Temel ilk yardım malzemeleri seti',
        bag_id: 1,
        added_at: new Date().toISOString(),
      },
      {
        id: 2,
        header: 'Ağrı Kesici İlaç',
        quantity: 2,
        medicine_type: 'Tablet',
        body: 'Paracetamol bazlı ağrı kesici',
        bag_id: 1,
        added_at: new Date().toISOString(),
      },
      {
        id: 3,
        header: 'Antiseptik Solüsyon',
        quantity: 3,
        medicine_type: 'Sıvı',
        body: 'Yara temizleme ve dezenfeksiyon',
        bag_id: 2,
        added_at: new Date().toISOString(),
      },
      {
        id: 4,
        header: 'Elastic Bandaj',
        quantity: 5,
        medicine_type: 'Malzeme',
        body: 'Burkulmalar ve yaralanmalar için',
        bag_id: 3,
        added_at: new Date().toISOString(),
      },
    ];

    await db.insert(medicalItems).values(sampleMedicalItems);

    const sampleDocumentItems = [
      {
        id: 1,
        header: 'Kimlik Fotokopisi',
        quantity: 2,
        document_type: 'Kimlik',
        body: 'Nüfus cüzdanı ve ehliyet kopyası',
        bag_id: 1,
        added_at: new Date().toISOString(),
      },
      {
        id: 2,
        header: 'Sigorta Poliçeleri',
        quantity: 1,
        document_type: 'Sigorta',
        body: 'Sağlık ve kasko sigortası belgeleri',
        bag_id: 1,
        added_at: new Date().toISOString(),
      },
      {
        id: 3,
        header: 'Acil Durum İletişim Listesi',
        quantity: 1,
        document_type: 'Liste',
        body: 'Önemli telefon numaraları listesi',
        bag_id: 2,
        added_at: new Date().toISOString(),
      },
      {
        id: 4,
        header: 'Banka Bilgileri',
        quantity: 1,
        document_type: 'Finansal',
        body: 'Banka hesap bilgileri ve kartlar',
        bag_id: 3,
        added_at: new Date().toISOString(),
      },
    ];

    await db.insert(documentItems).values(sampleDocumentItems);

    const sampleSpecialCareItems = [
      {
        id: 1,
        header: 'Bebek Bezi Paketi',
        quantity: 30,
        belongs_to: 'Bebek (6-12 ay)',
        body: 'Su geçirmez, yumuşak bez',
        bag_id: 1,
        added_at: new Date().toISOString(),
      },
      {
        id: 2,
        header: 'Yaşlı Bakım Malzemeleri',
        quantity: 1,
        belongs_to: 'Yaşlı Birey',
        body: 'Günlük bakım için gerekli malzemeler',
        bag_id: 1,
        added_at: new Date().toISOString(),
      },
      {
        id: 3,
        header: 'Diyabet İlaç Kiti',
        quantity: 1,
        belongs_to: 'Diyabet Hastası',
        body: 'İnsülin ve ölçüm cihazları',
        bag_id: 2,
        added_at: new Date().toISOString(),
      },
      {
        id: 4,
        header: 'Evcil Hayvan Yemi',
        quantity: 5,
        belongs_to: 'Köpek',
        body: 'Kuru mama ve su kabı',
        bag_id: 3,
        added_at: new Date().toISOString(),
      },
    ];

    await db.insert(specialCareItems).values(sampleSpecialCareItems);

    return {
      bags: sampleBags.length,
      sharedRelations: sharedBagRelations.length,
      foodItems: sampleFoodItems.length,
      electronicItems: sampleElectronicItems.length,
      clothingItems: sampleClothingItems.length,
      medicalItems: sampleMedicalItems.length,
      documentItems: sampleDocumentItems.length,
      specialCareItems: sampleSpecialCareItems.length,
    };
  } catch (error) {
    throw new Error(`Error occured while seeding DB: ${error}`);
  }
}

/* 
    Delete Item instances in reverse order (to prevent foreign key constraint).
    Never cascade constraints, they exist for a reason!
*/
export async function clearDB() {
  const db = await getDB();
  try {
    await db.delete(sharedBags);
    await db.delete(specialCareItems);
    await db.delete(documentItems);
    await db.delete(medicalItems);
    await db.delete(clothingItems);
    await db.delete(electronicItems);
    await db.delete(foodItems);
    await db.delete(bags);
  } catch (error) {
    throw new Error(`Error occured while clearing DB: ${error}`);
  }
}

/*
    Helper function to clear and seed database.
*/
export async function resetDB() {
  await clearDB();
  return await seedDB();
}
