import React, { useState } from 'react';

import * as TymioUI from '../../_DEPRECATED/index';
import * as Styled from './styled';
import Submenu from './Submenu';

const Menu = ({ title, submenu }) => {
  const [active, setActive] = useState(false);

  return (
    <Styled.Menu>
      <Styled.MenuItem
        onClick={() => setActive((prevState) => !prevState)}
        active={active}
      >
        <span>{title}</span>
        <TymioUI.ArrowDown width={12} color={'turquoise'} />
      </Styled.MenuItem>
      <Styled.Submenu active={active}>
        {submenu.map(({ title }, key) => (
          <Submenu key={key} title={title} active={active}></Submenu>
        ))}
      </Styled.Submenu>
    </Styled.Menu>
  );
};

export default Menu;
