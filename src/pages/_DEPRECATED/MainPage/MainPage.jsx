import React, { useState } from 'react';
import { HowItWorks, FAQ, Introduce, Statistics } from './components';

const MainPage = () => {
  const [ref, setRef] = useState(null);
  return (
    <>
      <Introduce innerRef={ref} />
      <Statistics />
      <HowItWorks setRef={setRef} />
      <FAQ />
    </>
  );
};

export default MainPage;
