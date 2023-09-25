// import React, { useEffect } from 'react';
// // import { NavLink } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';
// // import useRoutes from '../hooks/useRoutes';
// import * as Styled from '../styled';
// import * as TymioUI from '../../_DEPRECATED';
// import { Medium, Telegram, Twitter } from '../../_DEPRECATED/SocialNetwork';

// const BurgerMenu = ({ mobileMenuActive, setMobileMenuActive }) => {
//   // const { routes } = useRoutes();
//   const navigate = useNavigate();

//   const navigateToFAQ = () => {
//     navigate('/');
//     setTimeout(() => {
//       window.location.href = '#faq';
//     }, 0);
//   };

//   const toggleMenu = () => {
//     setMobileMenuActive((prevState) => !prevState);
//   };

//   useEffect(() => {
//     if (mobileMenuActive) {
//       document.documentElement.style.overflowY = 'hidden';
//     } else {
//       document.documentElement.style.overflowY = 'auto';
//     }
//   }, [mobileMenuActive]);
//   return (
//     <>
//       <Styled.ActionIcon onClick={toggleMenu}>
//         {mobileMenuActive ? (
//           <TymioUI.CloseIcon />
//         ) : (
//           <TymioUI.ArrowDown width={24} />
//         )}
//       </Styled.ActionIcon>

//       <Styled.BurgerMenu active={mobileMenuActive ? 'true' : undefined}>
//         <Styled.Content>
//           <Styled.Routes>
//             {/* {routes.map(({ path, title }, i) => ( */}
//             <Styled.Route>
//               <div onClick={navigateToFAQ}>FAQ</div>
//             </Styled.Route>
//             <Styled.Route>
//               <div onClick={() => navigate('/whitepaper')}>White Paper</div>
//             </Styled.Route>
//             {/* ))} */}
//           </Styled.Routes>
//           <Styled.Socials>
//             <div
//               onClick={() => window.open('https://medium.com/@tymio', '_blank')}
//             >
//               <Medium />
//             </div>
//             <div onClick={() => window.open('https://t.me/tymioapp', '_blank')}>
//               <Telegram />
//             </div>
//             <div
//               onClick={() =>
//                 window.open('https://twitter.com/TYMIOapp', '_blank')
//               }
//             >
//               <Twitter />
//             </div>
//           </Styled.Socials>
//         </Styled.Content>
//         <Styled.Overlay onClick={toggleMenu} />
//       </Styled.BurgerMenu>
//     </>
//   );
// };

// export default BurgerMenu;
