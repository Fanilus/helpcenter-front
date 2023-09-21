import React from 'react';
import Logo from '../../../img/logo.svg';
import * as Styled from './styled';

const LogoIcon = ({ size }) => {
  let width;
  let height;
  switch (size) {
    case 'large':
      width = 420;
      height = 160;
      break;
    default:
      width = 132;
      height = 50;
      break;
  }
  return <Styled.Logo src={Logo} alt="" width={width} height={height} />;
};

export default LogoIcon;
