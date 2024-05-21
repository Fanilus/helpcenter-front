import React, { Suspense, lazy } from 'react';

import * as TymioUI from './components';

import { Route, Routes } from 'react-router-dom';
const Layout = lazy(() => import('./components/Layout/Layout.jsx'));
const Main = lazy(() => import('./pages/Main/Main.jsx'));
const Article = lazy(() => import('./pages/Article/Article.jsx'));

const App = () => {
  return (
    <>
      <TymioUI.Modal />
      <TymioUI.MessageDialog />
      <Suspense fallback={<></>}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Main />} />
            <Route path="*" element={<Main />} />
            <Route path="article/:ArticleId" element={<Article />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
};

export default App;
