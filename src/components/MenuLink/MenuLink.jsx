import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

import * as Styled from './styled';
import * as TymioUI from '../index';

const MenuLink = ({ children, active, path }) => {
  const navigate = useNavigate();
  return (
    <Styled.MenuLink
      as={Link}
      to={path}
      active={active}
      onClick={(e) => {
        e.preventDefault();
        navigate(path);
      }}
    >
      <TymioUI.Paragraph size={'large'}>{children}</TymioUI.Paragraph>
    </Styled.MenuLink>
  );
};

export default MenuLink;
