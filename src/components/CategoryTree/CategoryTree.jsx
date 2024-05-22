import React from 'react';

import { useNavigate } from 'react-router-dom';

import { COLORS } from '../../models/colors';

import * as TymioUI from '../../components/index';

import * as Styled from './styled';

const CategoryTree = ({ category, isSubCategory = false }) => {
  const navigate = useNavigate();

  const handleCategoryClick = (id, isSub) => {
    if (isSub) {
      navigate(`/sections/${id}`);
    } else {
      navigate(`/categories/${id}`);
    }
  };

  return (
    <div style={{ paddingLeft: '20px' }}>
      <Styled.Link
        onClick={() => handleCategoryClick(category.id, isSubCategory)}
      >
        <TymioUI.Paragraph size={'large'} color={COLORS.LIGHT}>
          {category.title}
        </TymioUI.Paragraph>
      </Styled.Link>

      {category.articles.length > 0 && (
        <ul>
          {category.articles.map((article) => {
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
              <CategoryTree category={subCategory} isSubCategory={true} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CategoryTree;
