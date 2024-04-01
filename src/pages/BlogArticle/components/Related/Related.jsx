import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import * as Styled from './styled';
import * as UI from '../../../../components/index';
import { COLORS } from '../../../../models/colors';
import CircleBlog from '../../../../img/CircleBlog';
import ArrowBlog from '../../../../img/ArrowBlog';

const Related = ({ related }) => {
  const navigate = useNavigate();
  const location = useLocation();

  function truncateText(text, maxLength) {
    if (text.length <= maxLength) {
      return text;
    } else {
      let truncatedText = text.substring(0, maxLength);

      truncatedText = truncatedText.substring(
        0,
        Math.min(truncatedText.length, truncatedText.lastIndexOf(' '))
      );
      return truncatedText + ' ...';
    }
  }

  function navigateArrow(id) {
    if (location.pathname !== `/blog/${id}`) {
      navigate(`/blog/${id}`);
      window.scrollTo(0, 0);
    }
  }

  return (
    <Styled.Related>
      <Styled.Title>
        <UI.H2 noMedia color={COLORS.BLACK}>
          Related
        </UI.H2>
      </Styled.Title>
      <Styled.MiniCardWrapper>
        {related.map((item, index) => (
          <Styled.MiniCard key={index}>
            <Styled.ContentWrapper>
              <Styled.Header>
                <UI.Paragraph size={'small'} color={COLORS.BLACK}>
                  {item.header}
                </UI.Paragraph>
              </Styled.Header>
              <Styled.Content>
                <UI.H2 noMedia={true} color={COLORS.BLACK}>
                  {truncateText(item.title, 35)}
                </UI.H2>
              </Styled.Content>
              <Styled.Date>
                <UI.Paragraph size={'small'} color={COLORS.BLACK}>
                  {item.date}
                </UI.Paragraph>
              </Styled.Date>
            </Styled.ContentWrapper>
            <Styled.Footer>
              <Styled.Author>
                <CircleBlog />
                <Styled.AuthorWrapper>
                  <UI.Paragraph size={'small'} color={COLORS.BLACK}>
                    {item.nameAuthor}
                  </UI.Paragraph>
                  <UI.Paragraph size={'small'} color={COLORS.BLACK}>
                    {item.occupation}
                  </UI.Paragraph>
                </Styled.AuthorWrapper>
              </Styled.Author>
              <div onClick={() => navigateArrow(item.id)}>
                <ArrowBlog />
              </div>
            </Styled.Footer>
          </Styled.MiniCard>
        ))}
      </Styled.MiniCardWrapper>
    </Styled.Related>
  );
};

export default Related;
