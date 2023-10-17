import React, { useState } from 'react';
import { useOuterClick } from '../../hooks';
import {
  DropDownContainer,
  DropDownHeader,
  DropDownList,
  DropDownListContainer,
  ListItem,
} from './styled';
import SelectArrow from '../Icons/SelectArrow/SelectArrow';

const Dropdown = ({ options, onSelectAction, children, valueSelected }) => {
  const dropdownMenuRef = useOuterClick((ev) => {
    if (isOpen) {
      setIsOpen(false);
    }
  });
  const [isOpen, setIsOpen] = useState(false);
  const toggling = () => setIsOpen(!isOpen);

  const onOptionClicked = (value) => () => {
    setIsOpen(false);

    if (onSelectAction) {
      onSelectAction(value);
    }
  };

  return (
    <DropDownContainer ref={dropdownMenuRef}>
      <DropDownHeader
        valueSelected={valueSelected}
        isOpen={isOpen}
        onClick={toggling}
      >
        <span>{children}</span>
        <SelectArrow isOpen={isOpen} />
      </DropDownHeader>
      {isOpen && (
        <DropDownListContainer>
          <DropDownList>
            {options.map((option, index) => (
              <ListItem onClick={onOptionClicked(option)} key={index}>
                {option}
              </ListItem>
            ))}
          </DropDownList>
        </DropDownListContainer>
      )}
    </DropDownContainer>
  );
};

export default Dropdown;
