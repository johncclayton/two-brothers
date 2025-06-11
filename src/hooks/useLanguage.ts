import { useState, useEffect } from 'react';
import { translations } from '../data/translations';

export type Language = 'en' | 'de';

export const useLanguage = () => {
  const [language, setLanguage] = useState<Language>('en');

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') as Language;
    if (savedLanguage && (savedLanguage === 'en' || savedLanguage === 'de')) {
      setLanguage(savedLanguage);
    }
  }, []);

  const changeLanguage = (newLanguage: Language) => {
    setLanguage(newLanguage);
    localStorage.setItem('language', newLanguage);
    window.location.reload(); // Add this line to refresh the page
  };

  const t = translations[language];

  return { language, changeLanguage, t };
};