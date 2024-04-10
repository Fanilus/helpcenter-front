import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import * as Styled from './styled';
import { COLORS } from '../../models/colors';
import Title from './components/Title/Title';
import Card from './components/Card/Card';

import useBlog from './hook/useBlog';

const Blog = () => {
  const { blogs } = useBlog();
  const location = useLocation();

  const bigTrueData = blogs.length > 0 ? blogs.filter((item) => item.big) : [];
  const bigFalseData =
    blogs.length > 0 ? blogs.filter((item) => !item.big) : [];
  const length = blogs.length - bigTrueData.length;

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    scrollToTop();
  }, [location]);

  return (
    <Styled.Blog>
      <Title />
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
          dataLength={length}
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
            dataLength={length}
          />
        ))}
      </Styled.Container>
    </Styled.Blog>
  );
};

export default Blog;
