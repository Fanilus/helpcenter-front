import { useEffect, useState } from 'react';
import WelcomePageService from '../../../services/welcome-page.service';

const useWelcomePage = () => {
  const [loading, setLoading] = useState(false);
  const [currentOffer, setCurrentOffer] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const currentOffer$ = WelcomePageService.state$.subscribe((state) => {
      setError(state.error);
      setLoading(state.loading);
      setCurrentOffer(state.currentOffer);
    });

    return () => {
      currentOffer$.unsubscribe();
    };
  }, []);

  return {
    loading,
    error,
    currentOffer,
  };
};

export default useWelcomePage;
