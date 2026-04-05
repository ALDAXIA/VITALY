import React, { createContext, useState, useEffect, ReactNode } from 'react';
import { Language, translations } from './translations';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => any;
}

export const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('vitaly-language');
      return (stored as Language) || 'es';
    }
    return 'es';
  });

  useEffect(() => {
    localStorage.setItem('vitaly-language', language);
    document.documentElement.lang = language;
  }, [language]);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
  };

  const getNestedValue = (obj: any, keys: string[]): any => {
    return keys.reduce((current, key) => current?.[key], obj);
  };

  const t = (key: string): any => {
    const keys = key.split('.');
    const value = getNestedValue(translations[language], keys);
    return value || key;
  };

  const value: LanguageContextType = {
    language,
    setLanguage,
    t,
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};
