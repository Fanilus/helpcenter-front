import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import { useTranslation } from 'react-i18next';
import useRoutes from '../../hooks/useRoutes';

import * as Styled from './styled';
import * as TymioUI from '../index';
import { COLORS } from '../../models/colors';

import BurgerMenu from './components/BurgerMenu';

const WELCOME_PAGE = process.env.REACT_APP_WELCOME_PAGE;

const Header = ({ light = true }) => {
  const { header } = useRoutes();
  const { t } = useTranslation();

  const [active, setActive] = useState();
  const location = useLocation();

  useEffect(() => {
    setActive(`${location.pathname}`);
  }, [location.pathname]);

  return (
    <Styled.Header>
      {WELCOME_PAGE !== 'true' && (
        <>
          <Styled.LogoLink to={'/'}>
            <TymioUI.LogoIcon />
          </Styled.LogoLink>
          <Styled.Fixed>
            <TymioUI.RouteMenu options={header} light={light} active={active} />
            <TymioUI.Button
              type={'submit'}
              onClick={() => window.open('https://app.tymio.com/', '_blank')}
            >
              <TymioUI.Paragraph
                lh={'13px'}
                size={'medium'}
                color={COLORS.BLACK}
              >
                {t('START EARNING')}
              </TymioUI.Paragraph>
            </TymioUI.Button>
          </Styled.Fixed>
        </>
      )}
      <Styled.MobileActions>
        {WELCOME_PAGE === 'true' && (
          <>
            <Styled.LogoLink to={'/'}>
              <TymioUI.LogoIcon />
            </Styled.LogoLink>
          </>
        )}
        <BurgerMenu />
      </Styled.MobileActions>
    </Styled.Header>
  );
};

export default Header;
