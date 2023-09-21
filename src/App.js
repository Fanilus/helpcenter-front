import React, { Suspense, lazy } from 'react';

import * as TymioUI from './components/_DEPRECATED/index';
// import { MainPage } from './pages';

import { Route, Routes } from 'react-router-dom';
// import WhitePaper from './pages/WhitePaper/WhitePaper';
const Layout = lazy(() => import('./components/Layout/Layout.jsx'));
const UIDemo = lazy(() => import('./pages/UIDemo/UIDemo'));

const App = () => {
  return (
    <>
      <TymioUI.Preloader />
      <TymioUI.Modal />
      <TymioUI.MessageDialog />
      <Suspense fallback={<TymioUI.Preloader />}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<UIDemo />} />
            {/* <Route path="/whitepaper" element={<WhitePaper />} />
            <Route path="/ui" element={<UIDemo />} /> */}
          </Route>
        </Routes>
      </Suspense>
    </>
  );
};

export default App;
