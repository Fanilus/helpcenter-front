import React, { Suspense, lazy } from 'react';

import * as TymioUI from './components/_DEPRECATED/index';

import { Route, Routes } from 'react-router-dom';
const Layout = lazy(() => import('./components/Layout/Layout.jsx'));
const Main = lazy(() => import('./pages/Main/Main'));
const WhitePaper = lazy(() => import('./pages/WhitePaper/WhitePaper'));
const Terms = lazy(() => import('./pages/Terms/Terms'));
const Ambassadors = lazy(() => import('./pages/Ambassadors/Ambassadors'));
const Club = lazy(() => import('./pages/Club/Club'));
const Welcome = lazy(() => import('./pages/Welcome/Welcome'));
const Blog = lazy(() => import('./pages/Blog/Blog'));

const WELCOME_PAGE = process.env.REACT_APP_WELCOME_PAGE;

const App = () => {
  return (
    <>
      <TymioUI.Modal />
      <TymioUI.MessageDialog />
      <Suspense fallback={<></>}>
        <Routes>
          <Route path="/" element={<Layout />}>
            {WELCOME_PAGE === 'true' ? (
              <>
                <Route path="/" element={<Welcome />} />
                <Route path="*" element={<Welcome />} />
              </>
            ) : (
              <>
                <Route path="/" element={<Main />} />
                <Route path="/:elementId" element={<Main />} />
                <Route path="/whitepaper" element={<WhitePaper />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/terms" element={<Terms />} />
                <Route path="/ambassadors" element={<Ambassadors />} />
                <Route path="/club" element={<Club />} />
                <Route path="*" element={<Main />} />
              </>
            )}
          </Route>
        </Routes>
      </Suspense>
    </>
  );
};

export default App;
