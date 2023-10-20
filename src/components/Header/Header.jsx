import React, { useState, useEffect } from 'react';

import BurgerMenu from './components/BurgerMenu';
import * as TymioUI from '../_DEPRECATED';
import * as UI from '../index';
import { BUTTON_TYPE } from '../../models/types';

import * as Styled from './styled';
import useRoutes from '../../hooks/useRoutes';

const APP_LINK = process.env.REACT_APP_APP_LINK;

const Header = ({ light }) => {
  const { header } = useRoutes();

  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', () => {
        if (window.scrollY > 0) {
          setScroll(true);
        } else {
          setScroll(false);
        }
      });
    }
  }, []);

  return (
    <Styled.Header>
      <Styled.LogoLink to={'/'}>
        <TymioUI.LogoIcon />
      </Styled.LogoLink>
      <Styled.Fixed>
        <UI.RouteMenu
          scroll={light ? null : scroll}
          options={header}
          light={light}
        />
        <UI.Button
          type={BUTTON_TYPE.SECONDARY}
          onClick={() => window.open(APP_LINK, '_blank')}
        >
          Start earning
        </UI.Button>
      </Styled.Fixed>
      <Styled.MobileActions>
        <BurgerMenu />
      </Styled.MobileActions>
    </Styled.Header>
  );
};

export default Header;
