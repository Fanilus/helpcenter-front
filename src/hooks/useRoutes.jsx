const APP_LINK = process.env.REACT_APP_APP_LINK;

const useRoutes = () => {
  const header = [
    { label: 'how it works', path: '/how_it_work' },
    { label: 'Use cases', path: '/use_cases' },
    { label: 'Safety', path: '/safety' },
    { label: 'FAQ', path: '/faq' },
    { label: 'Ambassadors', path: '/ambassadors' },
    { label: 'Blog', path: '/blog' },
  ];
  const burger = [
    {
      label: 'How it works',
      path: '/how_it_work',
    },
    {
      label: 'Use cases',
      path: '/use_cases',
    },
    {
      label: 'Safety',
      path: '/safety',
    },
    {
      label: 'FAQ',
      path: '/faq',
    },
    {
      label: 'Ambassadors',
      path: '/ambassadors',
    },
    {
      label: 'White Paper',
      path: '/whitepaper',
    },
    {
      label: 'Terms Of Use',
      path: `${APP_LINK}/terms`,
    },
    {
      label: 'Club',
      path: `/club`,
    },
    { label: 'Blog', path: '/blog' },
  ];
  const burgerWelcome = [
    {
      label: 'How it works',
      path: 'https://tymio.com/how_it_work',
    },
    {
      label: 'Use cases',
      path: 'https://tymio.com/use_cases',
    },
    {
      label: 'Safety',
      path: 'https://tymio.com/safety',
    },
    {
      label: 'FAQ',
      path: 'https://tymio.com/faq',
    },
    {
      label: 'Ambassadors',
      path: 'https://tymio.com/ambassadors',
    },
    {
      label: 'White Paper',
      path: 'https://tymio.com/whitepaper',
    },
    {
      label: 'Terms Of Use',
      path: `${APP_LINK}/terms`,
    },
    {
      label: 'Club',
      path: `https://tymio.com/club`,
    },
  ];
  const media = [
    { label: 'DeBank', path: 'https://debank.com/official-account/111827' },
    { label: 'Telegram', path: 'https://t.me/tymioapp' },
    { label: 'Twitter', path: 'https://twitter.com/TYMIOapp' },
    { type: 'mail', label: 'info@Tymio.com', path: 'mailto:info@Tymio.com' },
  ];
  const footer = [
    { label: 'How it works', path: '/how_it_work' },
    { label: 'Use cases', path: '/use_cases' },
    { label: 'Safety', path: '/safety' },
    { label: 'FAQ', path: '/faq' },
    { label: 'Ambassadors', path: '/ambassadors' },
    { label: 'White Paper', path: '/whitepaper' },
    { label: 'Terms Of Use', path: `/terms` },
    { label: 'Club', path: `/club` },
  ];

  const footerWelcome = [
    { label: 'How it works', path: 'https://tymio.com/how_it_work' },
    { label: 'Use cases', path: 'https://tymio.com/use_cases' },
    { label: 'Safety', path: 'https://tymio.com/safety' },
    { label: 'FAQ', path: 'https://tymio.com/faq' },
    { label: 'Ambassadors', path: 'https://tymio.com/ambassadors' },
    { label: 'White Paper', path: 'https://tymio.com/whitepaper' },
    { label: 'Terms Of Use', path: `https://tymio.com/terms` },
    { label: 'Club', path: `https://tymio.com/club` },
  ];

  const allRoutes = [...header, ...media, ...burger, ...footer];

  return {
    header,
    media,
    burger,
    burgerWelcome,
    footer,
    allRoutes,
    footerWelcome,
  };
};

export default useRoutes;
