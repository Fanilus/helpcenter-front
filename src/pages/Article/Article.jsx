import React from 'react';

import * as Styled from './styled';

import * as TymioUI from '../../components/index';
import { useNavigate, useParams } from 'react-router-dom';
import useFullArticle from '../../hooks/useFullArticle';
import Markdown from 'react-markdown';

const Article = () => {
  const navigate = useNavigate();
  const params = useParams();
  console.log(params.ArticleId);
  const { article } = useFullArticle(params.ArticleId);
  console.log(article);

  return (
    <Styled.Article>
      <TymioUI.Button type={'secondary'} onClick={() => navigate('/')}>
        Back
      </TymioUI.Button>
      {/* <TymioUI.H2>{article.title}</TymioUI.H2> */}
      {article.content ? (
        <Markdown>{article.content}</Markdown>
      ) : (
        <TymioUI.Paragraph>No content</TymioUI.Paragraph>
      )}
    </Styled.Article>
  );
};

export default Article;
