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
  return (
    <Styled.Card big={big} dataLength={dataLength}>
      <Styled.ContentWrapper big={big} background={background} color={color}>
        <Styled.Header>
          <UI.Paragraph size={'small'} color={COLORS.LIME_LEMON}>
            {heading}
          </UI.Paragraph>
        </Styled.Header>
        <Styled.Content big={big} color={color}>
          {big && <UI.HH color={COLORS.BLACK}>{title}</UI.HH>}
          <UI.H2 noMedia={true} color={COLORS.BLACK}>
            {title}
          </UI.H2>
          {big && (
            <UI.Paragraph size={'large'} color={COLORS.BLACK}>
              {description}
            </UI.Paragraph>
          )}
        </Styled.Content>
        <Styled.Date>
          <UI.Paragraph size={'small'} color={COLORS.LIME_LEMON}>
            {date}
          </UI.Paragraph>
        </Styled.Date>
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
          <div onClick={() => navigateArrow(id)}>
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
