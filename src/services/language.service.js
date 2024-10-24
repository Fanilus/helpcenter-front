import { BehaviorSubject } from 'rxjs';

class LanguageService {
  initialState = {
    language: 'en',
  };

  state$ = new BehaviorSubject(this.initialState);

  setLanguage(language) {
    this.state$.next({ language });
  }

  getLanguage() {
    return this.state$.getValue().language;
  }

  getLanguageFromUrl() {
    const pathParts = window.location.pathname.split('/');
    return pathParts[1] || this.initialState.language;
  }

  initLanguage() {
    const languageFromUrl = this.getLanguageFromUrl();
    this.setLanguage(languageFromUrl);
  }
}

const LanguageServiceInstance = new LanguageService();
export default LanguageServiceInstance;
