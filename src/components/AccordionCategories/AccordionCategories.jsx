import React, { useState, useRef, useEffect } from 'react';

import * as Styled from './styled.js';
import * as TymioUI from '../index';
import AccordionsCategoriesArrow from '../Icons/AccordionsCategoriesArrow/AccordionsCategoriesArrow.jsx';

import { useTranslation } from 'react-i18next';

const AccordionCategories = ({ label = 'CATEGORIES', children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef(null);
  const { t } = useTranslation();

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event) => {
    if (ref.current && !ref.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <Styled.AccordionCategories ref={ref}>
      <Styled.Selector onClick={handleToggle} active={isOpen}>
        <TymioUI.Paragraph size={'medium'}>{t(label)}</TymioUI.Paragraph>
        <AccordionsCategoriesArrow />
      </Styled.Selector>
      {isOpen && <Styled.Content>{children}</Styled.Content>}
    </Styled.AccordionCategories>
  );
};

export default AccordionCategories;
