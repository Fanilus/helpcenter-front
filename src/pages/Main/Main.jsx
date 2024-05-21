import React, { useEffect } from 'react';

import * as Styled from './styled';

import * as TymioUI from '../../components/index';

import { COLORS } from '../../models/colors';

import { useNavigate } from 'react-router-dom';

import useMainCategories from '../../hooks/useMainCategories';

const CategoryTree = ({ category }) => {
  const navigate = useNavigate();

  return (
    <div style={{ paddingLeft: '20px' }}>
      {/* <Styled.Link
      // onClick={() => navigate(`/${category.id}`)}
      > */}
      <TymioUI.Paragraph size={'large'} color={COLORS.LIGHT}>
        {category.title}
      </TymioUI.Paragraph>
      {/* </Styled.Link> */}

      {category.articles.length > 0 && (
        <ul>
          {category.articles.map((article) => {
            console.log(article.id);
            return (
              <li key={article.id} style={{ paddingLeft: '24px' }}>
                <Styled.Link onClick={() => navigate(`/article/${article.id}`)}>
                  <TymioUI.Paragraph
                    size={'medium'}
                    color={COLORS.PURPLE_BRIGHT}
                  >
                    {article.title}
                  </TymioUI.Paragraph>
                </Styled.Link>
              </li>
            );
          })}
        </ul>
      )}

      {category.categories.length > 0 && (
        <ul>
          {category.categories.map((subCategory) => (
            <li key={subCategory.id}>
              <CategoryTree category={subCategory} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

const Main = () => {
  const { mainCategories } = useMainCategories();
  const navigate = useNavigate();

  return (
    <Styled.Main>
      <div>
        <TymioUI.H2>Main Categories</TymioUI.H2>

        {mainCategories.map((category) => (
          // <Styled.Link
          //   // onClick={() => navigate(`/${category.id}`)}
          //   key={category.id}
          // >
          <TymioUI.Paragraph
            key={category.id}
            size={'large'}
            color={COLORS.LIGHT}
          >
            {category.title}
          </TymioUI.Paragraph>
          // </Styled.Link>
        ))}
      </div>
      <div>
        <TymioUI.H2>Tree Categories</TymioUI.H2>
        {mainCategories.map((category) => (
          <CategoryTree key={category.id} category={category} />
        ))}
      </div>
    </Styled.Main>
  );
};

export default Main;
