import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';

const languageDetector = new LanguageDetector(null, {
  order: ['localStorage', 'navigator'],
  lookupLocalStorage: 'i18nextLng',
  load: 'languageOnly',
  convertDetectedLanguage: (lng) => lng.split('-')[0],
});

i18next.use(initReactI18next).use(languageDetector).use(Backend).init({
  debug: true,
  fallbackLng: 'en',
});
