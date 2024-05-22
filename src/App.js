import React, { Suspense, lazy } from 'react';

import * as TymioUI from './components';

import { Route, Routes } from 'react-router-dom';
const Layout = lazy(() => import('./components/Layout/Layout.jsx'));
const Main = lazy(() => import('./pages/Main/Main.jsx'));
const Article = lazy(() => import('./pages/Article/Article.jsx'));
const Categories = lazy(() => import('./pages/Categories/Categories.jsx'));
const Sections = lazy(() => import('./pages/Sections/Sections.jsx'));

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
            <Route path="article/:articleId" element={<Article />} />
            <Route path="categories/:parentId" element={<Categories />} />
            <Route path="sections/:categoryId" element={<Sections />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
};

export default App;
