import React, { createContext, useContext, useState, useEffect } from 'react';
import { translations } from '../utils/translations';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  // Theme state: default to system preference or local storage
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) return savedTheme;
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    return systemPrefersDark ? 'dark' : 'light';
  });

  // Language state: default to local storage or English
  const [language, setLanguage] = useState(() => {
    const savedLang = localStorage.getItem('language');
    return savedLang || 'en';
  });

  // Apply theme side effects
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  // Apply language side effects (RTL vs LTR) and update dynamic SEO / Meta tags
  useEffect(() => {
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = language;
    localStorage.setItem('language', language);

    // Update Title & Description
    const titleText = language === 'en' 
      ? 'Nada Elhawary | Junior Front-End Developer Portfolio' 
      : 'ندى الهواري | معرض أعمال مطور ويب واجهة أمامية';
    const descText = language === 'en'
      ? 'Portfolio of Nada Elhawary, Junior Front-End Developer specializing in React, Angular, Node.js, Express, MongoDB, and modern SaaS UI/UX architectures.'
      : 'معرض أعمال ندى الهواري، مطور ويب واجهة أمامية متخصص في تقنيات (React, Angular, Next.JS, TypeScript) وبنى واجهات المستخدم الحديثة.';

    document.title = titleText;

    // Helper to set or create meta tags
    const setMeta = (nameAttr, attrValue, contentValue) => {
      let element = document.querySelector(`meta[${nameAttr}="${attrValue}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(nameAttr, attrValue);
        document.head.appendChild(element);
      }
      element.setAttribute('content', contentValue);
    };

    setMeta('name', 'description', descText);
    setMeta('property', 'og:title', titleText);
    setMeta('property', 'og:description', descText);
    setMeta('property', 'og:locale', language === 'en' ? 'en_US' : 'ar_AR');
    setMeta('property', 'og:type', 'website');
    setMeta('property', 'og:url', window.location.origin);
    setMeta('property', 'og:image', `${window.location.origin}/me.JPG`);
    setMeta('name', 'twitter:card', 'summary_large_image');
    setMeta('name', 'twitter:title', titleText);
    setMeta('name', 'twitter:description', descText);
    setMeta('name', 'twitter:image', `${window.location.origin}/me.JPG`);

    // Schema.org Structured Data
    let schemaScript = document.getElementById('json-ld-schema');
    if (!schemaScript) {
      schemaScript = document.createElement('script');
      schemaScript.id = 'json-ld-schema';
      schemaScript.type = 'application/ld+json';
      document.head.appendChild(schemaScript);
    }

    const schemaData = {
      "@context": "https://schema.org",
      "@type": "Person",
      "name": language === 'en' ? 'Nada Elhawary' : 'ندى الهواري',
      "jobTitle": language === 'en' ? 'Junior Front-End Developer' : 'مطور ويب واجهات أمامية',
      "url": window.location.origin,
      "sameAs": [
        "https://github.com/Nada-Elhawary",
        "https://linkedin.com/in/nada-elhawary"
      ],
      "description": descText
    };

    schemaScript.textContent = JSON.stringify(schemaData);
  }, [language]);


  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'));
  };

  const toggleLanguage = () => {
    setLanguage((prevLang) => (prevLang === 'en' ? 'ar' : 'en'));
  };

  const t = (keyPath) => {
    const keys = keyPath.split('.');
    let value = translations[language];
    for (const key of keys) {
      if (value[key] === undefined) {
        return keyPath; // fallback to key path if translation missing
      }
      value = value[key];
    }
    return value;
  };

  return (
    <AppContext.Provider
      value={{
        theme,
        language,
        toggleTheme,
        toggleLanguage,
        t,
        isRtl: language === 'ar'
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};
