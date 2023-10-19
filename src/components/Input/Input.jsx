import React, { useState } from 'react';

import * as Styled from './styled';
import * as UI from '../../components/index';

const Input = ({ placeholder, checkbox, paste, label }) => {
  const [value, setValue] = useState('');
  const [isChecked, setIsChecked] = useState(false);

  const [isFocused, setIsFocused] = useState(false);

  const handleInputChange = (e) => {
    setValue(e.target.value);
  };

  const handleInputFocus = () => {
    setIsFocused(true);
  };

  const handleInputBlur = () => {
    setIsFocused(false);
  };

  const handlePasteClick = () => {
    navigator.clipboard
      .readText()
      .then((clipboardText) => {
        setValue(clipboardText);
      })
      .catch((err) => {
        console.error('Ошибка при чтении буфера обмена: ', err);
      });
  };
  const handleCleanClick = () => {
    setValue('');
  };

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };
  return (
    <Styled.Container>
      {checkbox ? (
        <Styled.Label htmlFor="check">
          <Styled.Checkbox
            type="checkbox"
            id="check"
            name="check"
            checked={isChecked}
            onChange={handleCheckboxChange}
          />
          <Styled.CustomCheckbox></Styled.CustomCheckbox>
          <UI.Paragraph size="small">{label}</UI.Paragraph>
        </Styled.Label>
      ) : (
        <Styled.Input
          placeholder={placeholder}
          value={value}
          onChange={handleInputChange}
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
        />
      )}

      {paste &&
        (value.length > 0 ? (
          <Styled.Text status={isFocused} onClick={handleCleanClick}>
            Clean
          </Styled.Text>
        ) : (
          <Styled.Text status={isFocused} onClick={handlePasteClick}>
            Paste
          </Styled.Text>
        ))}
    </Styled.Container>
  );
};

export default Input;
