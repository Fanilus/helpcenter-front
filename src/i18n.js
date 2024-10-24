import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';
import LanguageServiceInstance from './services/language.service';

LanguageServiceInstance.initLanguage();

i18next.use(initReactI18next).use(Backend).init({
  debug: true,
  fallbackLng: 'en',
  lng: LanguageServiceInstance.getLanguage(),
});

export default i18next;
