import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import * as Styled from './styled';
import { COLORS } from '../../models/colors';
import * as TymioUI from '../../components/index';

import useCategory from '../../hooks/useCategory';
import useMainCategories from '../../hooks/useMainCategories';

import СategoryService from '../../services/category.service';
import MainСategoryService from '../../services/main-category.services';

import CategoryTree from '../../components/CategoryTree/CategoryTree';
import LanguageSwitch from '../../components/LanguageSwitch/LanguageSwitch';
import RoutingMenu from './components/RoutingMenu/RoutingMenu';

const Categories = () => {
  const { category, loading } = useCategory();
  const mainCategories = useMainCategories();
  const { parentId, lang } = useParams();

  useEffect(() => {
    MainСategoryService.getData();
    СategoryService.getData(parentId);
  }, [lang, parentId]);

  const combinedLoading = loading || mainCategories.loading;
  return (
    <Styled.Categories>
      <TymioUI.Title />
      <Styled.Content>
        {combinedLoading && <TymioUI.LoadingSpinner />}
        {!combinedLoading && category && (
          <>
            <Styled.IconWrapper>
              <LanguageSwitch />
            </Styled.IconWrapper>
            <RoutingMenu
              loading={loading}
              menuItems={mainCategories.mainCategories}
              lang={lang}
              parentId={parentId}
            />
            <Styled.Wrapper>
              <Styled.BreadcrumbsWrapper>
                <TymioUI.Breadcrumbs lang={lang} />
              </Styled.BreadcrumbsWrapper>
              <Styled.MobileWrapper>
                {loading && <TymioUI.LoadingSpinner />}
                <Styled.CategoriesWrapper>
                  <TymioUI.AccordionCategories>
                    <TymioUI.RoutingMenu
                      menuItems={mainCategories.mainCategories}
                      parentId={parentId}
                      lang={lang}
                    />
                  </TymioUI.AccordionCategories>
                  <LanguageSwitch />
                </Styled.CategoriesWrapper>
                <TymioUI.Searcher />
              </Styled.MobileWrapper>
              <TymioUI.H2 color={COLORS.BLACK}>{category.title}</TymioUI.H2>
              {category.categories && (
                <Styled.CategoryTreeWrapper>
                  {category.categories.length > 0 &&
                    category.categories.map((subCategory) => (
                      <CategoryTree
                        key={subCategory.id}
                        isSubCategory={true}
                        category={subCategory}
                      />
                    ))}
                </Styled.CategoryTreeWrapper>
              )}
            </Styled.Wrapper>
          </>
        )}
      </Styled.Content>
    </Styled.Categories>
  );
};

export default Categories;
