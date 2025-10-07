import { useState, useMemo } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../i18n/translations';
import { items } from '../data/itemsData';
import { ChevronLeft, ChevronRight, Phone } from 'lucide-react';

export default function ItemDetail() {
  const { slug } = useParams<{ slug: string }>();
  const { language } = useLanguage();
  const t = translations[language];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const item = items.find((i) => i.slug === slug);

  const relatedItems = useMemo(() => {
    if (!item) return [];
    return items
      .filter((i) => i.category === item.category && i.id !== item.id)
      .slice(0, 3);
  }, [item]);

  if (!item) {
    return <Navigate to="/items" replace />;
  }

  const hasMultipleImages = item.images.length > 1;

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % item.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + item.images.length) % item.images.length);
  };

  return (
    <div className="min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Link
          to="/items"
          className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-8 transition-colors"
        >
          <ChevronLeft className="w-5 h-5" />
          {language === 'tr' ? 'Ürünlere Dön' :
           language === 'en' ? 'Back to Items' :
           language === 'ar-sy' ? 'العودة إلى المنتجات' :
           language === 'ru' ? 'Вернуться к товарам' :
           'Zurück zu Artikeln'}
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <div className="relative bg-gray-100 rounded-xl overflow-hidden aspect-video">
              <img
                src={item.images[currentImageIndex]}
                alt={item.title[language]}
                className="w-full h-full object-cover"
              />
              {hasMultipleImages && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white p-2 rounded-full shadow-lg transition-all"
                    aria-label="Previous image"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white p-2 rounded-full shadow-lg transition-all"
                    aria-label="Next image"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
                    {item.images.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`w-2 h-2 rounded-full transition-all ${
                          index === currentImageIndex ? 'bg-white w-8' : 'bg-white/60'
                        }`}
                        aria-label={`Go to image ${index + 1}`}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>
            {hasMultipleImages && (
              <div className="grid grid-cols-4 gap-2 mt-4">
                {item.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`aspect-video rounded-lg overflow-hidden border-2 transition-all ${
                      index === currentImageIndex ? 'border-gray-900' : 'border-transparent'
                    }`}
                  >
                    <img
                      src={image}
                      alt={`${item.title[language]} ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          <div>
            <div className="text-sm text-gray-500 mb-2">{item.category}</div>
            <h1 className="text-4xl font-bold mb-4">{item.title[language]}</h1>
            <p className="text-4xl font-bold text-gray-900 mb-6">{item.price}</p>
            <p className="text-gray-700 text-lg leading-relaxed mb-8">
              {item.description[language]}
            </p>

            <div className="bg-gray-50 rounded-xl p-6 mb-8">
              <h2 className="text-xl font-semibold mb-4">
                {language === 'tr' ? 'Ürün Bilgileri' :
                 language === 'en' ? 'Product Information' :
                 language === 'ar-sy' ? 'معلومات المنتج' :
                 language === 'ru' ? 'Информация о товаре' :
                 'Produktinformationen'}
              </h2>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">{t.itemDetail.category}:</span>
                  <span className="font-semibold">{item.category}</span>
                </div>
                {item.brand && (
                  <div className="flex justify-between">
                    <span className="text-gray-600">{t.itemDetail.brand}:</span>
                    <span className="font-semibold">{item.brand}</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span className="text-gray-600">{t.itemDetail.condition}:</span>
                  <span className="font-semibold">{item.condition}</span>
                </div>
              </div>
            </div>

            <div className="bg-gray-900 text-white rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <Phone className="w-6 h-6" />
                <h2 className="text-xl font-semibold">
                  {language === 'tr' ? 'İletişim' :
                   language === 'en' ? 'Contact' :
                   language === 'ar-sy' ? 'اتصال' :
                   language === 'ru' ? 'Контакт' :
                   'Kontakt'}
                </h2>
              </div>
              <p className="mb-4">{t.itemDetail.contact}</p>
              <a
                href="https://wa.me/905330000000"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-white text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                WhatsApp {language === 'tr' ? 'ile İletişime Geç' :
                         language === 'en' ? 'Contact via WhatsApp' :
                         language === 'ar-sy' ? 'اتصل عبر واتساب' :
                         language === 'ru' ? 'Связаться через WhatsApp' :
                         'über WhatsApp kontaktieren'}
              </a>
            </div>
          </div>
        </div>

        {relatedItems.length > 0 && (
          <section className="mt-16">
            <h2 className="text-3xl font-bold mb-8">{t.itemDetail.relatedItems}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedItems.map((relatedItem) => (
                <Link
                  key={relatedItem.id}
                  to={`/items/${relatedItem.slug}`}
                  onClick={() => {
                    setCurrentImageIndex(0);
                    window.scrollTo(0, 0);
                  }}
                  className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow group"
                >
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={relatedItem.images[0]}
                      alt={relatedItem.title[language]}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-gray-700 transition-colors">
                      {relatedItem.title[language]}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-2">
                      {relatedItem.description[language]}
                    </p>
                    <div className="flex justify-between items-center">
                      <span className="text-2xl font-bold text-gray-900">{relatedItem.price}</span>
                      <span className="text-gray-900 font-medium group-hover:underline">
                        {t.items.viewDetails} →
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
