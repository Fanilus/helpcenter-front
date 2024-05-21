const useRoutes = () => {
  const header = [{ label: 'Main', path: '/' }];
  const burger = [
    {
      label: 'Main',
      path: '/',
    },
  ];
  const media = [
    // { label: 'Telegram', path: 'https://t.me/tymioapp' },
  ];
  const footer = [{ label: 'Main', path: '/' }];

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
