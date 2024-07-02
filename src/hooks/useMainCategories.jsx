import { useEffect, useState } from 'react';
import MainСategoryService from '../services/main-category.services';

const useMainCategories = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [mainCategories, setMainCategories] = useState([]);

  useEffect(() => {
    setLoading(true);

    const projects$ = MainСategoryService.state$.subscribe((state) => {
      setError(state.error);
      setMainCategories(state.сategory);
      setLoading(state.loading);
    });

    return () => {
      projects$.unsubscribe();
    };
  }, []);

  return {
    loading,
    error,
    mainCategories,
  };
};

export default useMainCategories;
