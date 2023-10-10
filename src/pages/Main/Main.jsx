import React from 'react';

import * as Styled from './styled';

import Home from './components/Home/Home';
import HowItWork from './components/HowItWork/HowItWork';
import UseCases from './components/UseCases/UseCases';
import Safety from './components/Safety/Safety';
import FAQ from './components/FAQ/FAQ';

const Main = () => {
  return (
    <Styled.Main>
      <Home />
      <HowItWork />
      <UseCases />
      <Safety />
      <FAQ />
    </Styled.Main>
  );
};

export default Main;
