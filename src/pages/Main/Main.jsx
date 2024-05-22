import React, { useEffect } from 'react';

import * as Styled from './styled';

import * as TymioUI from '../../components/index';
import { COLORS } from '../../models/colors';

import { useNavigate } from 'react-router-dom';
import useMainCategories from '../../hooks/useMainCategories';
import MainСategoryService from '../../services/main-category.services';
import CategoryTree from '../../components/CategoryTree/CategoryTree';

const Main = () => {
  const { mainCategories, loading } = useMainCategories();
  const navigate = useNavigate();
  useEffect(() => {
    MainСategoryService.getData();
  }, []);
  console.log(loading);
  return (
    <Styled.Main>
      <div>
        <TymioUI.H2>Main Categories</TymioUI.H2>
        {loading && <TymioUI.LoadingSpinner />}
        {!loading &&
          mainCategories.map((category) => (
            <Styled.Link
              onClick={() => navigate(`categories/${category.id}`)}
              key={category.id}
            >
              <TymioUI.Paragraph
                key={category.id}
                size={'large'}
                color={COLORS.LIGHT}
              >
                {category.title}
              </TymioUI.Paragraph>
            </Styled.Link>
          ))}
      </div>
      <div>
        <TymioUI.H2>Tree Categories</TymioUI.H2>
        {loading && <TymioUI.LoadingSpinner />}
        {!loading &&
          mainCategories.map((category) => (
            <CategoryTree key={category.id} category={category} />
          ))}
      </div>
    </Styled.Main>
  );
};

export default Main;
