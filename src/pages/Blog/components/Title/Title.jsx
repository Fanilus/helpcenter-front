import React, { useState } from 'react';

import * as Styled from './styled';
import { COLORS } from '../../../../models/colors';
import * as UI from '../../../../components/index';

const Title = () => {
  const [filters, setFilters] = useState([]);
  console.log(filters);

  const toggleFilter = (filter) => {
    if (filters.includes(filter)) {
      setFilters(filters.filter((f) => f !== filter));
    } else {
      setFilters([...filters, filter]);
    }
  };

  const isFilterActive = (filter) => {
    return filters.includes(filter);
  };

  return (
    <Styled.TitleWrapper>
      <Styled.Title>
        <UI.Button
          active={filters.length === 0}
          type={'blog'}
          onClick={() => setFilters([])}
        >
          <UI.Paragraph size={'medium'} color={COLORS.BLACK}>
            ALL
          </UI.Paragraph>
        </UI.Button>
        <UI.Button
          active={isFilterActive('investing')}
          type={'blog'}
          onClick={() => toggleFilter('investing')}
        >
          <UI.Paragraph size={'medium'} color={COLORS.BLACK}>
            investing
          </UI.Paragraph>
        </UI.Button>
        {/* <UI.Button
          active={isFilterActive('heading2')}
          type={'blog'}
          onClick={() => toggleFilter('heading2')}
        >
          <UI.Paragraph size={'medium'} color={COLORS.BLACK}>
            Heading 2
          </UI.Paragraph>
        </UI.Button>
        <UI.Button
          active={isFilterActive('heading3')}
          type={'blog'}
          onClick={() => toggleFilter('heading3')}
        >
          <UI.Paragraph size={'medium'} color={COLORS.BLACK}>
            Heading 3
          </UI.Paragraph>
        </UI.Button>
        <UI.Button
          active={isFilterActive('heading4')}
          type={'blog'}
          onClick={() => toggleFilter('heading4')}
        >
          <UI.Paragraph size={'medium'} color={COLORS.BLACK}>
            Heading 4
          </UI.Paragraph>
        </UI.Button> */}
      </Styled.Title>
      <Styled.Blur />
    </Styled.TitleWrapper>
  );
};

export default Title;
