import React from 'react';
import { Outlet } from 'react-router-dom';
import * as TymioUI from '../index';
import * as Styled from './styled';
import ChatIcon from '../ChatIcon/ChatIcon';

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
      {/* <Styled.IconWrapper>
        <ChatIcon />
      </Styled.IconWrapper> */}
      <TymioUI.Footer />
    </Styled.PageWrapper>
  );
};

export default Layout;
