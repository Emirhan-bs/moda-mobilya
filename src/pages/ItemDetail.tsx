import { useState, useMemo, useEffect } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../i18n/translations";
import { items } from "../data/itemsData";
import { ChevronLeft, ChevronRight, Phone } from "lucide-react";

export default function ItemDetail() {
  const { slug } = useParams<{ slug: string }>();
  const { language } = useLanguage();
  const t = translations[language];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);

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
    setCurrentImageIndex(
      (prev) => (prev - 1 + item.images.length) % item.images.length
    );
  };

  // ESC + yön tuşları
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isZoomed) return;
      if (e.key === "Escape") setIsZoomed(false);
      if (e.key === "ArrowRight" && hasMultipleImages) nextImage();
      if (e.key === "ArrowLeft" && hasMultipleImages) prevImage();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isZoomed, hasMultipleImages]);

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Link
          to="/items"
          className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-8 transition-colors"
        >
          <ChevronLeft className="w-5 h-5" />
          {language === "tr"
            ? "Ürünlere Dön"
            : language === "en"
            ? "Back to Items"
            : language === "ar-sy"
            ? "العودة إلى المنتجات"
            : language === "ru"
            ? "Вернуться к товарам"
            : "Zurück zu Artikeln"}
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* ✅ GÖRSEL ALANI */}
          <div className="flex flex-col items-center">
            <div className="relative bg-gray-100 rounded-xl overflow-hidden w-full max-w-[600px] h-[300px] sm:h-[400px] md:h-[450px] lg:h-[500px]">
              <img
                src={item.images[currentImageIndex]}
                alt={item.title[language]}
                className="w-full h-full object-contain sm:object-cover cursor-zoom-in transition-transform duration-300 hover:scale-105"
                onClick={() => setIsZoomed(true)}
              />

              {hasMultipleImages && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-2 rounded-full shadow-lg transition-all"
                    aria-label="Previous image"
                  >
                    <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-2 rounded-full shadow-lg transition-all"
                    aria-label="Next image"
                  >
                    <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
                  </button>

                  {/* Alt göstergeler */}
                  <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
                    {item.images.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`w-2 h-2 rounded-full transition-all ${
                          index === currentImageIndex
                            ? "bg-white w-8"
                            : "bg-white/60"
                        }`}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>

            {/* Küçük önizleme resimleri */}
            {hasMultipleImages && (
              <div className="grid grid-cols-4 gap-2 mt-4 w-full max-w-[600px]">
                {item.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`aspect-square rounded-lg overflow-hidden border-2 transition-all ${
                      index === currentImageIndex
                        ? "border-gray-900"
                        : "border-transparent"
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

          {/* ÜRÜN BİLGİLERİ */}
          <div>
            <div className="text-sm text-gray-500 mb-2">{item.category}</div>
            <h1 className="text-3xl sm:text-4xl font-bold mb-4">
              {item.title[language]}
            </h1>
            <p className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              {item.price}
            </p>
            <p className="text-gray-700 text-lg leading-relaxed mb-8">
              {item.description[language]}
            </p>

            <div className="bg-gray-50 rounded-xl p-6 mb-8">
              <h2 className="text-xl font-semibold mb-4">
                {language === "tr"
                  ? "Ürün Bilgileri"
                  : language === "en"
                  ? "Product Information"
                  : language === "ar-sy"
                  ? "معلومات المنتج"
                  : language === "ru"
                  ? "Информация о товаре"
                  : "Produktinformationen"}
              </h2>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">
                    {t.itemDetail.category}:
                  </span>
                  <span className="font-semibold">{item.category}</span>
                </div>
                {item.brand && (
                  <div className="flex justify-between">
                    <span className="text-gray-600">{t.itemDetail.brand}:</span>
                    <span className="font-semibold">{item.brand}</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span className="text-gray-600">
                    {t.itemDetail.condition}:
                  </span>
                  <span className="font-semibold">{item.condition}</span>
                </div>
              </div>
            </div>

            <div className="bg-gray-900 text-white rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <Phone className="w-6 h-6" />
                <h2 className="text-xl font-semibold">
                  {language === "tr"
                    ? "İletişim"
                    : language === "en"
                    ? "Contact"
                    : language === "ar-sy"
                    ? "اتصال"
                    : language === "ru"
                    ? "Контакт"
                    : "Kontakt"}
                </h2>
              </div>
              <a
                href="https://wa.me/905375545742"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-white text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                WhatsApp{" "}
                {language === "tr"
                  ? "ile İletişime Geç"
                  : language === "en"
                  ? "Contact via WhatsApp"
                  : language === "ar-sy"
                  ? "اتصل عبر واتساب"
                  : language === "ru"
                  ? "Связаться через WhatsApp"
                  : "über WhatsApp kontaktieren"}
              </a>
            </div>
          </div>
        </div>

        {/* Benzer Ürünler */}
        {relatedItems.length > 0 && (
          <section className="mt-16">
            <h2 className="text-3xl font-bold mb-8">
              {t.itemDetail.relatedItems}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
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
                  <div className="aspect-square sm:aspect-video overflow-hidden">
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
                      <span className="text-2xl font-bold text-gray-900">
                        {relatedItem.price}
                      </span>
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

      {/* 🔍 Büyütülmüş Resim Modal */}
      {isZoomed && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 cursor-zoom-out select-none"
          onClick={() => setIsZoomed(false)}
        >
          <img
            src={item.images[currentImageIndex]}
            alt={item.title[language]}
            className="max-w-[95%] max-h-[85%] rounded-lg shadow-2xl object-contain"
          />

          {hasMultipleImages && (
            <>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  prevImage();
                }}
                className="absolute left-4 sm:left-6 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-3 rounded-full shadow-lg transition-all"
              >
                <ChevronLeft className="w-6 h-6 text-gray-900" />
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  nextImage();
                }}
                className="absolute right-4 sm:right-6 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-3 rounded-full shadow-lg transition-all"
              >
                <ChevronRight className="w-6 h-6 text-gray-900" />
              </button>
            </>
          )}
        </div>
      )}
    </div>
  );
}
