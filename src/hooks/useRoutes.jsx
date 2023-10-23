const APP_LINK = process.env.REACT_APP_APP_LINK;

const useRoutes = () => {
  const header = [
    { label: 'how it works', path: '/how_it_work' },
    { label: 'Use cases', path: '/use_cases' },
    { label: 'Safety', path: '/safety' },
    { label: 'Ambassadors', path: '/ambassadors' },
    { label: 'FAQ', path: '/faq' },
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
  ];

  const allRoutes = [...header, ...media, ...burger, ...footer];

  return {
    header,
    media,
    burger,
    footer,
    allRoutes,
  };
};

export default useRoutes;
