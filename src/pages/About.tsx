import { useLanguage } from "../context/LanguageContext";
import { translations } from "../i18n/translations";
import { MapPin, Phone, Instagram } from "lucide-react";

export default function About() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <div className="min-h-screen">
      {/* Üst Başlık */}
      <section className="bg-gradient-to-br from-gray-50 to-gray-100 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-center mb-8">
            {t.about.title}
          </h1>
        </div>
      </section>

      {/* Misyon / Hikaye */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold mb-4">
            {language === "tr"
              ? "Misyonumuz"
              : language === "en"
              ? "Our Mission"
              : language === "ar-sy"
              ? "مهمتنا"
              : language === "ru"
              ? "Наша миссия"
              : "Unsere Mission"}
          </h2>
          <p className="text-gray-700 leading-relaxed text-lg mb-6">
            {t.about.mission}
          </p>
          <p className="text-gray-700 leading-relaxed text-lg">
            {t.about.story}
          </p>
        </div>

        {/* İletişim ve Adres Kartları */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* İletişim Kartı */}
          <div className="bg-white rounded-xl shadow-lg p-10">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold">
                {language === "tr"
                  ? "İletişim"
                  : language === "en"
                  ? "Contact"
                  : language === "ar-sy"
                  ? "اتصال"
                  : language === "ru"
                  ? "Контакты"
                  : "Kontakt"}
              </h3>
            </div>

            <div className="space-y-4 text-gray-700 text-lg leading-relaxed break-words">
              {/* Telefonlar */}
              <p className="font-medium">
                <a
                  href="tel:+905375545742"
                  className="text-blue-600 hover:underline"
                >
                  📞 0537 554 57 42
                </a>
              </p>
              <p className="font-medium">
                <a
                  href="tel:+905455714541"
                  className="text-blue-600 hover:underline"
                >
                  📞 0545 571 45 41
                </a>
              </p>

              {/* WhatsApp */}
              <p className="break-words">
                <a
                  href="https://wa.me/905375545742"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-600 hover:underline"
                >
                  💬 WhatsApp: 0537 554 57 42 - İlyas Büyüksenirli
                </a>
              </p>
              <p className="break-words">
                <a
                  href="https://wa.me/905455714541"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-600 hover:underline"
                >
                  💬 WhatsApp: 0545 571 45 41 - Mehmet Gün
                </a>
              </p>

              {/* Email */}
              <p className="break-words">
                <a
                  href="mailto:info@ispartamodamobilya.com"
                  className="text-blue-500 hover:underline"
                >
                  ✉️ ispartamodamobilya@gmail.com
                </a>
              </p>

              {/* Instagram */}
              <p className="break-words">
                <a
                  href="https://www.instagram.com/ispartamodamobilya"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-pink-600 hover:underline font-medium"
                >
                  <Instagram className="w-5 h-5" />
                  @ispartamodamobilya
                </a>
              </p>
            </div>
          </div>

          {/* Adres + Harita Kartı */}
          <div className="bg-white rounded-xl shadow-lg p-10">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold">
                {language === "tr"
                  ? "Adres"
                  : language === "en"
                  ? "Address"
                  : language === "ar-sy"
                  ? "العنوان"
                  : language === "ru"
                  ? "Адрес"
                  : "Adresse"}
              </h3>
            </div>

            <div className="space-y-3 text-gray-700 mb-4 text-lg">
              <p className="font-medium">
                Yayla, 1607. Sk. No:4, 32100 Isparta Merkez/Isparta, Türkiye
              </p>
              <p>
                {language === "tr"
                  ? "Pazartesi - Pazar"
                  : language === "en"
                  ? "Monday - Sunday"
                  : language === "ar-sy"
                  ? "الاثنين - الأحد"
                  : language === "ru"
                  ? "Понедельник - Воскресенье"
                  : "Montag - Sonntag"}
              </p>
              <p>09:00 - 19:00</p>
            </div>

            <iframe
              title="Isparta Moda Mobilya Konumu"
              src="https://www.google.com/maps?q=Yayla%2C+1607.+Sk.+No%3A4%2C+32100+Isparta+Merkez%2FIsparta%2C+Türkiye&output=embed"
              width="100%"
              height="250"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              className="rounded-lg shadow-sm"
            ></iframe>
          </div>
        </div>

        {/* Avantajlar */}
        <div className="mt-12 bg-gray-50 rounded-xl p-8">
          <h2 className="text-2xl font-bold mb-4 text-center">
            {language === "tr"
              ? "Neden Bizi Tercih Etmelisiniz?"
              : language === "en"
              ? "Why Choose Us?"
              : language === "ar-sy"
              ? "لماذا تختارنا؟"
              : language === "ru"
              ? "Почему выбирают нас?"
              : "Warum uns wählen?"}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                tr: "Kalite Garantisi",
                en: "Quality Guarantee",
                descTr: "Her ürün detaylı inceleme ve testten geçer",
                descEn: "Every item undergoes detailed inspection and testing",
              },
              {
                tr: "Uygun Fiyatlar",
                en: "Affordable Prices",
                descTr: "Piyasanın en uygun fiyatlarını sunuyoruz",
                descEn: "We offer the most competitive prices in the market",
              },
              {
                tr: "Geniş Ürün Yelpazesi",
                en: "Wide Product Range",
                descTr: "Mobilyadan elektroniğe, beyaz eşyadan dekorasyona",
                descEn: "From furniture to electronics, appliances to decor",
              },
              {
                tr: "Yerel Hizmet",
                en: "Local Service",
                descTr: "Isparta'da yıllardır güvenilir hizmet",
                descEn: "Trusted service in Isparta for years",
              },
            ].map((item, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <div className="w-2 h-2 bg-gray-900 rounded-full mt-2"></div>
                <div>
                  <h4 className="font-semibold mb-1">
                    {language === "tr" ? item.tr : item.en}
                  </h4>
                  <p className="text-gray-600">
                    {language === "tr" ? item.descTr : item.descEn}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
