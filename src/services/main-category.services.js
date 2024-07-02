import { take, Subject, from } from 'rxjs';
import { GET } from '../api/fetch-api';
import { Categories } from '../pages/Categories/styled';

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

  getData(parentId = 0) {
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
