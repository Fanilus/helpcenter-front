import React from 'react';
import { useNavigate } from 'react-router-dom';

import * as Styled from './styled';
import * as TymioUI from '../../../../components/index';
import AccordionsCategoriesArrow from '../../../../components/Icons/AccordionsCategoriesArrow/AccordionsCategoriesArrow';

const Switcher = ({ articleId, articleList, lang }) => {
  const navigate = useNavigate();

  const getLeftRightArticles = () => {
    const articles = articleList.articleList?.articles || [];
    const currentIndex = articles.findIndex(
      (article) => article.id === parseInt(articleId)
    );
    if (currentIndex === -1) return { left: null, right: null };

    const left = currentIndex > 0 ? articles[currentIndex - 1] : null;
    const right =
      currentIndex < articles.length - 1 ? articles[currentIndex + 1] : null;

    return { left, right };
  };

  const { left, right } = getLeftRightArticles();

  return (
    <Styled.Switcher>
      {left && (
        <Styled.Left onClick={() => navigate(`/${lang}/article/${left.id}`)}>
          <AccordionsCategoriesArrow />
          <TymioUI.ArticleLink>{left.title}</TymioUI.ArticleLink>
        </Styled.Left>
      )}
      {right && (
        <Styled.Right onClick={() => navigate(`/${lang}/article/${right.id}`)}>
          <TymioUI.ArticleLink>{right.title}</TymioUI.ArticleLink>
          <AccordionsCategoriesArrow />
        </Styled.Right>
      )}
    </Styled.Switcher>
  );
};

export default Switcher;
