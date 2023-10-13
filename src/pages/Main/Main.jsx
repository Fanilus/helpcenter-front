import React from 'react';

import Home from './components/Home/Home';
import HowItWork from './components/HowItWork/HowItWork';
import UseCases from './components/UseCases/UseCases';
import Safety from './components/Safety/Safety';
import FAQ from './components/FAQ/FAQ';

const Main = () => {
  return (
    <>
      <Home />
      <HowItWork />
      <UseCases />
      <Safety />
      <FAQ />
    </>
  );
};

export default Main;
