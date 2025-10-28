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
      '/assets/products/beige-modern-sofa-set/beige-modern-sofa-set-4.png', '/assets/products/beige-modern-sofa-set/beige-modern-sofa-set-5.png'
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
  }, {
    id: 12,
    slug: 'luna-gardirop',
    title: {
      tr: 'Luna Gardırop',
      en: 'Luna Wardrobe',
      'ar-sy': 'خزانة لونا',
      ru: 'Шкаф Luna',
      de: 'Luna Kleiderschrank',
    },
    description: {
      tr: 'İkinci el, temiz kullanılmış Luna Gardırop. Parlak beyaz yüzeyi ve sade tasarımıyla modern yaşam alanlarına zarif bir görünüm kazandırır. Geniş iç hacmi ve sağlam yapısıyla uzun ömürlü bir depolama çözümüdür. Her dekorasyona kolayca uyum sağlar.',
      en: 'Second-hand, well-maintained Luna Wardrobe. With its glossy white finish and simple design, it adds an elegant touch to modern living spaces. Its spacious interior and solid build make it a durable storage solution that fits easily into any decor.',
      'ar-sy': 'خزانة لونا مستعملة بحالة جيدة جدًا. بسطح أبيض لامع وتصميم بسيط تضيف لمسة من الأناقة إلى المساحات العصرية. توفر مساحة داخلية واسعة وبنية قوية للاستخدام الطويل الأمد.',
      ru: 'Шкаф Luna б/у, в отличном состоянии. Глянцевая белая поверхность и минималистичный дизайн придают современным интерьерам элегантный вид. Прочное строение и просторное внутреннее пространство делают его удобным и долговечным решением для хранения.',
      de: 'Gebrauchter Luna Kleiderschrank in sehr gutem Zustand. Mit glänzender weißer Oberfläche und schlichtem Design verleiht er modernen Wohnräumen eine elegante Note. Dank stabilem Aufbau und großzügigem Innenraum ist er eine langlebige Aufbewahrungslösung.'
    },
    price: '₺8.500',
    category: 'Mobilya',
    brand: '',
    condition: '2. El',
    images: [
      '/assets/products/luna-gardirop/luna-gardirop-one.png',
      '/assets/products/luna-gardirop/luna-gardirop-two.png'
    ],
    keywords: [
      'luna gardırop',
      'ikinci el gardırop',
      'beyaz gardırop',
      'modern gardırop',
      'kullanılmış dolap'
    ],
    metaDescription: 'İkinci el Luna Gardırop, parlak beyaz yüzeyi ve sade tasarımıyla modern yaşam alanlarına zarif bir görünüm kazandırır. Temiz kullanılmış ve sağlam yapısıyla uzun ömürlü bir depolama çözümüdür.'
  }, {
    id: 14,
    slug: 'lunaria-gardirop',
    title: {
      tr: 'Lunaria Gardırop',
      en: 'Lunaria Wardrobe',
      'ar-sy': 'خزانة لوناريا',
      ru: 'Шкаф Lunaria',
      de: 'Lunaria Kleiderschrank',
    },
    description: {
      tr: 'İkinci el, iyi durumda Lunaria Gardırop. Parlak beyaz yüzeyi ve ayna görünümlü zarif desen detaylarıyla modern ve ferah bir atmosfer oluşturur. Sürgülü kapak sistemiyle kullanım kolaylığı sunar. Geniş iç hacmi, askılık bölmeleri ve raf düzeniyle hem estetik hem işlevsel bir depolama çözümüdür.',
      en: 'Second-hand Lunaria Wardrobe in good condition. Its glossy white surface and elegant mirror-pattern details create a bright, modern atmosphere. The sliding door system ensures ease of use, while the spacious interior with shelves and hanging sections offers both style and practicality.',
      'ar-sy': 'خزانة لوناريا مستعملة بحالة جيدة، بسطح أبيض لامع وتفاصيل زخرفية أنيقة على الأبواب المنزلقة. توفر مساحة داخلية واسعة مع رفوف وأماكن تعليق، مما يجعلها عملية وجميلة في الوقت نفسه.',
      ru: 'Шкаф Lunaria б/у, в хорошем состоянии. Глянцевая белая поверхность и зеркальные декоративные элементы придают современный и светлый вид. С раздвижными дверцами, просторным внутренним пространством и удобными полками – это стильное и функциональное решение для хранения.',
      de: 'Gebrauchter Lunaria Kleiderschrank in gutem Zustand. Mit glänzender weißer Oberfläche und eleganten Spiegelelementen verleiht er dem Raum ein modernes und helles Ambiente. Das Schiebetürsystem und der großzügige Innenraum mit Regalen und Kleiderstangen bieten Funktionalität und Stil zugleich.'
    },
    price: '₺10.000',
    category: 'Mobilya',
    brand: '',
    condition: '2. El',
    images: [
      '/assets/products/lunaria-gardirop/white-1.png',
      '/assets/products/lunaria-gardirop/white-2.png',
      '/assets/products/lunaria-gardirop/white-3.png',
      '/assets/products/lunaria-gardirop/white-4.png'
    ],
    keywords: [
      'lunaria gardırop',
      'ayna desenli gardırop',
      'sürgülü kapaklı gardırop',
      'beyaz gardırop',
      'ikinci el dolap'
    ],
    metaDescription: 'Lunaria Gardırop, ayna desenli kapakları ve parlak beyaz yüzeyiyle dikkat çeken zarif bir modeldir. İkinci el, temiz durumda ve geniş iç hacimli bir depolama çözümü.'
  }, {
    id: 15,
    slug: 'lux-sandikli-l-koltuk',
    title: {
      tr: 'LUX Sandıklı L Koltuk',
      en: 'LUX Storage L Sofa',
      'ar-sy': 'كنبة L فاخرة مع صندوق تخزين',
      ru: 'Угловой диван LUX с ящиком для хранения',
      de: 'LUX Ecksofa mit Stauraum',
    },
    description: {
      tr: 'LUX Sandıklı L Koltuk, 210x170 cm ölçülerinde, alt kısmında geniş depolama alanına sahip, açıldığında yatak haline gelebilen modern bir modeldir. Sıfır ve özel üretimdir. Yumuşak dokulu kaliteli kumaşı ve renk seçenekleriyle hem konfor hem şıklık sunar.',
      en: 'The LUX Storage L Sofa measures 210x170 cm, featuring a spacious storage compartment underneath and a fold-out bed function. Brand new and custom-made, it offers both comfort and style with its soft fabric and multiple color options.',
      'ar-sy': 'كنبة LUX بشكل حرف L بمقاس 210×170 سم، تحتوي على مساحة تخزين واسعة ويمكن فتحها لتصبح سريرًا. جديدة ومصنوعة حسب الطلب، توفر الراحة والأناقة مع قماش ناعم وخيارات ألوان متعددة.',
      ru: 'Диван LUX L-образной формы размером 210×170 см с большим ящиком для хранения и функцией раскладывания в кровать. Новый, индивидуального производства. Мягкая обивка и выбор цветов обеспечивают комфорт и стиль.',
      de: 'Das LUX Ecksofa mit Stauraum misst 210x170 cm, verfügt über ein großes Fach unter der Sitzfläche und lässt sich zu einem Bett ausklappen. Neu und maßgefertigt, bietet es Komfort und Stil mit weichem Stoff und verschiedenen Farboptionen.'
    },
    price: '₺15.500',
    category: 'Mobilya',
    brand: 'Özel Üretim',
    condition: 'Yeni',
    images: [
      '/assets/products/lux-sandikli-l-koltuk/lux-sandikli-l-koltuk-1.png',
      '/assets/products/lux-sandikli-l-koltuk/lux-sandikli-l-koltuk-2.png'
    ],
    keywords: [
      'sandıklı l koltuk',
      'yataklı koltuk takımı',
      'özel üretim koltuk',
      'modern l koltuk',
      'konforlu köşe koltuk'
    ],
    metaDescription: '210x170 cm ölçülerinde, sandıklı ve yatak olabilen LUX L Koltuk. Sıfır, özel üretim, renk seçenekli modern ve konforlu bir model.'
  }, {
    id: 16,
    slug: 'lavinia-kose-koltuk-takimi',
    title: {
      tr: 'Lavinia Köşe Koltuk Takımı',
      en: 'Lavinia Corner Sofa Set',
      'ar-sy': 'طقم كنبة زاوية لافينيا',
      ru: 'Угловой диван Lavinia',
      de: 'Lavinia Ecksofa-Set',
    },
    description: {
      tr: 'Lavinia Köşe Koltuk Takımı, 220x220 cm ölçülerinde geniş oturma alanına sahip, kapitone detaylı sırt yapısı ve kadife dokulu kumaşıyla yaşam alanınıza zarafet katar. Pufu dahil olan bu model, hem estetik hem konfor arayanlar için mükemmel bir tercihtir. Modern tasarımı, altın renkli zarif ayakları ve geniş renk seçenekleriyle öne çıkar.',
      en: 'The Lavinia Corner Sofa Set measures 220x220 cm, offering a spacious seating area with a tufted backrest and velvet-textured fabric. Including a matching ottoman, it’s the perfect choice for those seeking both comfort and aesthetics. The modern design stands out with refined golden legs and multiple color options.',
      'ar-sy': 'طقم كنبة الزاوية لافينيا بمقاس 220×220 سم، يتميز بمساحة جلوس واسعة وتفاصيل كابتوني أنيقة وقماش مخملي فاخر. يأتي مع بوف متناسق، ويجمع بين الراحة والأناقة مع أرجل ذهبية اللون وخيارات ألوان متعددة.',
      ru: 'Угловой диван Lavinia размером 220×220 см с элегантной стёжкой и бархатной обивкой. В комплект входит пуф. Просторная и стильная модель с золотистыми ножками и выбором цветов.',
      de: 'Das Lavinia Ecksofa-Set misst 220x220 cm und bietet eine großzügige Sitzfläche mit gestepptem Rücken und samtigem Stoff. Inklusive passendem Hocker. Das moderne Design mit goldfarbenen Füßen und vielen Farboptionen sorgt für Eleganz und Komfort.'
    },
    price: '₺15.000',
    category: 'Mobilya',
    brand: 'Özel Üretim',
    condition: 'Yeni',
    images: [
      '/assets/products/lavinia-kose-koltuk-takimi/lavinia-kose-koltuk-takimi-1.png',
      '/assets/products/lavinia-kose-koltuk-takimi/lavinia-kose-koltuk-takimi-2.png'
    ],
    keywords: [
      'lavinia köşe koltuk',
      'kapitone koltuk takımı',
      'kadife köşe koltuk',
      'modern köşe koltuk',
      'lüks salon takımı',
      '220x220 köşe koltuk'
    ],
    metaDescription: '220x220 cm ölçülerinde Lavinia Köşe Koltuk Takımı, kapitone detayları ve kadife dokusu ile şıklığı ve konforu bir araya getirir. Pufu dahil, altın ayaklı modern bir modeldir.'
  }, {
    id: 17,
    slug: 'lumina-baza-yatak-seti',
    title: {
      tr: 'Lumina Baza & Yatak Seti',
      en: 'Lumina Bed Base & Mattress Set',
      'ar-sy': 'طقم سرير وقاعدة لومينا',
      ru: 'Кровать и матрас Lumina',
      de: 'Lumina Bettkasten- & Matratzen-Set',
    },
    description: {
      tr: 'Lumina Baza & Yatak Seti, modern ve zarif tasarımıyla yatak odalarına ferah bir görünüm kazandırır. Yüksek konforlu yatağı, dayanıklı baza yapısı ve dikey dikiş detaylı başlığıyla hem estetik hem uzun ömürlü bir kullanım sunar. Sıfır üründür ve farklı kumaş ile renk seçenekleriyle üretilebilir.',
      en: 'The Lumina Bed Base & Mattress Set brings a fresh, elegant look to your bedroom with its modern design. Featuring a comfortable mattress, durable base, and vertically stitched headboard, it combines style and longevity. Brand new, available in different fabrics and color options.',
      'ar-sy': 'طقم لومينا للسرير والقاعدة يضيف لمسة عصرية وأنيقة لغرفة النوم. يتميز بمرتبة مريحة، وقاعدة متينة، ولوح رأسي بتفاصيل خياطة عمودية. منتج جديد متوفر بخيارات متعددة من الأقمشة والألوان.',
      ru: 'Комплект Lumina с основанием и матрасом придаёт спальне современный и элегантный вид. Удобный матрас, прочное основание и изголовье с вертикальной прострочкой обеспечивают стиль и долговечность. Новый продукт, доступен в разных цветах и тканях.',
      de: 'Das Lumina Bettkasten- & Matratzen-Set verleiht dem Schlafzimmer mit seinem modernen Design einen eleganten Look. Mit einer bequemen Matratze, stabilem Bettkasten und vertikal gestepptem Kopfteil bietet es Stil und Langlebigkeit. Neu, mit verschiedenen Stoff- und Farboptionen erhältlich.'
    },
    price: '₺10.000',
    category: 'Mobilya',
    brand: 'Özel Üretim',
    condition: 'Yeni',
    images: [
      '/assets/products/lumina-baza-yatak-seti/lumina-baza-yatak-seti-1.png',
      '/assets/products/lumina-baza-yatak-seti/lumina-baza-yatak-seti-2.png'
    ],
    keywords: [
      'lumina baza',
      'yatak seti',
      'baza yatak takımı',
      'modern baza',
      'tek kişilik baza'
    ],
    metaDescription: 'Lumina Baza & Yatak Seti, modern tasarımı ve yüksek konforuyla yatak odanıza zarafet katar. Dayanıklı baza, kaliteli yatak ve dikey dikişli başlık ile uzun ömürlü bir kullanım sunar.'
  }, {
    id: 18,
    slug: 'cream-beige-dual-sofa-set',
    title: {
      tr: 'Krem Bej İkili Koltuk Takımı',
      en: 'Cream Beige Dual Sofa Set',
      'ar-sy': 'طقم أريكة مزدوجة بيج وكريمي',
      ru: 'Кремово-бежевый комплект диванов',
      de: 'Creme-Beige Doppelt-Sofaset'
    },
    description: {
      tr: 'Doğal tonların sıcaklığını modern tasarımla buluşturan krem-bej koltuk takımı. Yumuşak dokusu ve zarif formuyla her ortama şıklık katar.',
      en: 'A cream and beige sofa set that blends natural warmth with modern design. Soft texture and elegant form for any space.',
      'ar-sy': 'طقم أريكة باللون البيج والكريمي يجمع بين الدفء الطبيعي والتصميم العصري.',
      ru: 'Кремово-бежевый диван сочетает уют и современный стиль.',
      de: 'Creme-beiges Sofaset vereint natürliche Wärme mit modernem Design.'
    },
    price: '₺37.500',
    category: 'Mobilya',
    brand: '',
    condition: 'Yeni',
    images: [
      '/assets/products/cream-beige-dual-sofa-set/cream-beige-dual-sofa-set-1.png',
      '/assets/products/cream-beige-dual-sofa-set/cream-beige-dual-sofa-set-2.png'
    ]
  }, {
    id: 19,
    slug: 'white-soft-bed',
    title: {
      tr: 'Beyaz Yumuşak Yatak',
      en: 'White Soft Bed',
      'ar-sy': 'سرير أبيض ناعم',
      ru: 'Белая мягкая кровать',
      de: 'Weiches weißes Bett'
    },
    description: {
      tr: 'Zarif ve sade tasarımıyla yatak odanıza ferahlık katan beyaz yumuşak yatak modeli. Dolgun hatları ve konforlu yapısıyla modern bir görünüm sunar.',
      en: 'Elegant and simple design that adds freshness to your bedroom. The white soft bed offers a modern look with its plush form and comfortable structure.',
      'ar-sy': 'تصميم أنيق وبسيط يضفي لمسة من الانتعاش على غرفة نومك. يتميز السرير الأبيض الناعم بمظهر عصري وهيكل مريح.',
      ru: 'Элегантная и простая кровать белого цвета придаёт спальне свежесть. Мягкая форма и современный дизайн обеспечивают комфорт и стиль.',
      de: 'Elegantes, schlichtes Design für ein frisches Schlafzimmergefühl. Das weiche weiße Bett bietet modernen Komfort und Stil.'
    },
    price: '₺28.000',
    category: 'Mobilya',
    brand: '',
    condition: 'Yeni',
    images: [
      '/assets/products/white-soft-bed/white-soft-bed-1.png',
      '/assets/products/white-soft-bed/white-soft-bed-2.png',
      '/assets/products/white-soft-bed/white-soft-bed-3.png'
    ]
  }, {
    id: 20,
    slug: 'black-ergonomic-office-chair',
    title: {
      tr: 'Siyah Ergonomik Ofis Koltuğu',
      en: 'Black Ergonomic Office Chair',
      'ar-sy': 'كرسي مكتب أسود مريح',
      ru: 'Чёрное эргономичное офисное кресло',
      de: 'Schwarzer ergonomischer Bürostuhl'
    },
    description: {
      tr: 'Uzun çalışma saatlerinde maksimum konfor sunan siyah ergonomik ofis koltuğu. File sırt yapısı ve ayarlanabilir mekanizması ile modern ofisler için ideal bir seçenektir.',
      en: 'Black ergonomic office chair designed for maximum comfort during long working hours. Features a mesh back and adjustable mechanism, ideal for modern offices.',
      'ar-sy': 'كرسي مكتب أسود مريح بتصميم شبكي و آلية قابلة للتعديل، مثالي لساعات العمل الطويلة.',
      ru: 'Чёрное эргономичное кресло с сетчатой спинкой и регулируемым механизмом. Идеально для современных офисов.',
      de: 'Schwarzer ergonomischer Bürostuhl mit Netzrücken und verstellbarem Mechanismus. Ideal für moderne Büros.'
    },
    price: '₺9.500',
    category: 'Ofis Mobilyası',
    brand: '',
    condition: 'Yeni',
    images: [
      '/assets/products/black-ergonomic-office-chair/black-ergonomic-office-chair-1.png'
    ]
  }, {
    id: 21,
    slug: 'colorful-office-chair-set',
    title: {
      tr: 'Renkli Fileli Ofis Sandalyesi',
      en: 'Colorful Mesh Office Chair',
      'ar-sy': 'كرسي مكتب شبكي ملون',
      ru: 'Цветное офисное кресло с сеткой',
      de: 'Bunter Netz-Bürostuhl'
    },
    description: {
      tr: 'Canlı renk seçenekleriyle ofisinize enerji katan renkli fileli ofis sandalyesi. Ergonomik oturum yapısı, döner tekerlekleri ve file sırt desteğiyle uzun süreli kullanım için idealdir.',
      en: 'A colorful mesh office chair that adds energy to your workspace. With its ergonomic seat, swivel wheels, and breathable back support, it’s ideal for long hours of use.',
      'ar-sy': 'كرسي مكتب شبكي ملون يضيف لمسة من الحيوية إلى مكان عملك. مريح، قابل للدوران، وذو دعم ظهر مهوى مثالي للاستخدام الطويل.',
      ru: 'Яркое офисное кресло с сетчатой спинкой. Эргономичное сиденье, вращающиеся колёса и поддержка спины обеспечивают комфорт при длительной работе.',
      de: 'Farbenfroher Netz-Bürostuhl, der Energie in Ihr Büro bringt. Ergonomisch geformt mit drehbaren Rollen und atmungsaktiver Rückenlehne.'
    },
    price: '₺7.200',
    category: 'Ofis Mobilyası',
    brand: '',
    condition: 'Yeni',
    images: [
      '/assets/products/colorful-office-chair-set/colorful-office-chair-set-1.png',
      '/assets/products/colorful-office-chair-set/colorful-office-chair-set-2.png'
    ]
  }, {
    "id": 22,
    "slug": "bed-storage-set",
    "title": {
      "tr": "Tek Kişilik Baza Seti",
      "en": "Single Bed Base Set",
      "ar-sy": "طقم قاعدة سرير مفرد",
      "ru": "Односпальный комплект кровати с основанием",
      "de": "Einzelbettgestell-Set"
    },
    "description": {
      "tr": "Modern tasarımı ve pratik kullanımıyla öne çıkan tek kişilik baza seti. Dayanıklı mekanizması sayesinde kolayca açılıp kapanan baza, geniş iç hacmiyle eşyalarınızı düzenli şekilde saklamanızı sağlar. Konforlu yatak ve yumuşak başlık ile birlikte şık bir görünüm sunar. Ölçüleri: 100x200 cm.",
      "en": "A single bed base set featuring a modern design and practical use. Its durable lift-up mechanism allows easy access to the spacious storage compartment. Comes with a comfortable mattress and a soft padded headboard for a stylish look. Dimensions: 100x200 cm.",
      "ar-sy": "طقم قاعدة سرير مفرد بتصميم عصري واستخدام عملي. آلية رفع متينة تسهل الوصول إلى المساحة الداخلية الواسعة. يأتي مع مرتبة مريحة ولوح رأس مبطن أنيق. الأبعاد: 100x200 سم.",
      "ru": "Односпальный комплект кровати с современным дизайном и практичным использованием. Прочный подъемный механизм обеспечивает легкий доступ к вместительному ящику. В комплекте удобный матрас и мягкое изголовье. Размеры: 100x200 см.",
      "de": "Ein Einzelbettgestell-Set mit modernem Design und praktischer Nutzung. Der stabile Klappmechanismus ermöglicht einfachen Zugang zum großzügigen Stauraum. Mit bequemer Matratze und gepolstertem Kopfteil. Maße: 100x200 cm."
    },
    "price": "₺15.000",
    "category": "Yatak Odası Mobilyası",
    "brand": "",
    "condition": "Yeni",
    "images": [
      "/assets/products/bed-storage-set/bed-storage-set-5.png",
      "/assets/products/bed-storage-set/bed-storage-set-6.png",
      "/assets/products/bed-storage-set/bed-storage-set-1.png",
      "/assets/products/bed-storage-set/bed-storage-set-2.png",
      "/assets/products/bed-storage-set/bed-storage-set-3.png",
      "/assets/products/bed-storage-set/bed-storage-set-4.png",

    ]
  }














];

export const categories = [
  'Mobilya',
  'Beyaz Eşya',
  'Elektronik',
];
