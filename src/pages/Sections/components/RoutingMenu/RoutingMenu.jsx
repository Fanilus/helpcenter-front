import React from 'react';

import { useTranslation } from 'react-i18next';

import * as Styled from './styled';
import * as TymioUI from '../../../../components/index';
import { COLORS } from '../../../../models/colors';

const RoutingMenu = ({ menuItems, loading, parentId, lang }) => {
  const { t } = useTranslation();

  return (
    <Styled.RoutingMenu>
      <Styled.Title>
        <TymioUI.Paragraph size={'medium'} color={COLORS.BLACK}>
          {t('CATEGORIES')}
        </TymioUI.Paragraph>
      </Styled.Title>
      {loading && <TymioUI.LoadingSpinner />}
      {!loading && (
        <>
          <Styled.LinksWrapper>
            {menuItems &&
              menuItems.map((category) => (
                <Styled.LinkWrapper key={category.id}>
                  <TymioUI.MenuLink
                    active={+parentId === category.id}
                    path={`/${lang}/sections/${category.id}`}
                  >
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
