import React from 'react';
import * as TymioUI from '../_DEPRECATED';
import * as UI from '../';

import * as Styled from './styled';

import { COLORS } from '../../models/colors';
import { useNavigate } from 'react-router-dom';

const optionsRoute = [
  { label: 'How it works', path: '/' },
  { label: 'Use cases', path: '/' },
  { label: 'Safety', path: '/' },
  { label: 'FAQ', path: '/' },
  { label: 'Ambassadors', path: '/' },
  { label: 'White Paper', path: '/' },
  { label: 'Terms Of Use', path: '/' },
];

const optionsMedia = [
  { label: 'Medium', path: '/' },
  { label: 'Telegram', path: '/' },
  { label: 'Twitter', path: '/' },
  { label: 'info@Tymio.com', path: '/' },
];

const Footer = ({ light }) => {
  const navigate = useNavigate();

  return (
    <Styled.Footer light={light}>
      <Styled.Hr />
      <Styled.Container>
        <Styled.FooterContent>
          <TymioUI.LogoIconFooter />
          <UI.Paragraph color={COLORS.GRAY} size={'small'}>
            © 2023 Tymio. All rights reserved.
          </UI.Paragraph>
        </Styled.FooterContent>
        <Styled.FooterLinks>
          <Styled.RoutesLinks>
            {optionsRoute.map(({ label, path }, index) => (
              <Styled.Route key={index} onClick={() => navigate(path)}>
                <UI.Paragraph color={COLORS.PURPLE_DARK} size={'large'}>
                  {label}
                </UI.Paragraph>
              </Styled.Route>
            ))}
          </Styled.RoutesLinks>
          <Styled.MediaRoutes>
            {optionsMedia.map(({ label, path }, index) => (
              <Styled.Route key={index} onClick={() => navigate(path)}>
                <UI.Paragraph color={COLORS.PURPLE_DARK} size={'large'}>
                  {label}
                </UI.Paragraph>
              </Styled.Route>
            ))}
          </Styled.MediaRoutes>
        </Styled.FooterLinks>
        <Styled.FooterButton>
          <UI.Button type="primary">start earning</UI.Button>
        </Styled.FooterButton>
      </Styled.Container>
    </Styled.Footer>
  );
};

export default Footer;
