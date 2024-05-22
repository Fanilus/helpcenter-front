import { take, Subject, from } from 'rxjs';
import { GET } from '../api/fetch-api';
import { Categories } from '../pages/Categories/styled';

class СategoryService {
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

  getData(parentId) {
    if (this.state.loading) {
      return;
    }

    this.state = {
      ...this.state,
      loading: true,
    };
    this.state$.next(this.state);
    const data$ = from(
      GET(`${this.apiUrl}/article_main`, {
        parentId,
      })
    ).pipe(take(1));

    data$.subscribe({
      next: (result) => {
        this.state = {
          ...this.state,
          error: null,
          loading: false,
          сategory: result.data ? result.data.rows[0] : [],
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

const СategoryServiceInstance = new СategoryService();
export default СategoryServiceInstance;
