export const FOOD_BASES = {
  adult: {
    header: 'Konserve',
    quantity: 9,
  },
  children: {
    header: 'Konserve',
    quantity: 6,
  },
  elderly: {
    header: 'Konserve',
    quantity: 9,
  },
  baby: {
    header: 'Bebek maması',
    quantity: 3,
  },
  pet: {
    header: 'Kuru mama / Yem',
    quantity: 3,
  },
};

export const DRINK_BASES = {
  adult: {
    header: 'Su',
    liters: 15,
  },
  children: {
    header: 'Su',
    liters: 10,
  },
  elderly: {
    header: 'Su',
    liters: 12,
  },
  baby: {
    header: 'Bebek suyu',
    liters: 5,
  },
  pet: {
    header: 'Evcil hayvan suyu',
    liters: 3,
  },
};

export const ELECTRONIC_BASES = {
  adult: {
    header: 'El feneri',
    quantity: 1,
    charge: 'Pil',
  },
  children: {
    header: 'El feneri',
    quantity: 1,
    charge: 'Pil',
  },
  elderly: {
    header: 'El feneri',
    quantity: 1,
    charge: 'Pil',
  },
  baby: {
    header: 'Bebek monitörü',
    quantity: 1,
    charge: 'Şarj',
  },
  pet: {
    header: 'LED tasma',
    quantity: 1,
    charge: 'Pil',
  },
};

export const CLOTHING_BASES = {
  adult: {
    header: 'Giyim seti',
    quantity: 3,
    season: 'Mevsimsel',
  },
  children: {
    header: 'Çocuk giyim seti',
    quantity: 4,
    season: 'Mevsimsel',
  },
  elderly: {
    header: 'Yaşlı giyim seti',
    quantity: 3,
    season: 'Sıcak',
  },
  baby: {
    header: 'Bebek kıyafeti',
    quantity: 6,
    season: 'Sıcak',
  },
  pet: {
    header: 'Evcil hayvan kıyafeti',
    quantity: 2,
    season: 'Kış',
  },
};

export const MEDICAL_BASES = {
  adult: {
    header: 'İlk yardım malzemesi',
    quantity: 1,
    medicine_type: 'Genel',
  },
  children: {
    header: 'Çocuk ilaçları',
    quantity: 2,
    medicine_type: 'Çocuk',
  },
  elderly: {
    header: 'Yaşlı ilaçları',
    quantity: 3,
    medicine_type: 'Kronik',
  },
  baby: {
    header: 'Bebek ilaçları',
    quantity: 2,
    medicine_type: 'Bebek',
  },
  pet: {
    header: 'Veteriner malzemeleri',
    quantity: 1,
    medicine_type: 'Veteriner',
  },
};

export const DOCUMENT_BASES = {
  adult: {
    header: 'Kimlik belgeleri',
    quantity: 1,
    document_type: 'Kimlik',
  },
  children: {
    header: 'Çocuk belgeleri',
    quantity: 1,
    document_type: 'Kimlik',
  },
  elderly: {
    header: 'Yaşlı belgeleri',
    quantity: 1,
    document_type: 'Sağlık',
  },
  baby: {
    header: 'Bebek belgeleri',
    quantity: 1,
    document_type: 'Doğum',
  },
  pet: {
    header: 'Evcil hayvan belgeleri',
    quantity: 1,
    document_type: 'Veteriner',
  },
};

export const SPECIAL_CARE_BASES = {
  adult: {
    header: 'Özel bakım malzemeleri',
    quantity: 1,
    belongs_to: 'Yetişkin',
  },
  children: {
    header: 'Çocuk özel bakım',
    quantity: 2,
    belongs_to: 'Çocuk',
  },
  elderly: {
    header: 'Yaşlı bakım malzemeleri',
    quantity: 3,
    belongs_to: 'Yaşlı',
  },
  baby: {
    header: 'Bebek bakım seti',
    quantity: 5,
    belongs_to: 'Bebek',
  },
  pet: {
    header: 'Evcil hayvan bakım',
    quantity: 2,
    belongs_to: 'Evcil hayvan',
  },
};

export const HYGIENE_BASES = {
  adult: {
    header: 'Hijyen malzemeleri',
    quantity: 2,
    belongs_to: 'Yetişkin',
  },
  children: {
    header: 'Çocuk hijyen seti',
    quantity: 3,
    belongs_to: 'Çocuk',
  },
  elderly: {
    header: 'Yaşlı hijyen malzemeleri',
    quantity: 4,
    belongs_to: 'Yaşlı',
  },
  baby: {
    header: 'Bebek hijyen seti',
    quantity: 6,
    belongs_to: 'Bebek',
  },
  pet: {
    header: 'Evcil hayvan hijyen',
    quantity: 1,
    belongs_to: 'Evcil hayvan',
  },
};
