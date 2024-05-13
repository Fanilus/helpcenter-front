import React, { useState, useEffect } from 'react';

import BurgerMenu from './components/BurgerMenu';
import * as TymioUI from '../_DEPRECATED';
import * as UI from '../index';
import { BUTTON_TYPE } from '../../models/types';

import * as Styled from './styled';
import useRoutes from '../../hooks/useRoutes';
import { useLocation, useNavigate } from 'react-router-dom';

const APP_LINK = process.env.REACT_APP_APP_LINK;
const WELCOME_PAGE = process.env.REACT_APP_WELCOME_PAGE;

const Header = ({ light }) => {
  const { header } = useRoutes();
  const [scroll, setScroll] = useState(false);
  const location = useLocation();
  const [active, setActive] = useState();
  const [initialOffset, setInitialOffset] = useState(window.scrollY);
  const [renderCnt, setRenderCnt] = useState(0);

  const navigate = useNavigate();

  useEffect(() => {
    setActive(location.pathname);
  }, [location.pathname]);

  useEffect(() => {
    setInitialOffset(window.scrollY);
    if (!active) navigate('/');
  }, [active]);

  useEffect(() => {
    setRenderCnt((prev) => ++prev);
    if (typeof window !== 'undefined' && initialOffset) {
      const update = () => {
        console.log({ initialOffset, scrollY: window.scrollY, renderCnt });
        setRenderCnt(0);
        if (window.scrollY !== initialOffset) setActive(false);
        if (window.scrollY > 0) {
          setScroll(true);
        } else {
          setScroll(false);
        }
      };
      window.addEventListener('scroll', update);
      return () => {
        window.removeEventListener('scroll', update);
      };
    }
  }, [initialOffset, window]);

  return (
    <Styled.Header>
      {WELCOME_PAGE !== 'true' && (
        <>
          <Styled.LogoLink to={'/'}>
            <TymioUI.LogoIcon />
          </Styled.LogoLink>
          <Styled.Fixed>
            <UI.RouteMenu scroll={light ? null : scroll} options={header} light={light} active={active} />
            <UI.Button type={BUTTON_TYPE.SECONDARY} onClick={() => window.open(APP_LINK, '_blank')}>
              Start earning
            </UI.Button>
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
