import React from 'react';

import * as Styled from './styled';

const Submenu = ({ title, active }) => {
  return <Styled.SubmenuItem active={active}>{title}</Styled.SubmenuItem>;
};

export default Submenu;
