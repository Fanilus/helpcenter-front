import { take, Subject, from } from 'rxjs';
import { GET } from '../api/fetch-api';

class SearchService {
  initialState = {
    loading: false,
    error: null,
    foundArticlesList: [],
  };

  state = this.initialState;
  state$ = new Subject();

  constructor() {
    this.apiUrl = process.env.REACT_APP_API_URL;
  }

  getData(querry) {
    if (this.state.loading) {
      return;
    }

    this.state = {
      ...this.state,
      loading: true,
    };
    this.state$.next(this.state);
    const data$ = from(
      GET(`${this.apiUrl}/search`, {
        q: querry,
      })
    ).pipe(take(1));

    data$.subscribe({
      next: (result) => {
        this.state = {
          ...this.state,
          error: null,
          loading: false,
          foundArticlesList: result ? result[0].data : [],
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

const SearchServiceInstance = new SearchService();
export default SearchServiceInstance;
