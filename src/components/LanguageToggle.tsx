import React from 'react';
import { Globe } from 'lucide-react';
import { useLanguage, Language } from '../hooks/useLanguage';

const LanguageToggle: React.FC = () => {
  const { language, changeLanguage } = useLanguage();

  const languages: { code: Language; label: string; flag: string }[] = [
    { code: 'en', label: 'English', flag: '🇺🇸' },
    { code: 'de', label: 'Deutsch', flag: '🇩🇪' }
  ];

  return (
    <div className="relative group">
      <button className="flex items-center gap-2 px-3 py-2 text-gray-700 hover:text-blue-600 transition-colors duration-200">
        <Globe size={20} />
        <span className="hidden sm:inline">
          {languages.find(l => l.code === language)?.flag}
        </span>
      </button>
      
      <div className="absolute right-0 top-full mt-2 w-40 bg-white rounded-lg shadow-lg border opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
        {languages.map((lang) => (
          <button
            key={lang.code}
            onClick={() => changeLanguage(lang.code)}
            className={`w-full flex items-center gap-3 px-4 py-3 text-left hover:bg-gray-50 transition-colors duration-200 first:rounded-t-lg last:rounded-b-lg ${
              language === lang.code ? 'bg-blue-50 text-blue-600' : 'text-gray-700'
            }`}
          >
            <span className="text-lg">{lang.flag}</span>
            <span className="font-medium">{lang.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default LanguageToggle;