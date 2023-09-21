import { Subject } from 'rxjs';

class PreloaderService {
  initialState = {
    loaded: false,
  };

  state$ = new Subject(this.initialState);

  close() {
    this.state$.next({
      ...this.initialState,
      loaded: true,
    });
  }
}

export default new PreloaderService();
