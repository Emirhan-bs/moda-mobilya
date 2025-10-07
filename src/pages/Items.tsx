import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../i18n/translations';
import { items, categories } from '../data/itemsData';
import { Search } from 'lucide-react';

export default function Items() {
  const { language } = useLanguage();
  const t = translations[language];
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  const shuffledItems = useMemo(() => {
    return [...items].sort(() => Math.random() - 0.5);
  }, []);

  const filteredItems = useMemo(() => {
    let result = shuffledItems;

    if (searchTerm) {
      result = result.filter((item) => {
        const title = item.title[language].toLowerCase();
        const description = item.description[language].toLowerCase();
        const search = searchTerm.toLowerCase();
        return title.includes(search) || description.includes(search) || item.category.toLowerCase().includes(search);
      });
    }

    if (selectedCategory) {
      result = result.filter((item) => item.category === selectedCategory);
    }

    return result;
  }, [shuffledItems, searchTerm, selectedCategory, language]);

  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-br from-gray-50 to-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-center mb-8">{t.items.title}</h1>

          <div className="max-w-3xl mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder={t.items.search}
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-gray-900 focus:border-transparent outline-none"
                />
              </div>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-gray-900 focus:border-transparent outline-none bg-white"
              >
                <option value="">{t.items.allCategories}</option>
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {filteredItems.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-xl text-gray-600">{t.items.noResults}</p>
          </div>
        ) : (
          <>
            <p className="text-gray-600 mb-8">
              {filteredItems.length} {language === 'tr' ? 'ürün bulundu' :
               language === 'en' ? 'items found' :
               language === 'ar-sy' ? 'منتج تم العثور عليه' :
               language === 'ru' ? 'товаров найдено' :
               'Artikel gefunden'}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredItems.map((item) => (
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
                    <div className="text-sm text-gray-500 mb-2">{item.category}</div>
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-gray-700 transition-colors">
                      {item.title[language]}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-2">
                      {item.description[language]}
                    </p>
                    <div className="flex justify-between items-center">
                      <span className="text-2xl font-bold text-gray-900">{item.price}</span>
                      <span className="text-gray-900 font-medium group-hover:underline">
                        {t.items.viewDetails} →
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </>
        )}
      </section>
    </div>
  );
}
