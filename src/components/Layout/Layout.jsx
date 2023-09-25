import React from 'react';
import { Outlet } from 'react-router-dom';
import * as TymioUI from '../_DEPRECATED/index';
import * as UI from '../index';
import * as Styled from './styled';

const Layout = () => {
  return (
    <TymioUI.Container>
      <UI.Header />
      <Styled.Main>
        <Outlet />
      </Styled.Main>
      <UI.Footer />
    </TymioUI.Container>
  );
};

export default Layout;
