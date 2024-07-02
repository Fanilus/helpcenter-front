import { Subject } from 'rxjs';

class LanguageService {
  initialState = {
    language: localStorage.getItem('i18nextLng') || 'en',
  };

  state = this.initialState;
  state$ = new Subject();

  setLanguage(language) {
    this.state = {
      language,
    };
    localStorage.setItem('i18nextLng', language);
    this.state$.next(this.state);
  }
  getLanguage() {
    localStorage.setItem('i18nextLng', this.state.language);
    this.state$.next(this.state);
  }
}

const LanguageServiceInstance = new LanguageService();
export default LanguageServiceInstance;
