import React, { useState, useEffect } from 'react';

import BurgerMenu from './components/BurgerMenu';
import * as TymioUI from '../_DEPRECATED';
import * as UI from '../index';
import { BUTTON_TYPE } from '../../models/types';

import * as Styled from './styled';

const Header = ({ light }) => {
  const options = [
    { label: 'how it works', path: '/' },
    { label: 'Use cases', path: '/' },
    { label: 'Safety', path: '/' },
    { label: 'Ambassadors', path: '/' },
    { label: 'FAQ', path: '/' },
  ];

  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', () => {
        if (window.pageYOffset > 0) {
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
          options={options}
          light={light}
        />
        <UI.Button type={BUTTON_TYPE.SECONDARY}>Start earning</UI.Button>
      </Styled.Fixed>
      <Styled.MobileActions>
        <BurgerMenu />
      </Styled.MobileActions>
    </Styled.Header>
  );
};

export default Header;
