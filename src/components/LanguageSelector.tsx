import { useLanguage } from '../context/LanguageContext';
import { Language } from '../types';
import { Globe } from 'lucide-react';

const languages: { code: Language; label: string }[] = [
  { code: 'tr', label: 'TR' },
  { code: 'en', label: 'EN' },
  { code: 'ar-sy', label: 'عربي' },
  { code: 'ru', label: 'RU' },
  { code: 'de', label: 'DE' },
];

export default function LanguageSelector() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="relative group">
      <button className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors">
        <Globe className="w-5 h-5" />
        <span className="font-medium">{languages.find(l => l.code === language)?.label}</span>
      </button>
      <div className="absolute right-0 mt-2 w-32 bg-white rounded-lg shadow-lg border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
        {languages.map((lang) => (
          <button
            key={lang.code}
            onClick={() => setLanguage(lang.code)}
            className={`w-full px-4 py-2 text-left hover:bg-gray-50 first:rounded-t-lg last:rounded-b-lg transition-colors ${
              language === lang.code ? 'bg-gray-100 font-semibold' : ''
            }`}
          >
            {lang.label}
          </button>
        ))}
      </div>
    </div>
  );
}
