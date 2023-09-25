const useRoutes = () => {
  const main = {
    title: 'Main',
    path: '/',
  };
  const routes = [
    {
      title: 'Products',
      path: '/',
    },
    {
      title: 'Developers',
      path: '/',
    },
    {
      title: 'Governance',
      path: '/',
    },
    {
      title: 'About',
      path: '/',
    },
  ];

  const allRoutes = [main, ...routes];
  return {
    main,
    routes,
    allRoutes,
  };
};

export default useRoutes;
