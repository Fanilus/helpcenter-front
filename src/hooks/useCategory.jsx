import { useEffect, useState } from 'react';
import СategoryService from '../services/category.service';

const useCategory = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [category, setCategory] = useState([]);
  useEffect(() => {
    setLoading(true);

    const projects$ = СategoryService.state$.subscribe((state) => {
      setError(state.error);
      setCategory(state.сategory);
      setLoading(state.loading);
    });

    return () => {
      projects$.unsubscribe();
    };
  }, []);
  return {
    loading,
    error,
    category,
  };
};

export default useCategory;
