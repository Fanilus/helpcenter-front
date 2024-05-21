import { take, Subject, from } from 'rxjs';
import { GET } from '../api/fetch-api';

class MainСategoryService {
  initialState = {
    loading: false,
    error: null,
    сategory: [],
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
    const data$ = from(GET(`${this.apiUrl}/article_main`)).pipe(take(1));

    data$.subscribe({
      next: (result) => {
        // console.log(result);
        this.state = {
          ...this.state,
          error: null,
          loading: false,
          сategory: result.data ? result.data.rows : [],
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

const MainСategoryServiceInstance = new MainСategoryService();
export default MainСategoryServiceInstance;
