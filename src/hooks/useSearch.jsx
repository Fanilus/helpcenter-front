import { useEffect, useState } from 'react';
import SearchService from '../services/search.service';

const useSearch = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [foundArticlesList, setFoundArticlesList] = useState({});

  useEffect(() => {
    setLoading(true);

    const projects$ = SearchService.state$.subscribe((state) => {
      setError(state.error);
      setFoundArticlesList(state.foundArticlesList);
      setLoading(state.loading);
    });

    return () => {
      projects$.unsubscribe();
    };
  }, []);

  return {
    loading,
    error,
    foundArticlesList,
  };
};

export default useSearch;
