import React, { useEffect } from 'react';

import * as Styled from './styled';

import * as TymioUI from '../../components/index';
import { useNavigate, useParams } from 'react-router-dom';
import useArticleList from '../../hooks/useArticleList';
import ArticleList from '../../services/article-list.service';
import { COLORS } from '../../models/colors';
import CategoryTree from '../../components/CategoryTree/CategoryTree';
import MainСategoryService from '../../services/main-category.services';

const Sections = () => {
  const navigate = useNavigate();
  const { articleList, loading } = useArticleList();
  const { categoryId } = useParams();
  useEffect(() => {
    MainСategoryService.getData(categoryId);
  }, []);

  return (
    <Styled.Sections>
      <TymioUI.Button type={'secondary'} onClick={() => navigate(-1)}>
        Back
      </TymioUI.Button>
      {loading && <TymioUI.LoadingSpinner />}
      {!loading && articleList && (
        <>
          <TymioUI.H2>{articleList.title}</TymioUI.H2>
          <div>
            {articleList.articles &&
              articleList.articles.map((article) => {
                return (
                  <div key={article.id} style={{ paddingLeft: '24px' }}>
                    <Styled.Link
                      onClick={() => navigate(`/article/${article.id}`)}
                    >
                      <TymioUI.Paragraph
                        size={'medium'}
                        color={COLORS.PURPLE_BRIGHT}
                      >
                        {article.title}
                      </TymioUI.Paragraph>
                    </Styled.Link>
                  </div>
                );
              })}
          </div>
        </>
      )}
    </Styled.Sections>
  );
};

export default Sections;
