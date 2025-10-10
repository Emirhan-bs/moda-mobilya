import { useLanguage } from "../context/LanguageContext";
import { translations } from "../i18n/translations";
import { Phone, MapPin, Instagram } from "lucide-react";

export default function Footer() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <footer className="bg-gray-900 text-white mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* SOL BLOK */}
          <div>
            <h3 className="text-xl font-bold mb-4">Isparta Moda Mobilya</h3>
            <p className="text-gray-400 mb-3">
              {language === "tr"
                ? "Isparta'nın güvenilir spot ve mobilya merkezi."
                : language === "en"
                ? "Isparta's trusted furniture and second-hand store."
                : language === "ar-sy"
                ? "المتجر الموثوق للأثاث والسلع المستعملة في إسبرطة."
                : language === "ru"
                ? "Надежный мебельный и комиссионный магазин в Испарте."
                : "Ispartas vertrauenswürdiger Möbel- und Gebrauchtwarenladen."}
            </p>

            {/* Instagram bağlantısı */}
            <a
              href="https://www.instagram.com/ispartamodamobilya"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
            >
              <Instagram className="w-5 h-5" />
              <span>@ispartamodamobilya</span>
            </a>
          </div>

          {/* ORTA BLOK */}
          <div>
            <h4 className="text-lg font-semibold mb-4">{t.footer.contact}</h4>
            <div className="space-y-2 text-gray-400">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span dangerouslySetInnerHTML={{ __html: t.footer.phone }} />
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>{t.footer.address}</span>
              </div>
            </div>
          </div>

          {/* SAĞ BLOK */}
          <div>
            <h4 className="text-lg font-semibold mb-4">
              {language === "tr"
                ? "Çalışma Saatleri"
                : language === "en"
                ? "Working Hours"
                : language === "ar-sy"
                ? "ساعات العمل"
                : language === "ru"
                ? "Часы работы"
                : "Öffnungszeiten"}
            </h4>
            <p className="text-gray-400">
              {language === "tr"
                ? "Pazartesi - Pazar: 09:00 - 19:00"
                : language === "en"
                ? "Monday - Sunday: 09:00 - 19:00"
                : language === "ar-sy"
                ? "الاثنين - الأحد: 09:00 - 19:00"
                : language === "ru"
                ? "Понедельник - Воскресенье: 09:00 - 19:00"
                : "Montag - Sonntag: 09:00 - 19:00"}
            </p>
          </div>
        </div>

        {/* ALT KISIM */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>
            &copy; 2025 Isparta Moda Mobilya.{" "}
            {language === "tr"
              ? "Tüm hakları saklıdır."
              : language === "en"
              ? "All rights reserved."
              : language === "ar-sy"
              ? "جميع الحقوق محفوظة."
              : language === "ru"
              ? "Все права защищены."
              : "Alle Rechte vorbehalten."}{" "}
            | Developed by{" "}
            <a
              href="https://www.linkedin.com/in/emirhan-buyuksenirli"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              Emirhan Büyüksenirli
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
