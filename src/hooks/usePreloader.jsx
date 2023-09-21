import { useEffect, useState } from 'react';
import { PreloaderService } from '../services';

const usePreloader = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const preloader$ = PreloaderService.state$.subscribe((state) => {
      setLoaded(state.loaded);
    });

    return () => {
      preloader$.unsubscribe();
    };
  }, []);

  return {
    loaded,
  };
};

export default usePreloader;
