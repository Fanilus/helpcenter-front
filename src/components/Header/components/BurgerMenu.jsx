import React, { useEffect, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

import useRoutes from '../../../hooks/useRoutes';
import * as Styled from '../styled';
import * as TymioUI from '../../index';
import Close from '../../../assets/img/icons/cross-purple.svg';
import { LogoIcon } from '../../';
import { useTranslation } from 'react-i18next';

const BurgerMenu = () => {
  const { burger } = useRoutes();
  const { t } = useTranslation();

  const [active, setActive] = useState(false);
  const BURGER = burger;
  const toggleMenu = () => {
    setActive((prevState) => !prevState);
  };
  const navigate = useNavigate();
  const onNavigate = (path) => {
    setActive((prevState) => !prevState);
    navigate(path);
  };

  useEffect(() => {
    const html = document.getElementsByTagName('html')[0];
    html.style.overflowY = active ? 'hidden' : 'auto';
  }, [active]);

  return (
    <>
      <Styled.Burger onClick={toggleMenu}>
        <Styled.BurgerLine />
        <Styled.BurgerLine long />
        <Styled.BurgerLine />
      </Styled.Burger>
      <Styled.Menu active={active ? 'true' : undefined}>
        <Styled.Content>
          <Styled.Logo onClick={toggleMenu}>
            <NavLink to={'/'}>
              <LogoIcon />
            </NavLink>
          </Styled.Logo>
          <Styled.CloseIcon onClick={toggleMenu}>
            <img src={Close} alt={''} />
          </Styled.CloseIcon>
          <Styled.Routes>
            {BURGER.map(({ path, label }, i) => (
              <Styled.Route key={i} onClick={() => onNavigate(path)}>
                <TymioUI.H2>{t(label)}</TymioUI.H2>
                <Styled.HR />
              </Styled.Route>
            ))}
          </Styled.Routes>
        </Styled.Content>
        <Styled.Overlay onClick={toggleMenu} />
      </Styled.Menu>
    </>
  );
};

export default BurgerMenu;
