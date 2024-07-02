import React, { Suspense, lazy, useState, useEffect } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import * as TymioUI from './components';
import useLanguage from './hooks/useLanguage.jsx';

const Layout = lazy(() => import('./components/Layout/Layout.jsx'));
const Main = lazy(() => import('./pages/Main/Main.jsx'));
const Article = lazy(() => import('./pages/Article/Article.jsx'));
const Categories = lazy(() => import('./pages/Categories/Categories.jsx'));
const Sections = lazy(() => import('./pages/Sections/Sections.jsx'));
const Search = lazy(() => import('./pages/Search/Search.jsx'));

const App = () => {
  const { language } = useLanguage();

  return (
    <>
      <TymioUI.Modal />
      <TymioUI.MessageDialog />
      <Suspense fallback={<></>}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Navigate to={`/${language}`} replace />} />
            <Route path="/:lang" element={<Main />} />
            <Route path="*" element={<Main />} />
            <Route path=":lang/article/:articleId" element={<Article />} />
            <Route path=":lang/categories/:parentId" element={<Categories />} />
            <Route path=":lang/sections/:categoryId" element={<Sections />} />
            <Route path=":lang/search/:query" element={<Search />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
};

export default App;
