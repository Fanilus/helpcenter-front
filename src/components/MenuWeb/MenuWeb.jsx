import React from 'react';
import * as Styled from './styled';
import { useNavigate } from 'react-router-dom';

const MenuWeb = ({ light }) => {
  const linkData = [
    { label: 'how it works', path: '/' },
    { label: 'Use cases', path: '/' },
    { label: 'Safety', path: '/' },
    { label: 'Ambassadors', path: '/' },
    { label: 'FAQ', path: '/' },
  ];
  const navigate = useNavigate();
  return (
    <Styled.Container light={light}>
      {linkData.map((item, index) => (
        <Styled.Link
          key={index}
          light={light}
          onClick={() => navigate(item.path)}
        >
          {item.label}
        </Styled.Link>
      ))}
    </Styled.Container>
  );
};

export default MenuWeb;
