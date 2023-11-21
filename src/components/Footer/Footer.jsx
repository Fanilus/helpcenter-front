import React from 'react';
import * as TymioUI from '../_DEPRECATED';
import * as UI from '../';

import * as Styled from './styled';

import { COLORS } from '../../models/colors';
import { NavLink } from 'react-router-dom';
import useRoutes from '../../hooks/useRoutes';
import { TYPOGRAPHY_SIZE } from '../../models/types';

const Footer = ({ light }) => {
  const { footer, media } = useRoutes();

  return (
    <Styled.Footer light={light}>
      <Styled.Hr />
      <Styled.Container>
        <Styled.FooterContent>
          <TymioUI.LogoIconFooter />
          <UI.Paragraph color={COLORS.GRAY} size={TYPOGRAPHY_SIZE.SMALL}>
            © 2023 Tymio. All rights reserved.
          </UI.Paragraph>
        </Styled.FooterContent>
        {/* <Styled.FooterLinks> */}
        <Styled.RoutesLinks>
          {footer.map(({ label, path }, index) => (
            <Styled.Route key={index}>
              <NavLink to={path}>
                <UI.Paragraph
                  color={COLORS.PURPLE_DARK}
                  size={TYPOGRAPHY_SIZE.LARGE}
                >
                  {label}
                </UI.Paragraph>
              </NavLink>
            </Styled.Route>
          ))}
        </Styled.RoutesLinks>
        <Styled.MediaRoutes>
          {media.map(({ label, path, type }, index) => (
            <Styled.Route key={index}>
              <a
                href={path}
                rel={type !== 'mail' ? 'noreferrer' : []}
                target={type !== 'mail' ? '_blank' : '_self'}
              >
                <UI.Paragraph
                  color={COLORS.PURPLE_DARK}
                  size={TYPOGRAPHY_SIZE.LARGE}
                >
                  {label}
                </UI.Paragraph>
              </a>
            </Styled.Route>
          ))}
        </Styled.MediaRoutes>
        {/* </Styled.FooterLinks> */}
      </Styled.Container>
    </Styled.Footer>
  );
};

export default Footer;
