import React from 'react';
import * as Styled from './styled';
import { COLORS } from '../../../../models/colors';
import * as UI from '../../../../components/index';

const Title = () => {
  return (
    <Styled.TitleWrapper>
      <Styled.Title>
        <UI.Button active={true} type={'blog'}>
          <UI.Paragraph size={'medium'} color={COLORS.BLACK}>
            ALL
          </UI.Paragraph>
        </UI.Button>
        <UI.Button active={false} type={'blog'}>
          <UI.Paragraph size={'medium'} color={COLORS.BLACK}>
            Heading 1
          </UI.Paragraph>
        </UI.Button>
        <UI.Button type={'blog'}>
          <UI.Paragraph size={'medium'} color={COLORS.BLACK}>
            Heading 2
          </UI.Paragraph>
        </UI.Button>
        <UI.Button type={'blog'}>
          <UI.Paragraph size={'medium'} color={COLORS.BLACK}>
            Heading 3
          </UI.Paragraph>
        </UI.Button>
        <UI.Button type={'blog'}>
          <UI.Paragraph size={'medium'} color={COLORS.BLACK}>
            Heading 4
          </UI.Paragraph>
        </UI.Button>
      </Styled.Title>
      <Styled.Blur />
    </Styled.TitleWrapper>
  );
};

export default Title;
