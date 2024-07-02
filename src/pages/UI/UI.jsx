import React from 'react';

import * as TymioUI from '../../components';

const UI = () => {
  const data = [
    'categories1',
    'categories2',
    'categories3',
    'categories4',
    'categories5',
  ];

  return (
    <div
      style={{
        background: 'white',
        height: '100vh',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <TymioUI.ArticleLink>ArticleLink</TymioUI.ArticleLink>
      <TymioUI.MenuLink>MenuLink</TymioUI.MenuLink>
      <TymioUI.MenuLink active={true}>MenuLink</TymioUI.MenuLink>

      <div style={{ width: '250px' }}>{/* <TymioUI.Search /> */}</div>
      <div>
        <TymioUI.AccordionCategories>
          <TymioUI.RoutingMenu menuItems={data} />
        </TymioUI.AccordionCategories>
      </div>
      <div>
        <TymioUI.AccordionCategories>
          <TymioUI.RoutingMenu isSection menuItems={data} />
        </TymioUI.AccordionCategories>
      </div>

      <div style={{ width: '250px' }}>
        <TymioUI.Dropdown options={data} placeholder={'Select a topic '} />
      </div>
    </div>
  );
};

export default UI;
