import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../i18n/translations';
import { useProducts } from '../context/ProductsContext';
import { useFavorites } from '../context/FavoritesContext';
import { useAuth } from '../context/AuthContext';
import FavoriteButton from '../components/FavoriteButton';
import { Heart, ArrowLeft } from 'lucide-react';

export default function Favorites() {
  const { language } = useLanguage();
  const t = translations[language];
  const { products } = useProducts();
  const { favorites } = useFavorites();
  const { user } = useAuth();
  const [loginPrompt, setLoginPrompt] = useState(false);

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center p-8">
          <Heart className="w-16 h-16 text-gray-200 mx-auto mb-4" />
          <h2 className="text-xl font-bold text-gray-700 mb-2">Favorileri görmek için giriş yapın</h2>
          <p className="text-gray-500 mb-6">Beğendiğiniz ürünleri kaydetmek için hesabınıza giriş yapın.</p>
          <Link to="/items" className="text-blue-600 underline">Ürünlere göz at</Link>
        </div>
      </div>
    );
  }

  const favoriteProducts = products.filter(p => favorites.includes(p.id));

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex items-center gap-4 mb-8">
          <Link to="/items" className="p-2 hover:bg-gray-100 rounded-lg transition-colors text-gray-600">
            <ArrowLeft className="w-5 h-5" />
          </Link>
          <div>
            <h1 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
              <Heart className="w-6 h-6 text-red-500 fill-red-500" />
              Favorilerim
            </h1>
            <p className="text-gray-500 text-sm mt-0.5">{favoriteProducts.length} ürün</p>
          </div>
        </div>

        {favoriteProducts.length === 0 ? (
          <div className="text-center py-20">
            <Heart className="w-16 h-16 text-gray-200 mx-auto mb-4" />
            <h2 className="text-xl font-semibold text-gray-500 mb-2">Henüz favori eklemediniz</h2>
            <p className="text-gray-400 mb-6">Ürünlerdeki kalp ikonuna tıklayarak favorilerinize ekleyebilirsiniz.</p>
            <Link to="/items" className="inline-flex items-center gap-2 bg-gray-900 text-white px-6 py-3 rounded-xl font-semibold hover:bg-gray-700 transition-colors">
              {t.items.title}
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {favoriteProducts.map(item => (
              <div key={item.id} className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow overflow-hidden group">
                <Link to={`/items/${item.slug}`}>
                  <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
                    <img
                      src={item.images[0]}
                      alt={item.title[language]}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-2 right-2">
                      <FavoriteButton itemId={item.id} onLoginRequired={() => setLoginPrompt(true)} />
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-gray-900 mb-1 line-clamp-1">{item.title[language]}</h3>
                    <p className="text-gray-500 text-sm line-clamp-2 mb-3">{item.description[language]}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-lg font-bold text-gray-900">{item.price}</span>
                      <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">{item.category}</span>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        )}
      </div>

      {loginPrompt && (
        <div className="fixed bottom-4 right-4 bg-gray-900 text-white rounded-2xl shadow-xl p-4 max-w-xs z-50 flex items-center gap-3">
          <Heart className="w-5 h-5 text-red-400 flex-shrink-0" />
          <p className="text-sm font-medium">Favorilere eklemek için giriş yapın</p>
          <button onClick={() => setLoginPrompt(false)} className="text-gray-400 hover:text-white ml-2">×</button>
        </div>
      )}
    </div>
  );
}