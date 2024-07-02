import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import * as Styled from './styled';
import * as TymioUI from '../../components/index';
import { COLORS } from '../../models/colors';

import MainСategoryService from '../../services/main-category.services';
// import LanguageServiceInstance from '../../services/language.service';

import useMainCategories from '../../hooks/useMainCategories';
import { useLanguage } from '../../hooks';

import CategoryTree from '../../components/CategoryTree/CategoryTree';
import RoutingMenu from './components/RoutingMenu/RoutingMenu';
import LanguageSwitch from '../../components/LanguageSwitch/LanguageSwitch';

const Main = () => {
  const { lang } = useParams();
  const { mainCategories, loading } = useMainCategories();
  useEffect(() => {
    MainСategoryService.getData();
  }, [lang]);
  return (
    <Styled.Main>
      <TymioUI.Title />
      <Styled.Content>
        <Styled.IconWrapper>
          <LanguageSwitch />
        </Styled.IconWrapper>
        <RoutingMenu lang={lang} loading={loading} menuItems={mainCategories} />
        <Styled.MobileWrapper>
          {loading && <TymioUI.LoadingSpinner />}
          <Styled.CategoriesWrapper>
            <TymioUI.AccordionCategories>
              <TymioUI.RoutingMenu lang={lang} menuItems={mainCategories} />
            </TymioUI.AccordionCategories>
            <LanguageSwitch />
          </Styled.CategoriesWrapper>
          <TymioUI.Searcher />
        </Styled.MobileWrapper>
        <Styled.CategoryTreeWrapper>
          {loading && <TymioUI.LoadingSpinner />}
          {!loading &&
            mainCategories.map((category) => (
              <CategoryTree key={category.id} category={category} />
            ))}
        </Styled.CategoryTreeWrapper>
      </Styled.Content>
    </Styled.Main>
  );
};

export default Main;
