import { take, Subject, from } from 'rxjs';
import { GET } from '../api/fetch-api';

class FullArticleService {
  initialState = {
    loading: false,
    error: null,
    article: {},
  };

  state = this.initialState;
  state$ = new Subject();

  constructor() {
    this.apiUrl = process.env.REACT_APP_API_URL;
  }

  getData(id) {
    if (this.state.loading) {
      return;
    }

    this.state = {
      ...this.state,
      loading: true,
    };
    this.state$.next(this.state);
    const data$ = from(GET(`${this.apiUrl}/article_full/${id}`)).pipe(take(1));

    data$.subscribe({
      next: (result) => {
        this.state = {
          ...this.state,
          error: null,
          loading: false,
          article: result ? result : {},
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

const FullArticleServiceInstance = new FullArticleService();
export default FullArticleServiceInstance;
