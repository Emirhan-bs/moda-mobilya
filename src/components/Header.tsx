import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../i18n/translations';
import LanguageSelector from './LanguageSelector';
import { Store } from 'lucide-react';

export default function Header() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <header className="bg-white shadow-sm sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-8">
            <Link to="/" className="flex items-center gap-2 text-xl font-bold text-gray-900 hover:text-gray-700 transition-colors">
              <Store className="w-6 h-6" />
              <span>Cadde Spot</span>
            </Link>
            <nav className="hidden md:flex items-center gap-6">
              <Link to="/about" className="text-gray-700 hover:text-gray-900 font-medium transition-colors">
                {t.nav.about}
              </Link>
              <Link to="/items" className="text-gray-700 hover:text-gray-900 font-medium transition-colors">
                {t.nav.items}
              </Link>
            </nav>
          </div>
          <LanguageSelector />
        </div>
      </div>
    </header>
  );
}
