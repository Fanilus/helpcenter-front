import React from 'react';

import * as Styled from './styled';
import * as UI from '../../../../../../components/index';

import { COLORS } from '../../../../../../models/colors';

const SliderCard = ({ image, text, author, date, link, imgAthor }) => {
  return (
    <Styled.SliderCard href={link} target={'_blanc'}>
      <Styled.Content>
        <Styled.IMG
          height={'149px'}
          src={require(`../../../../../../img/media/${image}`).default}
          alt=""
        />
        <UI.Paragraph size={'large'} color={COLORS.GRAY}>
          {text}
        </UI.Paragraph>
      </Styled.Content>
      <Styled.Footer>
        <Styled.Author>
          <Styled.IMG
            width={'20px'}
            src={require(`../../../../../../img/media/${imgAthor}`).default}
            alt=""
          />
          <UI.Paragraph size={'small'} color={COLORS.LEMON}>
            {author}
          </UI.Paragraph>
        </Styled.Author>
        <UI.Paragraph size={'small'} color={COLORS.GRAY_DARK}>
          {date}
        </UI.Paragraph>
      </Styled.Footer>
    </Styled.SliderCard>
  );
};

export default SliderCard;
