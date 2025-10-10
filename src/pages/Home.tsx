import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../i18n/translations";
import { items } from "../data/itemsData";
import { CheckCircle, DollarSign, Shield } from "lucide-react";

export default function Home() {
  const { language } = useLanguage();
  const t = translations[language];

  const featuredItems = items.slice(0, 3);

  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-br from-gray-50 to-gray-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {t.home.hero.title}
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            {t.home.hero.subtitle}
          </p>
          <Link
            to="/items"
            className="inline-block bg-gray-900 text-white px-8 py-4 rounded-lg font-semibold hover:bg-gray-800 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all"
          >
            {t.home.hero.cta}
          </Link>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">
          {t.home.why.title}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-6 rounded-xl hover:shadow-lg transition-shadow">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
              <CheckCircle className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">
              {t.home.why.quality.title}
            </h3>
            <p className="text-gray-600">{t.home.why.quality.desc}</p>
          </div>
          <div className="text-center p-6 rounded-xl hover:shadow-lg transition-shadow">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
              <DollarSign className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">
              {t.home.why.affordable.title}
            </h3>
            <p className="text-gray-600">{t.home.why.affordable.desc}</p>
          </div>
          <div className="text-center p-6 rounded-xl hover:shadow-lg transition-shadow">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-yellow-100 rounded-full mb-4">
              <Shield className="w-8 h-8 text-yellow-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">
              {t.home.why.trusted.title}
            </h3>
            <p className="text-gray-600">{t.home.why.trusted.desc}</p>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">
          {t.home.featured}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredItems.map((item) => (
            <Link
              key={item.id}
              to={`/items/${item.slug}`}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow group"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={item.images[0]}
                  alt={item.title[language]}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 group-hover:text-gray-700 transition-colors">
                  {item.title[language]}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-2">
                  {item.description[language]}
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-gray-900">
                    {item.price}
                  </span>
                  <span className="text-gray-900 font-medium group-hover:underline">
                    {t.items.viewDetails} →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link
            to="/items"
            className="inline-block border-2 border-gray-900 text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-900 hover:text-white transition-colors"
          >
            {language === "tr"
              ? "Tüm Ürünleri Gör"
              : language === "en"
              ? "View All Items"
              : language === "ar-sy"
              ? "عرض جميع المنتجات"
              : language === "ru"
              ? "Посмотреть все товары"
              : "Alle Artikel anzeigen"}
          </Link>
        </div>
      </section>
    </div>
  );
}
