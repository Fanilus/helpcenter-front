import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import * as Styled from './styled';
import { COLORS } from '../../models/colors';
import * as TymioUI from '../../components/index';

import SearchService from '../../services/search.service';
import MainСategoryService from '../../services/main-category.services';

import useSearch from '../../hooks/useSearch.jsx';
import { useTranslation } from 'react-i18next';

import LanguageSwitch from '../../components/LanguageSwitch/LanguageSwitch';
import CategoryTree from '../../components/CategoryTree/CategoryTree.jsx';
import RoutingMenu from './components/RoutingMenu/RoutingMenu';
import useMainCategories from '../../hooks/useMainCategories.jsx';

const Search = () => {
  const { foundArticlesList, loading } = useSearch();
  const { t } = useTranslation();
  const mainCategories = useMainCategories();
  const { lang, query } = useParams();

  useEffect(() => {
    MainСategoryService.getData();
  }, [lang]);

  useEffect(() => {
    SearchService.getData(query);
  }, [lang, query]);

  const combinedLoading = loading;
  return (
    <Styled.Search>
      <TymioUI.Title />
      <Styled.Content>
        <Styled.IconWrapper>
          <LanguageSwitch />
        </Styled.IconWrapper>
        <RoutingMenu
          loading={mainCategories.loading}
          menuItems={mainCategories.mainCategories}
          lang={lang}
        />
        <Styled.Wrapper>
          <Styled.BreadcrumbsWrapper>
            <TymioUI.Breadcrumbs lang={lang} />
          </Styled.BreadcrumbsWrapper>
          <Styled.MobileWrapper>
            <Styled.CategoriesWrapper>
              <TymioUI.AccordionCategories>
                <TymioUI.RoutingMenu
                  menuItems={mainCategories.mainCategories}
                  lang={lang}
                />
              </TymioUI.AccordionCategories>
              <LanguageSwitch />
            </Styled.CategoriesWrapper>
            <TymioUI.Searcher />
          </Styled.MobileWrapper>
          <TymioUI.H2 color={COLORS.BLACK}>
            {foundArticlesList.length > 0
              ? t('Searching results')
              : t('Nothing found')}
          </TymioUI.H2>
          {combinedLoading && <TymioUI.LoadingSpinner />}
          {!combinedLoading && (
            <Styled.CategoryTreeWrapper>
              {foundArticlesList &&
                foundArticlesList.length > 0 &&
                foundArticlesList.map((article, index) => (
                  <CategoryTree
                    isArticle={true}
                    category={article}
                    key={index}
                  />
                ))}
            </Styled.CategoryTreeWrapper>
          )}
        </Styled.Wrapper>
      </Styled.Content>
    </Styled.Search>
  );
};

export default Search;
