import React from 'react';
import { useNavigate } from 'react-router-dom';

import { useTranslation } from 'react-i18next';

import * as TymioUI from '..';

import { TYPOGRAPHY_SIZE } from '../../models/types';

const RouteMenu = ({
  scroll,
  light,
  active,
  options,
  setInitialOffset,
  ...props
}) => {
  const navigate = useNavigate();
  const { t } = useTranslation();

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
            {t(label)}
          </TymioUI.Paragraph>
        </TymioUI.Menu.Item>
      ))}
    </TymioUI.Menu>
  );
};

export default RouteMenu;
