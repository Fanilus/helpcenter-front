import { useEffect, useState } from 'react';
import FullArticleService from '../services/full-article.service';

const useFullArticle = (id) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [article, setArticle] = useState({});

  useEffect(() => {
    setLoading(true);
    FullArticleService.getData(id);

    const projects$ = FullArticleService.state$.subscribe((state) => {
      setError(state.error);
      setArticle(state.article);
      setLoading(state.loading);
    });

    return () => {
      projects$.unsubscribe();
    };
  }, []);

  return {
    loading,
    error,
    article,
  };
};

export default useFullArticle;
