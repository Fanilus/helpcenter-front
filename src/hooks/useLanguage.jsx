import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const useLanguage = () => {
  const { i18n } = useTranslation();
  const location = useLocation();
  const [language, setLanguage] = useState(i18n.language);

  useEffect(() => {
    const pathParts = location.pathname.split('/');
    const languageFromPath = pathParts[1];
    if (languageFromPath && i18n.languages.includes(languageFromPath)) {
      setLanguage(languageFromPath);
      i18n.changeLanguage(languageFromPath);
    }
  }, [location, i18n]);

  return {
    language,
  };
};

export default useLanguage;
