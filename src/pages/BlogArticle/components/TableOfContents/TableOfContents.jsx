import React from 'react';

import * as Styled from './styled';
import * as UI from '../../../../components/index';
import { COLORS } from '../../../../models/colors';

const TableOfContents = ({ tableOfContents }) => {
  return (
    <Styled.TableOfContents>
      <Styled.TableOfContentsTitle>
        <UI.H2 noMedia={true} color={COLORS.GRAY}>
          Content
        </UI.H2>
      </Styled.TableOfContentsTitle>
      <Styled.TableOfContentsWrapper>
        {tableOfContents &&
          tableOfContents.map((item, index) => (
            <UI.Paragraph size={'large'} color={COLORS.GRAY} key={index}>
              {item}
            </UI.Paragraph>
          ))}
      </Styled.TableOfContentsWrapper>
    </Styled.TableOfContents>
  );
};

export default TableOfContents;
