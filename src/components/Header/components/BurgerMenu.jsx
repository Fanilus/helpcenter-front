import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

import useRoutes from '../../../hooks/useRoutes';
import * as Styled from '../styled';
import Close from '../../../assets/img/icons/cross-purple.svg';
import { LogoIcon } from '../../_DEPRECATED';
import Button from '../../Button/Button';
import { BUTTON_TYPE } from '../../../models/types';
import { COLORS } from '../../../models/colors';
import Paragraph from '../../Typography/Paragraph/Paragraph';

const APP_LINK = process.env.REACT_APP_APP_LINK;
const WELCOME_PAGE = process.env.REACT_APP_WELCOME_PAGE;

const BurgerMenu = () => {
  const { burger, burgerWelcome } = useRoutes();
  const [active, setActive] = useState(false);
  const BURGER = WELCOME_PAGE === 'true' ? burgerWelcome : burger;
  const toggleMenu = () => {
    setActive((prevState) => !prevState);
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
              <Styled.Route key={i}>
                <NavLink to={path} onClick={toggleMenu}>
                  {label}
                </NavLink>
                <Styled.HR />
              </Styled.Route>
            ))}
            <Button type={BUTTON_TYPE.PRIMARY}>
              <Paragraph
                color={COLORS.BLACK}
                onClick={() => window.open(APP_LINK, '_blank')}
              >
                Start earning
              </Paragraph>
            </Button>
          </Styled.Routes>
        </Styled.Content>
        <Styled.Overlay onClick={toggleMenu} />
      </Styled.Menu>
    </>
  );
};

export default BurgerMenu;
