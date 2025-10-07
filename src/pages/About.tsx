import { useLanguage } from '../context/LanguageContext';
import { translations } from '../i18n/translations';
import { MapPin, Phone } from 'lucide-react';

export default function About() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-br from-gray-50 to-gray-100 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-center mb-8">{t.about.title}</h1>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold mb-4">
            {language === 'tr' ? 'Misyonumuz' :
             language === 'en' ? 'Our Mission' :
             language === 'ar-sy' ? 'مهمتنا' :
             language === 'ru' ? 'Наша миссия' :
             'Unsere Mission'}
          </h2>
          <p className="text-gray-700 leading-relaxed text-lg mb-6">
            {t.about.mission}
          </p>
          <p className="text-gray-700 leading-relaxed text-lg">
            {t.about.story}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold">
                {language === 'tr' ? 'İletişim' :
                 language === 'en' ? 'Contact' :
                 language === 'ar-sy' ? 'اتصال' :
                 language === 'ru' ? 'Контакты' :
                 'Kontakt'}
              </h3>
            </div>
            <div className="space-y-2 text-gray-700">
              <p className="font-medium">0533 XXX XX XX</p>
              <p>WhatsApp: 0533 XXX XX XX</p>
              <p>Email: info@caddespot.com</p>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold">
                {language === 'tr' ? 'Adres' :
                 language === 'en' ? 'Address' :
                 language === 'ar-sy' ? 'العنوان' :
                 language === 'ru' ? 'Адрес' :
                 'Adresse'}
              </h3>
            </div>
            <div className="space-y-2 text-gray-700">
              <p className="font-medium">Isparta Merkez</p>
              <p>
                {language === 'tr' ? 'Pazartesi - Cumartesi' :
                 language === 'en' ? 'Monday - Saturday' :
                 language === 'ar-sy' ? 'الاثنين - السبت' :
                 language === 'ru' ? 'Понедельник - Суббота' :
                 'Montag - Samstag'}
              </p>
              <p>09:00 - 19:00</p>
            </div>
          </div>
        </div>

        <div className="mt-12 bg-gray-50 rounded-xl p-8">
          <h2 className="text-2xl font-bold mb-4 text-center">
            {language === 'tr' ? 'Neden Bizi Tercih Etmelisiniz?' :
             language === 'en' ? 'Why Choose Us?' :
             language === 'ar-sy' ? 'لماذا تختارنا؟' :
             language === 'ru' ? 'Почему выбирают нас?' :
             'Warum uns wählen?'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-gray-900 rounded-full mt-2"></div>
              <div>
                <h4 className="font-semibold mb-1">
                  {language === 'tr' ? 'Kalite Garantisi' :
                   language === 'en' ? 'Quality Guarantee' :
                   language === 'ar-sy' ? 'ضمان الجودة' :
                   language === 'ru' ? 'Гарантия качества' :
                   'Qualitätsgarantie'}
                </h4>
                <p className="text-gray-600">
                  {language === 'tr' ? 'Her ürün detaylı inceleme ve testten geçer' :
                   language === 'en' ? 'Every item undergoes detailed inspection and testing' :
                   language === 'ar-sy' ? 'يخضع كل منتج لفحص واختبار مفصل' :
                   language === 'ru' ? 'Каждый товар проходит детальную проверку и тестирование' :
                   'Jeder Artikel wird gründlich geprüft und getestet'}
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-gray-900 rounded-full mt-2"></div>
              <div>
                <h4 className="font-semibold mb-1">
                  {language === 'tr' ? 'Uygun Fiyatlar' :
                   language === 'en' ? 'Affordable Prices' :
                   language === 'ar-sy' ? 'أسعار معقولة' :
                   language === 'ru' ? 'Доступные цены' :
                   'Günstige Preise'}
                </h4>
                <p className="text-gray-600">
                  {language === 'tr' ? 'Piyasanın en uygun fiyatlarını sunuyoruz' :
                   language === 'en' ? 'We offer the most competitive prices in the market' :
                   language === 'ar-sy' ? 'نقدم أكثر الأسعار تنافسية في السوق' :
                   language === 'ru' ? 'Мы предлагаем самые конкурентные цены на рынке' :
                   'Wir bieten die wettbewerbsfähigsten Preise auf dem Markt'}
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-gray-900 rounded-full mt-2"></div>
              <div>
                <h4 className="font-semibold mb-1">
                  {language === 'tr' ? 'Geniş Ürün Yelpazesi' :
                   language === 'en' ? 'Wide Product Range' :
                   language === 'ar-sy' ? 'مجموعة واسعة من المنتجات' :
                   language === 'ru' ? 'Широкий ассортимент' :
                   'Breite Produktpalette'}
                </h4>
                <p className="text-gray-600">
                  {language === 'tr' ? 'Mobilyadan elektroniğe, beyaz eşyadan dekorasyona' :
                   language === 'en' ? 'From furniture to electronics, appliances to decor' :
                   language === 'ar-sy' ? 'من الأثاث إلى الإلكترونيات، من الأجهزة إلى الديكور' :
                   language === 'ru' ? 'От мебели до электроники, от техники до декора' :
                   'Von Möbeln bis Elektronik, von Geräten bis Dekoration'}
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-gray-900 rounded-full mt-2"></div>
              <div>
                <h4 className="font-semibold mb-1">
                  {language === 'tr' ? 'Yerel Hizmet' :
                   language === 'en' ? 'Local Service' :
                   language === 'ar-sy' ? 'خدمة محلية' :
                   language === 'ru' ? 'Местное обслуживание' :
                   'Lokaler Service'}
                </h4>
                <p className="text-gray-600">
                  {language === 'tr' ? 'Isparta\'da yıllardır güvenilir hizmet' :
                   language === 'en' ? 'Trusted service in Isparta for years' :
                   language === 'ar-sy' ? 'خدمة موثوقة في إسبرطة منذ سنوات' :
                   language === 'ru' ? 'Надежное обслуживание в Испарте на протяжении многих лет' :
                   'Vertrauenswürdiger Service in Isparta seit Jahren'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
