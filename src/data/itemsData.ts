import { Item } from '../types';

export const items: Item[] = [
  {
    id: 1,
    slug: 'cek-yat-koltuk',
    title: {
      tr: 'Çek Yat Koltuk',
      en: 'Sofa Bed',
      'ar-sy': 'كنبة سرير',
      ru: 'Диван-кровать',
      de: 'Schlafsofa',
    },
    description: {
      tr: 'Geniş yatak alanına dönüşebilen, depolama bölmeli modern çek yat.',
      en: 'Modern sofa bed with storage and a spacious sleeping area.',
      'ar-sy': 'كنبة سرير حديثة مع مساحة تخزين ومنطقة نوم واسعة.',
      ru: 'Современный диван-кровать с хранением и просторной зоной для сна.',
      de: 'Modernes Schlafsofa mit Stauraum und großer Liegefläche.',
    },
    price: '₺10.000',
    category: 'Mobilya',
    brand: '',
    condition: 'Yeni',
    images: [
      '/assets/products/cek-yat/cek1.jpeg', '/assets/products/cek-yat/cek2.jpeg',


    ],
  },

  {
    id: 2,
    slug: 'tek-kisilik-baza-takimi',
    title: {
      tr: 'Tek Kişilik Baza Takımı (Başlık + Baza + Yatak)',
      en: 'Single Bed Set (Headboard + Base + Mattress)',
      'ar-sy': 'طقم سرير فردي (لوح رأس + قاعدة + مرتبة)',
      ru: 'Односпальный комплект (изголовье + основание + матрас)',
      de: 'Einzelbett-Set (Kopfteil + Bettkasten + Matratze)',
    },
    description: {
      tr: 'Sıfır tek kişilik baza takımı. Başlık, baza ve yatak dahildir. Şık, dayanıklı ve uzun ömürlü bir modeldir.',
      en: 'Brand new single bed set including headboard, base, and mattress. Stylish, durable, and long-lasting model.',
      'ar-sy': 'طقم سرير فردي جديد تمامًا يشمل لوح الرأس والقاعدة والمرتبة. أنيق ومتین وطويل الأمد.',
      ru: 'Новый односпальный комплект с изголовьем, основанием и матрасом. Стильный, прочный и долговечный.',
      de: 'Nagelneues Einzelbett-Set inklusive Kopfteil, Bettkasten und Matratze. Stilvoll, robust und langlebig.',
    },
    price: '₺9.000',
    category: 'Mobilya',
    brand: 'Özel Üretim',
    condition: 'Sıfır',
    images: [
      '/assets/products/baza/baza.jpeg',
    ],
  },
  {
    id: 3,
    slug: 'mavi-l-koltuk',
    title: {
      tr: 'Mavi L Koltuk Takımı',
      en: 'Blue L-Shaped Sofa Set',
      'ar-sy': 'طقم أريكة زاوية زرقاء',
      ru: 'Синий угловой диван',
      de: 'Blaues L-Sofa-Set',
    },
    description: {
      tr: '2. el, çok iyi durumda L koltuk. Yırtık, leke veya deformasyon yoktur. Açılıp yatak haline gelebilir, oldukça rahat ve geniştir.',
      en: 'Second-hand blue L-shaped sofa in excellent condition. No tears or stains. It can be opened into a bed and is very comfortable and spacious.',
      'ar-sy': 'أريكة زاوية زرقاء مستعملة بحالة ممتازة. لا توجد تمزقات أو بقع. يمكن فتحها لتصبح سريرًا وهي مريحة وواسعة.',
      ru: 'Угловой синий диван в отличном состоянии. Без порезов и пятен. Раскладывается в кровать, очень удобный и просторный.',
      de: 'Gebrauchtes blaues L-Sofa in ausgezeichnetem Zustand. Keine Risse oder Flecken. Lässt sich zu einem Bett ausklappen und ist sehr bequem und geräumig.',
    },
    price: '₺15.000',
    category: 'Mobilya',
    brand: 'Özel Üretim',
    condition: 'Çok İyi',
    images: [
      '/assets/products/mavi-l-koltuk/blue.jpeg',
    ],
  }, {
    "id": 4,
    "slug": "ekmelik-dolap",
    "title": {
      "tr": "Çok Amaçlı Ekmelik Dolap",
      "en": "Multi-Purpose Bread Cabinet",
      "ar-sy": "خزانة خبز متعددة الاستخدامات",
      "ru": "Многофункциональный шкаф для хлеба",
      "de": "Multifunktionaler Brotschrank"
    },
    "description": {
      "tr": "Modern tasarımıyla hem mutfağa hem salona uyum sağlar. Farklı renk seçenekleriyle düzeni ve şıklığı bir arada sunar. Yeni ve kullanıma hazırdır.",
      "en": "With its modern design, it fits perfectly in both kitchens and living rooms. Available in different color options, combining organization and elegance. Brand new and ready to use.",
      "ar-sy": "بتصميم عصري يناسب المطبخ أو غرفة المعيشة. متوفر بعدة ألوان ويجمع بين التنظيم والأناقة. جديد وجاهز للاستخدام.",
      "ru": "Современный дизайн, подходит как для кухни, так и для гостиной. Доступен в разных цветах, сочетает порядок и стиль. Новый и готов к использованию.",
      "de": "Mit modernem Design passt er sowohl in die Küche als auch ins Wohnzimmer. In verschiedenen Farben erhältlich – kombiniert Ordnung und Eleganz. Neu und einsatzbereit."
    },
    "price": "₺2.500",
    "category": "Mobilya",
    "brand": "Moda Mobilya",
    "condition": "Yeni",
    "images": [
      "/assets/products/ekmeklik/bread1.jpeg",
      "/assets/products/ekmeklik/bread2.jpeg",

    ]
  }


];

export const categories = [
  'Mobilya',
  'Beyaz Eşya',
  'Elektronik',
];
