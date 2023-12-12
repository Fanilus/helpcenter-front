import { take, Subject, from } from 'rxjs';
import { GET } from '../api/fetch-api';

const DIRECTION = process.env.REACT_APP_WELCOME_PAGE_DIRECTION;

class WelcomePageService {
  initialState = {
    loading: false,
    error: null,
    current_offer: null,
  };

  state = this.initialState;
  state$ = new Subject();

  constructor() {
    this.apiUrl = process.env.REACT_APP_API_URL;
  }

  getData({ tokenSymbol }) {
    if (this.state.loading) {
      return;
    }

    this.state = {
      ...this.state,
      loading: true,
    };
    this.state$.next(this.state);

    const data$ = from(
      GET(`${this.apiUrl}/web/current_offer/:${DIRECTION}`, { tokenSymbol })
    ).pipe(take(1));

    data$.subscribe({
      next: (result) => {
        this.state = {
          ...this.state,
          error: null,
          loading: false,
          current_offer: result.data ? result.data.statistics : null,
        };

        this.state$.next(this.state);
      },
      error: (error) => {
        this.state = {
          ...this.state,
          loading: false,
          error: error.message,
        };
        this.state$.next(this.state);
      },
    });
  }
}

const WelcomePageServiceInstance = new WelcomePageService();
export default WelcomePageServiceInstance;
