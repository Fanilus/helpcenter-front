import React, { useState, useEffect } from 'react';

import BurgerMenu from './components/BurgerMenu';
import * as TymioUI from '../index';

import * as Styled from './styled';
import useRoutes from '../../hooks/useRoutes';
import { useLocation } from 'react-router-dom';

const WELCOME_PAGE = process.env.REACT_APP_WELCOME_PAGE;

const Header = ({ light }) => {
  const { header } = useRoutes();

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
