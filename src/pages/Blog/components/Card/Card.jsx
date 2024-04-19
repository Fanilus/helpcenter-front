import React from 'react';

import ArrowBlog from '../../../../img/ArrowBlog';
import CircleBlog from '../../../../img/CircleBlog';
import * as UI from '../../../../components/index';
import { COLORS } from '../../../../models/colors';
import * as Styled from './styled';
import { useNavigate } from 'react-router-dom';

const Card = ({
  big,
  color,
  background,
  heading,
  title,
  description,
  date,
  authorName,
  authorOccupation,
  dataLength,
  id,
}) => {
  const navigate = useNavigate();

  function navigateArrow(id) {
    navigate(`/blog/${id}`);
  }

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
  return (
    <Styled.Card
      big={big}
      dataLength={dataLength}
      onClick={() => navigateArrow(id)}
    >
      <Styled.ContentWrapper big={big} background={background} color={color}>
        <Styled.TopWrapper>
          <Styled.Header big={big}>
            <UI.Paragraph size={'small'} color={COLORS.LIME_LEMON}>
              {heading}
            </UI.Paragraph>
          </Styled.Header>
          <Styled.Content big={big} color={color}>
            {big && <UI.HH color={COLORS.BLACK}>{title}</UI.HH>}
            <UI.H2 noMedia={true} color={COLORS.BLACK}>
              {truncateText(title, 70)}
            </UI.H2>
            <Styled.MobileH2Wrapper big={big}>
              <UI.H2 noMedia={true} color={COLORS.BLACK}>
                {title}
              </UI.H2>
            </Styled.MobileH2Wrapper>
            {big && (
              <UI.Paragraph size={'large'} color={COLORS.BLACK}>
                {description}
              </UI.Paragraph>
            )}
          </Styled.Content>
          <Styled.Date big={big}>
            <UI.Paragraph size={'small'} color={COLORS.LIME_LEMON}>
              {date}
            </UI.Paragraph>
          </Styled.Date>
        </Styled.TopWrapper>
        <Styled.Footer color={color}>
          <Styled.Author>
            <CircleBlog />
            <Styled.AuthorWrapper>
              <UI.Paragraph size={'small'} color={COLORS.BLACK}>
                {authorName}
              </UI.Paragraph>
              <UI.Paragraph size={'small'} color={COLORS.BLACK}>
                {authorOccupation}
              </UI.Paragraph>
            </Styled.AuthorWrapper>
          </Styled.Author>
          <div>
            <ArrowBlog />
          </div>
        </Styled.Footer>
      </Styled.ContentWrapper>
      <Styled.Description big={big}>
        <UI.Paragraph size={'large'} color={COLORS.BLACK}>
          {description}
        </UI.Paragraph>
      </Styled.Description>
    </Styled.Card>
  );
};

export default Card;
