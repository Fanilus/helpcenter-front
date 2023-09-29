import React from 'react';

import * as Styled from './styled';

import Home from './components/Home/Home';
import HowItWork from './components/HowItWork/HowItWork';
import UseCases from './components/UseCases/UseCases';

const Main = () => {
  return (
    <Styled.Main>
      <Home />
      <HowItWork />
      <UseCases />
    </Styled.Main>
  );
};

export default Main;
