import { take, Subject, from, forkJoin } from 'rxjs';
import { GET } from '../api/fetch-api';

const DIRECTION = process.env.REACT_APP_WELCOME_PAGE_DIRECTION;

class WelcomePageService {
  initialState = {
    loading: false,
    error: null,
    current_WBTC_offer: null,
    current_ETH_offer: null,
  };

  state = this.initialState;
  state$ = new Subject();

  constructor() {
    this.apiUrl = process.env.REACT_APP_API_URL;
  }

  getData() {
    if (this.state.loading) {
      return;
    }

    this.state = {
      ...this.state,
      loading: true,
    };
    this.state$.next(this.state);

    const WBTCData$ = from(
      GET(`${this.apiUrl}/web/current_offer/${DIRECTION}`, {
        tokenSymbol: 'WBTC',
      })
    ).pipe(take(1));

    const ETHData$ = from(
      GET(`${this.apiUrl}/web/current_offer/${DIRECTION}`, {
        tokenSymbol: 'ETH',
      })
    ).pipe(take(1));

    forkJoin([WBTCData$, ETHData$]).subscribe({
      next: ([WBTCResult, ETHResult]) => {
        this.state = {
          ...this.state,
          error: null,
          loading: false,
          current_WBTC_offer: WBTCResult.data,
          current_ETH_offer: ETHResult.data,
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
