import React, { useEffect } from 'react';

import * as Styled from './styled';

import * as TymioUI from '../../components/index';
import { useNavigate, useParams } from 'react-router-dom';
import useCategory from '../../hooks/useCategory';
import СategoryService from '../../services/category.service';
import { COLORS } from '../../models/colors';
import CategoryTree from '../../components/CategoryTree/CategoryTree';

const Categories = () => {
  const navigate = useNavigate();
  const { category, loading } = useCategory();
  const { parentId } = useParams();
  useEffect(() => {
    СategoryService.getData(parentId);
  }, []);
  return (
    <Styled.Categories>
      <TymioUI.Button type={'secondary'} onClick={() => navigate(-1)}>
        Back
      </TymioUI.Button>
      {loading && <TymioUI.LoadingSpinner />}
      {!loading && category && (
        <div>
          <TymioUI.H2>{category.title}</TymioUI.H2>
          {category.categories && (
            <div>
              {category.categories.length > 0 && (
                <div>
                  {category.categories.map((subCategory) => (
                    <div key={subCategory.id}>
                      <CategoryTree
                        isSubCategory={true}
                        category={subCategory}
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      )}
    </Styled.Categories>
  );
};

export default Categories;
