import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import * as Styled from './styled';
import { COLORS } from '../../models/colors';
import * as TymioUI from '../../components/index';

import ArticleList from '../../services/article-list.service';
import СategoryService from '../../services/category.service';
import MainСategoryService from '../../services/main-category.services';

import useArticleList from '../../hooks/useArticleList';
import useMainCategories from '../../hooks/useMainCategories';
import useCategory from '../../hooks/useCategory';

import CategoryTree from '../../components/CategoryTree/CategoryTree';
import LanguageSwitch from '../../components/LanguageSwitch/LanguageSwitch';
import RoutingMenu from './components/RoutingMenu/RoutingMenu';

const Sections = () => {
  const { articleList, loading } = useArticleList();
  const category = useCategory();
  const { categoryId, lang } = useParams();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        MainСategoryService.getData(categoryId);
        // console.log(articleList);
        const categoryLoaded = true;
        if (categoryLoaded && articleList.parentId) {
          СategoryService.getData(articleList.parentId);
        }
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [lang, categoryId, articleList?.parentId]);
  const combinedLoading = loading || category.loading || isLoading;

  return (
    <Styled.Sections>
      <TymioUI.Title />
      <Styled.Content>
        {combinedLoading && <TymioUI.LoadingSpinner />}
        {!combinedLoading && articleList && (
          <>
            <Styled.IconWrapper>
              <LanguageSwitch />
            </Styled.IconWrapper>
            <RoutingMenu
              loading={loading}
              menuItems={category.category.categories}
              lang={lang}
              parentId={categoryId}
            />
            <Styled.Wrapper>
              <Styled.BreadcrumbsWrapper>
                <TymioUI.Breadcrumbs lang={lang} category={category.category} />
              </Styled.BreadcrumbsWrapper>
              <Styled.MobileWrapper>
                {loading && <TymioUI.LoadingSpinner />}
                <Styled.CategoriesWrapper>
                  <TymioUI.AccordionCategories>
                    <TymioUI.RoutingMenu
                      menuItems={category.category.categories}
                      parentId={categoryId}
                      lang={lang}
                    />
                  </TymioUI.AccordionCategories>
                  <LanguageSwitch />
                </Styled.CategoriesWrapper>
                <TymioUI.Searcher />
              </Styled.MobileWrapper>
              <TymioUI.H2 color={COLORS.BLACK}>{articleList.title}</TymioUI.H2>
              {!loading && articleList && (
                <Styled.CategoryTreeWrapper>
                  {articleList.articles &&
                    articleList.articles.map((article) => (
                      <CategoryTree isArticle={true} category={article} />
                    ))}
                </Styled.CategoryTreeWrapper>
              )}
            </Styled.Wrapper>
          </>
        )}
      </Styled.Content>
    </Styled.Sections>
  );
};

export default Sections;
