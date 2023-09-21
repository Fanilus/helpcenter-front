import React from 'react';
import * as TymioUI from '../index';
import * as Styled from './styled';
import { Medium, Telegram, Twitter } from '../../_DEPRECATED/SocialNetwork';

const Footer = () => {
  return (
    <Styled.Footer>
      <Styled.FooterLinks>
        <TymioUI.LogoIcon />
        <Styled.FooterIcons>
          <div
            onClick={() => window.open('https://medium.com/@tymio', '_blank')}
          >
            <Medium />
          </div>
          <div onClick={() => window.open('https://t.me/tymioapp', '_blank')}>
            <Telegram />
          </div>
          <div
            onClick={() =>
              window.open('https://twitter.com/TYMIOapp', '_blank')
            }
          >
            <Twitter />
          </div>
        </Styled.FooterIcons>
      </Styled.FooterLinks>
      <Styled.Hr />
      <Styled.FooterTerms>
        <span>© 2023 TYMIO. All rights reserved.</span>
        <span
          className="red"
          onClick={() => window.open('https://sell-high.io/terms', '_blank')}
        >
          Terms Of Use
        </span>
      </Styled.FooterTerms>
    </Styled.Footer>
  );
};

export default Footer;
