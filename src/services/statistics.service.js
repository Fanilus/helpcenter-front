import { take, Subject, from, map } from 'rxjs';
import { GET } from '../api/fetch-api';

class StatisticsService {
  initialState = {
    loading: false,
    error: null,
    statistics: null,
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

    const data$ = from(GET(`${this.apiUrl}/web/statistics`)).pipe(
      take(1),
      map((result) => {
        const {
          data: {
            statistics: {
              totalTradedVolume,
              totalValueLocked,
              totalOrders,
              users,
              totalPremiumGenerated,
              averageAPY,
            },
          },
        } = result;
        result.data.statistics.formatted.totalTradedVolume =
          totalTradedVolume > 999
            ? Math.round((totalTradedVolume / 1000) * 10) / 10
            : Math.round(totalTradedVolume * 100) / 100;

        result.data.statistics.formatted.totalTradedVolume =
          totalTradedVolume > 999999
            ? Math.round((totalTradedVolume / 1000000) * 10) / 10
            : result.data.statistics.formatted.totalTradedVolume;

        result.data.statistics.formatted.totalValueLocked =
          totalValueLocked > 999
            ? Math.round((totalValueLocked / 1000) * 10) / 10
            : Math.round(totalValueLocked * 100) / 100;

        result.data.statistics.formatted.users =
          users > 999 ? Math.round((users / 1000) * 10) / 10 : users;

        result.data.statistics.formatted.totalOrders =
          totalOrders > 999
            ? Math.round((totalOrders / 1000) * 10) / 10
            : totalOrders;

        result.data.statistics.formatted.totalPremiumGenerated =
          totalPremiumGenerated > 999
            ? Math.round((totalPremiumGenerated / 1000) * 10) / 10
            : Math.round(totalPremiumGenerated * 100) / 100;

        result.data.statistics.formatted.averageAPY =
          Math.round(averageAPY * 100) / 100;
        return result;
      })
    );

    data$.subscribe({
      next: (result) => {
        console.log(result);
        this.state = {
          ...this.state,
          error: null,
          loading: false,
          statistics: result.data ? result.data.statistics : null,
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

export default new StatisticsService();
