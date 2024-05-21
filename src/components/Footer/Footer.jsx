import React from 'react';
import * as TymioUI from '../';

import * as Styled from './styled';

import { COLORS } from '../../models/colors';
import { NavLink } from 'react-router-dom';
import useRoutes from '../../hooks/useRoutes';
import { TYPOGRAPHY_SIZE } from '../../models/types';
const WELCOME_PAGE = process.env.REACT_APP_WELCOME_PAGE;

const Footer = ({ light }) => {
  const { footer, media, footerWelcome } = useRoutes();
  const FOOTER = WELCOME_PAGE === 'true' ? footerWelcome : footer;
  const currentYear = new Date().getFullYear();

  return (
    <Styled.Footer light={light}>
      <Styled.Hr />
      <Styled.Container>
        <Styled.FooterContent>
          <TymioUI.LogoIconFooter light={light} />
          <TymioUI.Paragraph color={COLORS.GRAY} size={TYPOGRAPHY_SIZE.SMALL}>
            © {currentYear} Tymio. All rights reserved.
          </TymioUI.Paragraph>
        </Styled.FooterContent>
        <Styled.RoutesLinks>
          {FOOTER.map(({ label, path }, index) => (
            <Styled.Route key={index}>
              <NavLink to={path}>
                <TymioUI.Paragraph
                  color={COLORS.PURPLE_DARK}
                  size={TYPOGRAPHY_SIZE.LARGE}
                >
                  {label}
                </TymioUI.Paragraph>
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
                <TymioUI.Paragraph
                  color={COLORS.PURPLE_DARK}
                  size={TYPOGRAPHY_SIZE.LARGE}
                >
                  {label}
                </TymioUI.Paragraph>
              </a>
            </Styled.Route>
          ))}
        </Styled.MediaRoutes>
      </Styled.Container>
    </Styled.Footer>
  );
};

export default Footer;
