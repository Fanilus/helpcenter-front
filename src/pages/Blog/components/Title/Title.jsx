import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import * as Styled from './styled';
import { COLORS } from '../../../../models/colors';
import * as UI from '../../../../components/index';

const Title = ({ blogs, setFilteredBlogs }) => {
  const [filters, setFilters] = useState(['all']);

  const toggleFilter = (filter) => {
    if (filter === 'all') {
      setFilters(['all']);
    } else {
      const newFilters = filters.includes(filter)
        ? filters.filter((f) => f !== filter)
        : [...filters.filter((f) => f !== 'all'), filter];
      setFilters(newFilters);
    }
  };

  const isFilterActive = (filter) =>
    filters.includes(filter) || (filter === 'all' && filters.length === 0);

  const filterBlogs = (newFilters, allBlogs) => {
    let filtered = allBlogs;

    if (newFilters.length > 0 && !newFilters.includes('all')) {
      filtered = allBlogs.filter((item) =>
        newFilters.includes(item.heading.toLowerCase())
      );
    }

    if (filtered.length > 0) {
      filtered = filtered.map((item, index) => ({
        ...item,
        big: index === 0,
      }));
    }

    setFilteredBlogs(filtered);
  };

  useEffect(() => {
    filterBlogs(filters, blogs);
  }, [filters, blogs]);

  return (
    <Styled.TitleWrapper>
      <Styled.Title>
        <UI.Button
          active={isFilterActive('all')}
          type="blog"
          onClick={() => toggleFilter('all')}
        >
          <UI.Paragraph size="medium" color={COLORS.BLACK}>
            ALL
          </UI.Paragraph>
        </UI.Button>
        <UI.Button
          active={isFilterActive('investing')}
          type="blog"
          onClick={() => toggleFilter('investing')}
        >
          <UI.Paragraph size="medium" color={COLORS.BLACK}>
            investing
          </UI.Paragraph>
        </UI.Button>
        <UI.Button
          active={isFilterActive('news')}
          type="blog"
          onClick={() => toggleFilter('news')}
        >
          <UI.Paragraph size="medium" color={COLORS.BLACK}>
            news
          </UI.Paragraph>
        </UI.Button>
      </Styled.Title>
      <Styled.Blur />
    </Styled.TitleWrapper>
  );
};

export default Title;
