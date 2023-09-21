import React, { useState, useEffect } from 'react';
// import { NavLink, useLocation } from 'react-router-dom';

// import useRoutes from './hooks/useRoutes';
import BurgerMenu from './components/BurgerMenu';
import * as TymioUI from '..';
import * as Styled from './styled';
import { useNavigate } from 'react-router-dom';

const SELL_HIGHT_LINK = process.env.REACT_APP_SELL_HIGHT_LINK;

const Header = () => {
  // const { routes } = useRoutes();
  // const [
  // active,
  //  setActive
  // ] = useState('');
  const navigate = useNavigate();

  const navigateToFAQ = () => {
    navigate('/');
    setTimeout(() => {
      window.location.href = '#faq';
    }, 0);
  };

  const [mobileMenuActive, setMobileMenuActive] = useState(false);
  const [background, setBackground] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', () => {
        if (window.pageYOffset > 0) {
          setBackground(true);
        } else {
          setBackground(false);
        }
      });
    }
  }, []);

  const handleLinkOpen = () => {
    window.open(SELL_HIGHT_LINK, '_blank');
  };

  return (
    <Styled.Header background={background} mobileBackground={mobileMenuActive}>
      <Styled.Flex alignItems={'center'}>
        <Styled.LogoLink to={'/'}>
          <TymioUI.LogoIcon />
        </Styled.LogoLink>
        <Styled.Actions>
          {/* {routes.map(({ title, path }, i) => ( */}
          <Styled.Link>
            <div onClick={navigateToFAQ}>FAQ</div>
          </Styled.Link>
          <Styled.Link>
            <div onClick={() => navigate('/whitepaper')}>Whitepaper</div>
          </Styled.Link>
          {/* ))} */}
        </Styled.Actions>

        <Styled.MobileActions>
          <BurgerMenu
            mobileMenuActive={mobileMenuActive}
            setMobileMenuActive={setMobileMenuActive}
          />
        </Styled.MobileActions>
        <Styled.Actions>
          <TymioUI.Button main small onClick={handleLinkOpen}>
            Launch
          </TymioUI.Button>
        </Styled.Actions>
      </Styled.Flex>
    </Styled.Header>
  );
};

export default Header;
