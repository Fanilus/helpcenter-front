import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

import useRoutes from '../hooks/useRoutes';
import * as Styled from '../styled';
import Close from '../../../assets/img/icons/cross-purple.svg';
import { LogoIcon } from '../../_DEPRECATED';
import Button from '../../Button/Button';
import { BUTTON_TYPE } from '../../../models/types';
import { COLORS } from '../../../models/colors';
import Paragraph from '../../Typography/Paragraph/Paragraph';

const BurgerMenu = () => {
  const { allRoutes } = useRoutes();
  const [active, setActive] = useState(false);

  const toggleMenu = () => {
    setActive((prevState) => !prevState);
  };

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
            {allRoutes.map(({ path, label }, i) => (
              <Styled.Route key={i}>
                <NavLink to={path} onClick={toggleMenu}>
                  {label}
                </NavLink>
                <Styled.HR />
              </Styled.Route>
            ))}
            <Button type={BUTTON_TYPE.PRIMARY}>
              <Paragraph color={COLORS.BLACK}>Start earning</Paragraph>
            </Button>
          </Styled.Routes>
        </Styled.Content>
        <Styled.Overlay onClick={toggleMenu} />
      </Styled.Menu>
    </>
  );
};

export default BurgerMenu;
