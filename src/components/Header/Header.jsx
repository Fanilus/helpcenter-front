import React, { useState, useEffect } from 'react';

import BurgerMenu from './components/BurgerMenu';
import * as TymioUI from '../_DEPRECATED';
import * as UI from '../index';
import { BUTTON_TYPE } from '../../models/types';

import * as Styled from './styled';
import { useNavigate } from 'react-router-dom';

const SELL_HIGHT_LINK = process.env.REACT_APP_SELL_HIGHT_LINK;

const Header = () => {
  // const { routes } = useRoutes();
  // const [
  // active,
  //  setActive
  // ] = useState('');
  const navigate = useNavigate();
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

  const handleLinkOpen = () => {
    window.open(SELL_HIGHT_LINK, '_blank');
  };

  return (
    <Styled.Header>
      <Styled.LogoLink to={'/'}>
        <TymioUI.LogoIcon />
      </Styled.LogoLink>
      <Styled.Fixed>
        <UI.RouteMenu scroll={scroll} options={options} />
        <UI.Button type={BUTTON_TYPE.SECONDARY}>Start earning</UI.Button>
      </Styled.Fixed>
    </Styled.Header>
  );
};

export default Header;
