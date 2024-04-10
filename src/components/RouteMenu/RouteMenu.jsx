import React from 'react';
import * as TymioUI from '../';
import { useNavigate } from 'react-router-dom';
import { TYPOGRAPHY_SIZE } from '../../models/types';

const RouteMenu = ({ scroll, light, active, options, ...props }) => {
  const navigate = useNavigate();
  console.log(scroll);
  return (
    <TymioUI.Menu scroll={scroll} light={light} {...props}>
      {options.map(({ path, label }, index) => (
        <TymioUI.Menu.Item
          light={light}
          key={index}
          active={path === active}
          onClick={() => navigate(path)}
        >
          <TymioUI.Paragraph size={TYPOGRAPHY_SIZE.SMALL}>
            {label}
          </TymioUI.Paragraph>
        </TymioUI.Menu.Item>
      ))}
    </TymioUI.Menu>
  );
};

export default RouteMenu;
