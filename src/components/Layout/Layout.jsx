import React from 'react';
import { Outlet } from 'react-router-dom';
import * as TymioUI from '../index';
import * as Styled from './styled';

const Layout = () => {
  return (
    <Styled.PageWrapper>
      <TymioUI.Header />
      <Styled.Content>
        <TymioUI.Container>
          <Styled.Main>
            <Outlet />
          </Styled.Main>
        </TymioUI.Container>
      </Styled.Content>
      <TymioUI.Footer />
    </Styled.PageWrapper>
  );
};

export default Layout;
