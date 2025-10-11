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
  }, {
    id: 5,
    slug: 'beige-sofa-set',
    title: {
      tr: 'Bej Koltuk Takımı',
      en: 'Beige Sofa Set',
      'ar-sy': 'طقم كنبة بيج',
      ru: 'Бежевый комплект диванов',
      de: 'Beiges Sofaset',
    },
    description: {
      tr: 'Modern tasarımı ve sade görünümüyle her eve uyum sağlayan bej koltuk takımı. Rahat oturum yapısı ve dayanıklı iskeletiyle uzun yıllar konfor sağlar.',
      en: 'A beige sofa set with a modern and simple design that fits any home. Comfortable seating and a durable frame ensure long-lasting comfort.',
      'ar-sy': 'طقم كنبة بيج بتصميم بسيط وحديث يناسب جميع المنازل، مريح ومتناسق مع أي ديكور.',
      ru: 'Бежевый диван в современном стиле, подходит для любого интерьера. Удобный и долговечный.',
      de: 'Beiges Sofaset mit modernem, schlichtem Design. Bietet Komfort und Langlebigkeit für jedes Zuhause.',
    },
    price: '₺35.000',
    category: 'Mobilya',
    brand: '',
    condition: 'Yeni',
    images: [
      '/assets/products/beige-modern-sofa-set/beige-modern-sofa-set-1.png',
      '/assets/products/beige-modern-sofa-set/beige-modern-sofa-set-2.png',
      '/assets/products/beige-modern-sofa-set/beige-modern-sofa-set-3.png',
      '/assets/products/beige-modern-sofa-set/beige-modern-sofa-set-4.png'
    ],
  }, {
    id: 6,
    slug: 'dual-tone-modern-sofa-set',
    title: {
      tr: 'Çift Renkli Modern Koltuk Takımı',
      en: 'Dual Tone Modern Sofa Set',
      'ar-sy': 'طقم كنبة حديث بلونين',
      ru: 'Современный двухцветный комплект диванов',
      de: 'Modernes zweifarbiges Sofaset',
    },
    description: {
      tr: 'Zarif detayları ve konforlu yapısıyla öne çıkan Çift Renkli Modern Koltuk Takımı, krem ve koyu gri tonlarıyla modern mekanlara sıcak bir hava katar.',
      en: 'The Dual Tone Modern Sofa Set stands out with elegant details and cozy comfort. Featuring beige and dark gray tones, it adds warmth and style to modern interiors.',
      'ar-sy': 'طقم كنبة بلونين أنيقين، رمادي غامق وبيج، يجمع بين الراحة والفخامة ليضيف لمسة دفء للمساحات الحديثة.',
      ru: 'Современный двухцветный диван с сочетанием тёмно-серого и бежевого оттенков добавит тепла и уюта вашему интерьеру.',
      de: 'Modernes zweifarbiges Sofaset in Beige und Dunkelgrau – vereint Komfort, Stil und Langlebigkeit für ein warmes Wohnambiente.',
    },
    price: '₺25.000',
    category: 'Mobilya',
    brand: '',
    condition: 'Yeni',
    images: [
      '/assets/products/dual-tone-modern-sofa-set/dual-tone-modern-sofa-set1.png',
      '/assets/products/dual-tone-modern-sofa-set/dual-tone-modern-sofa-set2.png',
      '/assets/products/dual-tone-modern-sofa-set/dual-tone-modern-sofa-set3.png'
    ],
  }, {
    id: 8,
    slug: 'gray-elegant-sofa-set',
    title: {
      tr: 'Gri Şık Koltuk Takımı',
      en: 'Gray Elegant Sofa Set',
      'ar-sy': 'طقم كنبة أنيق باللون الرمادي',
      ru: 'Элегантный серый комплект диванов',
      de: 'Elegantes graues Sofaset',
    },
    description: {
      tr: 'Gri tonların zarafetiyle tasarlanmış bu şık koltuk takımı, sade ve modern hatlarıyla yaşam alanınıza sofistike bir görünüm kazandırır.',
      en: 'Designed with the elegance of gray tones, this stylish sofa set brings a sophisticated look to your living space with its simple and modern lines.',
      'ar-sy': 'تم تصميم هذا الطقم الأنيق بدرجات اللون الرمادي ليمنح مساحتك لمسة من الأناقة والعصرية.',
      ru: 'Элегантный серый диван, выполненный в современном стиле, придаёт вашему интерьеру утончённый вид.',
      de: 'Ein elegantes graues Sofaset mit modernen Linien, das Ihrem Wohnzimmer eine raffinierte Note verleiht.',
    },
    price: '₺35.000',
    category: 'Mobilya',
    brand: '',
    condition: 'Yeni',
    images: [
      '/assets/products/gray-elegant-sofa-set/gray-elegant-sofa-set3.png',
      '/assets/products/gray-elegant-sofa-set/gray-elegant-sofa-set2.png',
      '/assets/products/gray-elegant-sofa-set/gray-elegant-sofa-set1.png',
    ],
  }, {
    id: 10,
    slug: 'contrast-dual-sofa-set',
    title: {
      tr: 'Kontrast Renkli Modern Koltuk Takımı',
      en: 'Contrast Dual Sofa Set',
      'ar-sy': 'طقم كنبة حديث بلونين متباينين',
      ru: 'Современный двухцветный комплект диванов с контрастом',
      de: 'Modernes kontrastfarbenes Sofaset',
    },
    description: {
      tr: 'Açık ve koyu tonların dengeli uyumuyla dikkat çeken Kontrast Renkli Modern Koltuk Takımı, tarzınızı ön plana çıkaran zarif bir tasarıma sahiptir.',
      en: 'The Contrast Dual Sofa Set stands out with its balanced harmony of light and dark tones, featuring an elegant design that highlights your style.',
      'ar-sy': 'يتميز طقم الكنب بلونين متباينين بتصميم أنيق يبرز أسلوبك بفضل التناسق بين الدرجات الفاتحة والداكنة.',
      ru: 'Современный диван с гармоничным сочетанием светлых и тёмных оттенков придаёт вашему интерьеру стиль и утончённость.',
      de: 'Ein modernes Sofaset mit ausgewogenem Kontrast zwischen hellen und dunklen Tönen, das Ihrem Stil Eleganz verleiht.',
    },
    price: '₺32.000',
    category: 'Mobilya',
    brand: '',
    condition: 'Yeni',
    images: [
      '/assets/products/contrast-dual-sofa-set/contrast-dual-sofa-set1.png',
      '/assets/products/contrast-dual-sofa-set/contrast-dual-sofa-set2.png',
      '/assets/products/contrast-dual-sofa-set/contrast-dual-sofa-set3.png',
      '/assets/products/contrast-dual-sofa-set/contrast-dual-sofa-set4.png'
    ],
  }, {
    id: 11,
    slug: 'soft-corner-l-sofa',
    title: {
      tr: 'Soft Köşe L Koltuk',
      en: 'Soft Corner L Sofa',
      'ar-sy': 'كنبة على شكل L بزاوية ناعمة',
      ru: 'Угловой диван Soft L',
      de: 'Weiches Ecksofa in L-Form',
    },
    description: {
      tr: 'Açık gri tonuyla ferah bir görünüm sunan Soft Köşe L Koltuk, modern çizgileri ve konforlu yapısıyla oturma alanınıza zarafet ve rahatlık kazandırır.',
      en: 'The Soft Corner L Sofa, in a light gray tone, offers a spacious and modern look, adding both elegance and comfort to your living space.',
      'ar-sy': 'تمنح كنبة L بلون رمادي فاتح مظهراً عصرياً وفسيحاً مع لمسة من الأناقة والراحة.',
      ru: 'Угловой диван светло-серого цвета придаёт интерьеру ощущение простора, уюта и современного стиля.',
      de: 'Das Soft Corner L-Sofa in hellem Grau verleiht Ihrem Wohnraum eine elegante und komfortable Atmosphäre.',
    },
    price: '₺34.000',
    category: 'Mobilya',
    brand: '',
    condition: 'Yeni',
    images: [
      '/assets/products/soft-corner-l-sofa/soft-corner-l-sofa.png'
    ],
  }, {
    id: 8,
    slug: 'gold-accent-cream-sofa-set',
    title: {
      tr: 'Altın Detaylı Krem Koltuk Takımı',
      en: 'Gold-Accent Cream Sofa Set',
      'ar-sy': 'طقم كنبة كريمي بتفاصيل ذهبية',
      ru: 'Кремовый набор диванов с золотыми акцентами',
      de: 'Cremes Sofa-Set mit Goldakzenten',
    },
    description: {
      tr: 'Yumuşak krem döşeme ve zarif altın detaylar ile modern-şık görünüm. Geniş oturum ve rahat yastıklarla konfor sunar.',
      en: 'Soft cream upholstery with elegant gold accents for a modern-chic look. Spacious seating and plush cushions for comfort.',
      'ar-sy': 'تنجيد كريمي ناعم مع لمسات ذهبية أنيقة لمظهر عصري. مقاعد واسعة ووسائد مريحة.',
      ru: 'Мягкая кремовая обивка с элегантными золотыми акцентами. Просторные сиденья и уютные подушки.',
      de: 'Weicher cremefarbener Bezug mit eleganten Goldakzenten. Geräumige Sitzfläche und bequeme Kissen.',
    },
    price: '₺36.000',
    category: 'Mobilya',
    brand: '',
    condition: 'Yeni',
    images: [
      '/assets/products/gold-accent-cream-sofa-set/gold-accent-cream-sofa-set-1.png'
    ],
  },
  {
    id: 9,
    slug: 'tufted-luxe-fireplace-sofa-set',
    title: {
      tr: 'Kapitone Lüks Koltuk Takımı',
      en: 'Tufted Luxe Sofa Set',
      'ar-sy': 'طقم كنبة فخم بكابتوني بجوار المدفأة',
      ru: 'Роскошный капитонный набор диванов у камина',
      de: 'Gesteppte Luxus-Sofagarnitur am Kamin',
    },
    description: {
      tr: 'Geniş kapitone detayları ve iki tonlu tasarımıyla sıcak, davetkâr bir atmosfer oluşturur. Salon ve oturma odaları için ideal.',
      en: 'Generous tufting and a two-tone palette create a warm, inviting look. Ideal for living rooms and lounges.',
      'ar-sy': 'تفاصيل كابتوني فخمة ولوحة لونية ثنائية تمنح دفئاً وأناقة للمكان.',
      ru: 'Выразительная стёжка и двухцветная палитра создают тёплую атмосферу. Идеально для гостиной.',
      de: 'Ausgeprägte Steppung und zweifarbige Optik für ein warmes Ambiente. Ideal fürs Wohnzimmer.',
    },
    price: '₺35.000',
    category: 'Mobilya',
    brand: '',
    condition: 'Yeni',
    images: [
      '/assets/products/tufted-luxe-fireplace-sofa-set/tufted-luxe-fireplace-sofa-set-1.png'
    ],
  }, {
    id: 11,
    slug: 'nova-elegance-koltuk-takimi',
    title: {
      tr: 'Nova Elegance Koltuk Takımı',
      en: 'Nova Elegance Sofa Set',
      'ar-sy': 'طقم كنبة نوفا إليغانس',
      ru: 'Набор диванов Nova Elegance',
      de: 'Nova Elegance Sofa-Set',
    },
    description: {
      tr: 'Nova Elegance Koltuk Takımı, modern çizgiler ve krom detayların zarif uyumunu bir araya getirir. Gri ve lacivert tonlarının dengesiyle şık bir atmosfer oluşturur. Rahat oturumu, yüksek kaliteli kumaşı ve dayanıklı iskelet yapısıyla hem estetik hem konfor arayanlar için mükemmel bir tercihtir.',
      en: 'The Nova Elegance Sofa Set combines modern lines with refined chrome details. The balance of gray and navy tones creates a sophisticated atmosphere. With its comfortable seating, premium fabric, and durable frame, it’s the perfect choice for those seeking both style and comfort.',
      'ar-sy': 'يجمع طقم نوفا إليغانس بين الخطوط العصرية والتفاصيل المعدنية الأنيقة، مع مزيج من اللونين الرمادي والبحري لأجواء راقية ومريحة.',
      ru: 'Набор диванов Nova Elegance сочетает современные линии и хромированные детали. Баланс серых и синих оттенков создаёт утончённую атмосферу.',
      de: 'Das Nova Elegance Sofa-Set vereint moderne Linien mit eleganten Chromdetails. Grau- und Marineblautöne schaffen ein stilvolles Ambiente.',
    },
    price: '₺30.000',
    category: 'Mobilya',
    brand: '',
    condition: 'Yeni',
    images: [
      '/assets/products/nova-elegance-koltuk-takimi/nova-elegance-koltuk-takimi-1.png',
      '/assets/products/nova-elegance-koltuk-takimi/nova-elegance-koltuk-takimi-2.png'
    ],
  }, {
    id: 13,
    slug: 'verona-deluxe-koltuk-takimi',
    title: {
      tr: 'Verona Deluxe Koltuk Takımı',
      en: 'Verona Deluxe Sofa Set',
      'ar-sy': 'طقم كنبة فيرونا ديلوكس',
      ru: 'Набор диванов Verona Deluxe',
      de: 'Verona Deluxe Sofa-Set',
    },
    description: {
      tr: 'Verona Deluxe Koltuk Takımı, zarif çizgileri ve konfor odaklı tasarımıyla modern yaşam alanlarına sofistike bir dokunuş katar. Yüksek kaliteli kumaşı, dayanıklı ahşap ayakları ve geniş oturum alanı sayesinde hem estetik hem de rahatlık arayanlar için mükemmel bir tercihtir.',
      en: 'The Verona Deluxe Sofa Set adds a sophisticated touch to modern living spaces with its elegant lines and comfort-focused design. Featuring premium fabric, durable wooden legs, and spacious seating, it’s the perfect choice for those who value both style and relaxation.',
      'ar-sy': 'يضيف طقم فيرونا ديلوكس لمسة من الأناقة إلى المساحات العصرية بفضل تصميمه المريح وخطوطه الراقية. يتميز بقماش عالي الجودة وأرجل خشبية متينة ومساحة جلوس واسعة تجمع بين الراحة والفخامة.',
      ru: 'Набор диванов Verona Deluxe придаёт изысканность современным интерьерам благодаря элегантным линиям и комфорту. Прочная деревянная основа, качественная ткань и просторные сиденья делают его идеальным выбором для ценителей уюта и стиля.',
      de: 'Das Verona Deluxe Sofa-Set verleiht modernen Wohnräumen mit seinen eleganten Linien und komfortorientiertem Design einen Hauch von Raffinesse. Mit hochwertigem Stoff, stabilen Holzbeinen und großzügigen Sitzflächen ist es ideal für alle, die Stil und Komfort schätzen.',
    },
    price: '₺35.000',
    category: 'Mobilya',
    brand: '',
    condition: 'Yeni',
    images: [
      '/assets/products/verona-deluxe-koltuk-takimi/verona-deluxe-koltuk-takimi-1.png',
      '/assets/products/verona-deluxe-koltuk-takimi/verona-deluxe-koltuk-takimi-2.png'
    ],
  }






];

export const categories = [
  'Mobilya',
  'Beyaz Eşya',
  'Elektronik',
];
