import React, { useEffect, useState } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import Markdown from 'react-markdown';

import LanguageSwitch from '../../components/LanguageSwitch/LanguageSwitch';
import RoutingMenu from './components/RoutingMenu/RoutingMenu';
import Helpful from './components/Helpful/Helpful';
import Switcher from './components/Switcher/Switcher';
import ImageZoom from './components/ImageZoom/ImageZoom';

import useFullArticle from '../../hooks/useFullArticle';
import useArticleList from '../../hooks/useArticleList';
import useCategory from '../../hooks/useCategory';

import FullArticleService from '../../services/full-article.service';
import MainCategoryService from '../../services/main-category.services';
import СategoryService from '../../services/category.service';

import * as TymioUI from '../../components/index';
import * as Styled from './styled';
import { bool } from 'yup';

const Article = () => {
  const location = useLocation();
  const { articleId, lang } = useParams();
  const { article, loading, error } = useFullArticle();
  const category = useCategory();
  const articleList = useArticleList();

  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        FullArticleService.getData(articleId);
        if (article.categoryId) {
          MainCategoryService.getData(article.categoryId);
          if (articleList.articleList?.parentId) {
            СategoryService.getData(articleList.articleList.parentId);
          }
        }
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [lang, articleId, article.categoryId, articleList.articleList?.parentId]);

  const combinedLoading =
    loading || articleList.loading || category.loading || isLoading;

  const renderers = {
    img: ({ alt, src, title }) => (
      <ImageZoom alt={alt} src={src} title={title} />
    ),
    a: ({ href, children }) => {
      const isInternalLink = href && href.startsWith('/article/');
      const modifiedHref = isInternalLink ? `/${lang}${href}` : href;
      return (
        <Link as={Link} to={modifiedHref}>
          {children}
        </Link>
      );
    },
  };

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    scrollToTop();
  }, [location]);

  return (
    <Styled.Article>
      {!error ? (
        <>
          <Styled.DesktopWrapper>
            <div></div>
            {!combinedLoading && (
              <TymioUI.Breadcrumbs
                lang={lang}
                subCategory={articleList.articleList}
                category={category.category}
              />
            )}

            <Styled.SwitcherWrapper>
              <LanguageSwitch />
            </Styled.SwitcherWrapper>
          </Styled.DesktopWrapper>
          <Styled.MobileWrapper>
            <Styled.Wrapper>
              <TymioUI.AccordionCategories
                label={articleList.articleList?.title}
              >
                <RoutingMenu
                  lang={lang}
                  articleId={articleId}
                  title={articleList.articleList?.title}
                  menuItems={articleList.articleList?.articles}
                />
              </TymioUI.AccordionCategories>
              <LanguageSwitch />
            </Styled.Wrapper>
            <TymioUI.Breadcrumbs
              lang={lang}
              subCategory={articleList.articleList}
              category={category.category}
            />
          </Styled.MobileWrapper>
          <Styled.Content>
            <Styled.DesktopMenu>
              <RoutingMenu
                lang={lang}
                articleId={articleId}
                title={articleList.articleList?.title}
                menuItems={articleList.articleList?.articles}
              />
            </Styled.DesktopMenu>
            {!combinedLoading ? (
              <Styled.ContainerContent>
                <Styled.Markdown>
                  <Markdown components={renderers}>{article.content}</Markdown>
                </Styled.Markdown>
                {/* <Helpful /> */}
                <Switcher
                  articleId={articleId}
                  articleList={articleList}
                  lang={lang}
                />
              </Styled.ContainerContent>
            ) : (
              <TymioUI.LoadingSpinner />
            )}
          </Styled.Content>
        </>
      ) : (
        <Styled.PageNotFound>Page not found</Styled.PageNotFound>
      )}
    </Styled.Article>
  );
};

export default Article;
