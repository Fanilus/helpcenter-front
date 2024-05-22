import { take, Subject, from } from 'rxjs';
import { GET } from '../api/fetch-api';

class ArticleListService {
  initialState = {
    loading: false,
    error: null,
    articleList: [],
  };

  state = this.initialState;
  state$ = new Subject();

  constructor() {
    this.apiUrl = process.env.REACT_APP_API_URL;
  }

  getData(categoryId) {
    if (this.state.loading) {
      return;
    }

    this.state = {
      ...this.state,
      loading: true,
    };
    this.state$.next(this.state);
    const data$ = from(
      GET(`${this.apiUrl}/article_list`, {
        categoryId,
        _start: 0,
        _end: 9999,
      })
    ).pipe(take(1));

    data$.subscribe({
      next: (result) => {
        this.state = {
          ...this.state,
          error: null,
          loading: false,
          articleList: result ? result.rows : [],
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

const ArticleListServiceInstance = new ArticleListService();
export default ArticleListServiceInstance;
