import React, { Suspense, lazy } from 'react';

import * as TymioUI from './components/_DEPRECATED/index';

import { Route, Routes } from 'react-router-dom';
const Layout = lazy(() => import('./components/Layout/Layout.jsx'));
const UIDemo = lazy(() => import('./pages/UIDemo/UIDemo'));
const Main = lazy(() => import('./pages/Main/Main'));
const WhitePaper = lazy(() => import('./pages/WhitePaper/WhitePaper'));
const Terms = lazy(() => import('./pages/Terms/Terms'));
const Ambassadors = lazy(() => import('./pages/Ambassadors/Ambassadors'));

const App = () => {
  return (
    <>
      <TymioUI.Modal />
      <TymioUI.MessageDialog />
      <Suspense fallback={<></>}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Main />} />
            <Route path="/:elementId" element={<Main />} />
            <Route path="/whitepaper" element={<WhitePaper />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/ambassadors" element={<Ambassadors />} />

            <Route path="/ui" element={<UIDemo />} />
            <Route path="*" element={<Main />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
};

export default App;
