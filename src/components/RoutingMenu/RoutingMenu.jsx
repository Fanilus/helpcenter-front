import React from 'react';

import * as Styled from './styled';
import * as TymioUI from '../index';
import { COLORS } from '../../models/colors';

const RoutingMenu = ({ menuItems, isSection, parentId, lang }) => {
  return (
    <Styled.RoutingMenu>
      <Styled.LinksWrapper>
        {menuItems &&
          menuItems.map((category) => (
            <Styled.LinkWrapper key={category.id}>
              <TymioUI.MenuLink
                active={+parentId === category.id}
                path={`/${lang}/categories/${category.id}`}
              >
                {category.title}
              </TymioUI.MenuLink>
            </Styled.LinkWrapper>
          ))}
      </Styled.LinksWrapper>

      {isSection && <TymioUI.Searcher />}
    </Styled.RoutingMenu>
  );
};

export default RoutingMenu;
