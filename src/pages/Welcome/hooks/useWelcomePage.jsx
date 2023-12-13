import { useEffect, useState } from 'react';
import WelcomePageService from '../../../services/welcome-page.service';

const useWelcomePage = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [currentWBTCOffer, setCurrentWBTCOffer] = useState(null);
  const [currentETHOffer, setCurrentETHOffer] = useState(null);

  useEffect(() => {
    const currentOffer$ = WelcomePageService.state$.subscribe((state) => {
      setError(state.error);
      setLoading(state.loading);
      setCurrentWBTCOffer(state.current_WBTC_offer);
      setCurrentETHOffer(state.current_ETH_offer);
    });

    return () => {
      currentOffer$.unsubscribe();
    };
  }, []);

  return {
    loading,
    error,
    currentWBTCOffer,
    currentETHOffer,
  };
};

export default useWelcomePage;
