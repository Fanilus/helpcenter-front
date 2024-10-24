import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import LanguageServiceInstance from '../../services/language.service';

import * as Styled from './styled';
import Selector from './components/Selector';

const languages = {
  en: { nativeName: 'ENGLISH' },
  ru: { nativeName: 'RUSSIAN' },
  es: { nativeName: 'español' },
  fr: { nativeName: 'Français' },
};

const LanguageSwitch = () => {
  const { i18n } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();
  const [activeLanguage, setActiveLanguage] = useState(
    LanguageServiceInstance.getLanguage()
  );

  useEffect(() => {
    const languageFromUrl = LanguageServiceInstance.getLanguageFromUrl();
    if (languageFromUrl && Object.keys(languages).includes(languageFromUrl)) {
      setActiveLanguage(languageFromUrl);
      i18n.changeLanguage(languageFromUrl);
      LanguageServiceInstance.setLanguage(languageFromUrl);
    }
  }, [location, i18n]);

  const handleLanguageChange = (language) => {
    setActiveLanguage(language);
    i18n.changeLanguage(language);
    LanguageServiceInstance.setLanguage(language);

    const pathParts = location.pathname.split('/');
    if (Object.keys(languages).includes(pathParts[1])) {
      pathParts[1] = language;
    } else {
      pathParts.unshift(language);
    }

    const newPath = pathParts.join('/');
    navigate(newPath);
  };

  return (
    <Styled.LanguageSwitch>
      <Selector
        options={languages}
        placeholder={'Select a language'}
        valueSelected={languages[activeLanguage].nativeName}
        onSelectAction={handleLanguageChange}
      />
    </Styled.LanguageSwitch>
  );
};

export default LanguageSwitch;
