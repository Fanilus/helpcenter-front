import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import * as Styled from './styled';
import { COLORS } from '../../models/colors';
import Title from './components/Title/Title';
import Card from './components/Card/Card';

import useBlog from './hook/useBlog';

const Blog = () => {
  const { blogs } = useBlog();
  const location = useLocation();
  const [filteredBlogs, setFilteredBlogs] = useState(blogs);

  useEffect(() => {
    setFilteredBlogs(blogs);
  }, [blogs]);

  // const scrollToTop = () => {
  //   window.scrollTo(0, 0);
  // };

  // useEffect(() => {
  //   scrollToTop();
  // }, [location]);

  const handleSetFilteredBlogs = (filteredBlogs) => {
    setFilteredBlogs(filteredBlogs);
  };

  // Разделение данных на большие и маленькие
  const bigTrueData = filteredBlogs.filter((item) => item.big);
  const bigFalseData = filteredBlogs.filter((item) => !item.big);

  return (
    <Styled.Blog>
      <Title blogs={blogs} setFilteredBlogs={handleSetFilteredBlogs} />
      {bigTrueData.map((item, index) => (
        <Card
          key={index}
          big={item.big}
          color={COLORS[item.color]}
          background={COLORS[item.background]}
          heading={item.heading}
          title={item.title}
          description={item.description}
          date={item.date}
          authorName={item.authorName}
          authorOccupation={item.authorOccupation}
          id={item.id}
          dataLength={filteredBlogs.length}
        />
      ))}
      <Styled.Container>
        {bigFalseData.map((item, index) => (
          <Card
            key={index}
            big={item.big}
            color={COLORS[item.color]}
            background={COLORS[item.background]}
            heading={item.heading}
            title={item.title}
            description={item.description}
            date={item.date}
            authorName={item.authorName}
            authorOccupation={item.authorOccupation}
            id={item.id}
            dataLength={filteredBlogs.length}
          />
        ))}
      </Styled.Container>
    </Styled.Blog>
  );
};

export default Blog;
