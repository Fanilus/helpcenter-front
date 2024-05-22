import React, { useEffect } from 'react';

import * as Styled from './styled';

import * as TymioUI from '../../components/index';
import { useNavigate, useParams } from 'react-router-dom';
import useFullArticle from '../../hooks/useFullArticle';
import Markdown from 'react-markdown';
import FullArticleService from '../../services/full-article.service';

const Article = () => {
  const navigate = useNavigate();
  const { articleId } = useParams();
  const { article, loading } = useFullArticle();
  useEffect(() => {
    FullArticleService.getData(articleId);
  }, []);
  return (
    <Styled.Article>
      <TymioUI.Button type={'secondary'} onClick={() => navigate(-1)}>
        Back
      </TymioUI.Button>
      {loading && <TymioUI.LoadingSpinner />}
      {!loading && article.content ? (
        <Markdown>{article.content}</Markdown>
      ) : (
        <></>
      )}
    </Styled.Article>
  );
};

export default Article;
