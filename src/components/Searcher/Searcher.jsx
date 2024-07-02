import React from 'react';

import * as Styled from './styled.js';
import * as TymioUI from '../index';
import { COLORS } from '../../models/colors.js';

import SearchIcon from '../Icons/SearchIcon/SearchIcon.jsx';

import useSearchFormik from './hook/useFormik.js';
import { useTranslation } from 'react-i18next';

const Searcher = ({ error, onChange, ...props }) => {
  const formik = useSearchFormik();
  const { t } = useTranslation();

  const handleChange = async (e) => {
    const { value } = e.target;
    await formik.setFieldValue('search', value, false);
  };
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      formik.handleSubmit();
    }
  };
  return (
    <Styled.SectionWrapper>
      <Styled.Search>
        <SearchIcon />
        <input
          type="text"
          placeholder={t('Search')}
          value={formik.values.search}
          onChange={handleChange}
          error={formik.errors.search}
          onKeyDown={handleKeyDown}
        />
        {formik.errors.search && (
          <Styled.FormErrorText>{t(formik.errors.search)}</Styled.FormErrorText>
        )}
      </Styled.Search>

      <TymioUI.Button type="submit" onClick={formik.handleSubmit}>
        <TymioUI.Paragraph size={'medium'} color={COLORS.BLACK}>
          {t('Search')}
        </TymioUI.Paragraph>
      </TymioUI.Button>
    </Styled.SectionWrapper>
  );
};

export default Searcher;
