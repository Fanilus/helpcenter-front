import React from 'react';
import { Outlet } from 'react-router-dom';
import * as TymioUI from '../_DEPRECATED/index';
import * as Styled from './styled';

const Layout = () => {
  return (
    <TymioUI.Container>
      <TymioUI.Header />
      <Styled.Main>
        <Outlet />
      </Styled.Main>
      <TymioUI.Footer />
    </TymioUI.Container>
  );
};

export default Layout;
