import { useEffect, useState } from 'react';
import StatisticsService from '../../../../services/statistics.service';

const useStatistics = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [statistics, setStatistics] = useState(null);

  useEffect(() => {
    setLoading(true);
    StatisticsService.getData();

    const order$ = StatisticsService.state$.subscribe((state) => {
      setError(state.error);
      setStatistics(state.statistics);
      setLoading(state.loading);
    });

    return () => {
      order$.unsubscribe();
    };
  }, []);

  return {
    loading,
    error,
    statistics,
  };
};

export default useStatistics;
