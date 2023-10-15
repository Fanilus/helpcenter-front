import React, { useEffect, useRef } from 'react';

import Home from './components/Home/Home';
import HowItWork from './components/HowItWork/HowItWork';
import UseCases from './components/UseCases/UseCases';
import Safety from './components/Safety/Safety';
import FAQ from './components/FAQ/FAQ';
import { useParams } from 'react-router-dom';

const Main = () => {
  const { elementId } = useParams();
  const home = useRef();
  const how_it_work = useRef();
  const use_cases = useRef();
  const safety = useRef();
  const faq = useRef();

  const ids = {
    home,
    how_it_work,
    use_cases,
    safety,
    faq,
  };

  useEffect(() => {
    if (elementId && ids[elementId]) {
      window.scrollTo(0, ids[elementId].current.offsetTop);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [elementId]);

  return (
    <>
      <div ref={home}>
        <Home />
      </div>
      <div ref={how_it_work}>
        <HowItWork />
      </div>
      <div ref={use_cases}>
        <UseCases />
      </div>
      <div ref={safety}>
        <Safety />
      </div>
      <div ref={faq}>
        <FAQ />
      </div>
    </>
  );
};

export default Main;
