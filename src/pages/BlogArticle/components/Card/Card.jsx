import React from 'react';
import { useNavigate } from 'react-router';

import * as Styled from './styled';
import * as UI from '../../../../components/index';
import CircleBlog from '../../../../img/CircleBlog';
import { COLORS } from '../../../../models/colors';

const Card = ({ blog }) => {
  const navigate = useNavigate();

  return (
    <Styled.Card big={blog.big}>
      <Styled.ContentWrapper
        big={blog.big}
        background={COLORS[blog.background]}
        color={COLORS[blog.color]}
      >
        <UI.Button type={'blog'} onClick={() => navigate(-1)}>
          <UI.Paragraph size={'medium'} color={COLORS.BLACK}>
            Back
          </UI.Paragraph>
        </UI.Button>

        <Styled.Header>
          <UI.Paragraph size={'small'} color={COLORS.LIME_LEMON}>
            {blog.heading}
          </UI.Paragraph>
        </Styled.Header>
        <Styled.Content color={COLORS[blog.color]}>
          <UI.HH noMedia={true} color={COLORS.BLACK}>
            {blog.title}
          </UI.HH>
        </Styled.Content>
        <Styled.Date>
          <UI.Paragraph size={'small'} color={COLORS.LIME_LEMON}>
            {blog.date}
          </UI.Paragraph>
        </Styled.Date>
        <Styled.Footer color={COLORS[blog.color]}>
          <Styled.Author>
            <CircleBlog />
            <Styled.AuthorWrapper>
              <UI.Paragraph size={'small'} color={COLORS.BLACK}>
                {blog.authorName}
              </UI.Paragraph>
              <UI.Paragraph size={'small'} color={COLORS.BLACK}>
                {blog.authorOccupation}
              </UI.Paragraph>
            </Styled.AuthorWrapper>
          </Styled.Author>
        </Styled.Footer>
      </Styled.ContentWrapper>
    </Styled.Card>
  );
};

export default Card;
