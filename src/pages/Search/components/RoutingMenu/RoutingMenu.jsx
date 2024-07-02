import React from 'react';

import * as Styled from './styled';
import * as TymioUI from '../../../../components/index';
import { COLORS } from '../../../../models/colors';

const RoutingMenu = ({ lang, menuItems, loading }) => {
  return (
    <Styled.RoutingMenu>
      <Styled.Title>
        <TymioUI.Paragraph size={'medium'} color={COLORS.BLACK}>
          Categories
        </TymioUI.Paragraph>
      </Styled.Title>
      {loading && <TymioUI.LoadingSpinner />}
      {!loading && (
        <>
          <Styled.LinksWrapper>
            {menuItems &&
              menuItems.map((category) => (
                <Styled.LinkWrapper key={category.id}>
                  <TymioUI.MenuLink path={`/${lang}/categories/${category.id}`}>
                    {category.title}
                  </TymioUI.MenuLink>
                </Styled.LinkWrapper>
              ))}
          </Styled.LinksWrapper>
          <TymioUI.Searcher />
        </>
      )}
    </Styled.RoutingMenu>
  );
};

export default RoutingMenu;
