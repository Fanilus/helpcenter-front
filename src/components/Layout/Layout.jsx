import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

import * as TymioUI from '../_DEPRECATED/index';
import * as UI from '../index';
import * as Styled from './styled';

const Layout = ({ navRefs }) => {
  const [light, setLight] = useState(false);

  const location = useLocation();

  useEffect(() => {
    if (
      location.pathname.includes('/whitepaper') ||
      location.pathname.includes('/terms') ||
      location.pathname.includes('/blog')
    ) {
      setLight(true);
    } else {
      setLight(false);
    }
  }, [location.pathname]);

  return (
    <TymioUI.Container light={light}>
      <UI.Header light={light} navRefs={navRefs} />
      <Styled.Main>
        <Outlet />
      </Styled.Main>
      <UI.Footer light={light} />
    </TymioUI.Container>
  );
};

export default Layout;
