import React, { Suspense, lazy } from 'react';

import * as TymioUI from './components/_DEPRECATED/index';

import { Route, Routes } from 'react-router-dom';
const Layout = lazy(() => import('./components/Layout/Layout.jsx'));
const UIDemo = lazy(() => import('./pages/UIDemo/UIDemo'));
const Main = lazy(() => import('./pages/Main/Main'));
const WhitePaper = lazy(() => import('./pages/WhitePaper/WhitePaper'));

const App = () => {
  return (
    <>
      <TymioUI.Preloader />
      <TymioUI.Modal />
      <TymioUI.MessageDialog />
      <Suspense fallback={<></>}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Main />} />
            <Route path="/ui" element={<UIDemo />} />
            <Route path="/whitepaper" element={<WhitePaper />} />
            <Route path="*" element={<Main />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
};

export default App;
