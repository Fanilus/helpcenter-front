import { useEffect, useState } from 'react';
import LanguageServiceInstance from '../services/language.service';
import { useTranslation } from 'react-i18next';

const useLanguage = () => {
  const { i18n } = useTranslation();
  const [language, setLanguage] = useState(i18n.language);

  useEffect(() => {
    const language$ = LanguageServiceInstance.state$.subscribe((state) => {
      setLanguage(state.language);
    });

    return () => {
      language$.unsubscribe();
    };
  }, []);

  return {
    language,
  };
};

export default useLanguage;
