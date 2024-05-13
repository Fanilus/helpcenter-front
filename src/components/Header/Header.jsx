import React, { useState, useEffect } from 'react';

import BurgerMenu from './components/BurgerMenu';
import * as TymioUI from '../_DEPRECATED';
import * as UI from '../index';
import { BUTTON_TYPE } from '../../models/types';

import * as Styled from './styled';
import useRoutes from '../../hooks/useRoutes';
import { useLocation } from 'react-router-dom';

const APP_LINK = process.env.REACT_APP_APP_LINK;
const WELCOME_PAGE = process.env.REACT_APP_WELCOME_PAGE;

const Header = ({ light }) => {
  const { header } = useRoutes();
  const [scroll, setScroll] = useState(false);
  const location = useLocation();
  const [active, setActive] = useState();
  const [initialOffset, setInitialOffset] = useState(window.scrollY);

  useEffect(() => {
    setActive(location.pathname);
  }, [location.pathname]);

  useEffect(() => {
    setInitialOffset(window.scrollY);
  }, [active]);

  useEffect(() => {
    if (typeof window !== 'undefined' && initialOffset) {
      const update = () => {
        console.log('scroll', window.scrollY);
        console.log({ initialOffset });
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
  }, [initialOffset]);

  return (
    <Styled.Header>
      {WELCOME_PAGE !== 'true' && (
        <>
          <Styled.LogoLink to={'/'}>
            <TymioUI.LogoIcon />
          </Styled.LogoLink>
          <Styled.Fixed>
            <UI.RouteMenu
              scroll={light ? null : scroll}
              options={header}
              light={light}
              active={active}
            />
            <UI.Button
              type={BUTTON_TYPE.SECONDARY}
              onClick={() => window.open(APP_LINK, '_blank')}
            >
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
