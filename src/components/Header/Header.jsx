import React, { useState, useEffect } from 'react';

import BurgerMenu from './components/BurgerMenu';
import * as TymioUI from '../_DEPRECATED';
import * as UI from '../index';
import { BUTTON_TYPE } from '../../models/types';

import * as Styled from './styled';
import useRoutes from '../../hooks/useRoutes';
import { useNavigate, useParams } from 'react-router-dom';

const APP_LINK = process.env.REACT_APP_APP_LINK;
const WELCOME_PAGE = process.env.REACT_APP_WELCOME_PAGE;

const Header = ({ light, navRefs }) => {
  const navigate = useNavigate();
  const { elementId } = useParams();
  const { header } = useRoutes();

  const [scroll, setScroll] = useState(false);
  const [active, setActive] = useState();

  useEffect(() => {
    if (elementId) setActive(`/${elementId}`);
    else setActive('/');
  }, [elementId]);

  useEffect(() => {
    if (navRefs) {
      window.addEventListener('scroll', update);
      return () => {
        window.removeEventListener('scroll', update);
      };
    }
  }, [navRefs, elementId]);

  const update = () => {
    if (window.scrollY > 0) {
      setScroll(true);
      handleScroll();
    } else {
      setScroll(false);
    }
  };

  const handleScroll = () => {
    if (navRefs && navRefs[elementId] && window.scrollY !== navRefs[elementId].current.offsetTop) {
      setActive(false);
      navigate('/');
    }
  };

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
