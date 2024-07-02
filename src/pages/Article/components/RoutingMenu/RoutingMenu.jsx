import React from 'react';

import * as Styled from './styled';
import * as TymioUI from '../../../../components/index';
import { COLORS } from '../../../../models/colors';

const RoutingMenu = ({ lang, menuItems, title, articleId }) => {
  return (
    <Styled.RoutingMenu>
      <Styled.Title>
        <TymioUI.Paragraph size={'medium'} color={COLORS.BLACK}>
          {title}
        </TymioUI.Paragraph>
      </Styled.Title>

      <Styled.LinksWrapper>
        {menuItems &&
          menuItems.map((category) => (
            <Styled.LinkWrapper key={category.id}>
              <TymioUI.MenuLink
                path={`/${lang}/article/${category.id}`}
                active={category.id === +articleId}
              >
                {category.title}
              </TymioUI.MenuLink>
            </Styled.LinkWrapper>
          ))}
      </Styled.LinksWrapper>
      <TymioUI.Searcher />
    </Styled.RoutingMenu>
  );
};

export default RoutingMenu;
