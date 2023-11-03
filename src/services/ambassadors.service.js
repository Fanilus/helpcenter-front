import { Subject, from, take } from 'rxjs';
import { POST } from '../api/fetch-api';

class AmbassadorsService {
  initialState = {
    loading: false,
    success: false,
    error: null,
  };

  state = this.initialState;
  state$ = new Subject();

  constructor() {
    this.apiUrl = process.env.REACT_APP_API_URL;
  }

  async postOrder(body) {
    if (this.state.loading) {
      return;
    }

    this.state = {
      ...this.state,
      loading: true,
    };
    this.state$.next(this.state);

    const data$ = from(POST(`${this.apiUrl}/ambassador`, body)).pipe(take(1));

    data$.subscribe({
      next: (result) => {
        this.state = {
          ...this.state,
          error: null,
          loading: false,
          success: result.success,
        };

        this.state$.next(this.state);
      },
      error: (error) => {
        this.state = {
          ...this.state,
          loading: false,
          error: error.message,
          success: false,
        };
        this.state$.next(this.state);
      },
    });
  }
}

const AmbassadorsServiceInstance = new AmbassadorsService();
export default AmbassadorsServiceInstance;
