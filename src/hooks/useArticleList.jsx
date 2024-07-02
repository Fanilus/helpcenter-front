import { useEffect, useState } from 'react';
import MainСategoryService from '../services/main-category.services';

const useArticleList = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [articleList, setArticleList] = useState([]);

  useEffect(() => {
    setLoading(true);

    const projects$ = MainСategoryService.state$.subscribe((state) => {
      setError(state.error);
      setArticleList(state.сategory[0]);
      setLoading(state.loading);
    });

    return () => {
      projects$.unsubscribe();
    };
  }, []);

  return {
    loading,
    error,
    articleList,
  };
};

export default useArticleList;
