import React from 'react';

import * as Styled from './styled';
import * as UI from '../../../../components/index';
import { COLORS } from '../../../../models/colors';

const TableOfContents = ({ tableOfContents }) => {
  // Функция для прокрутки страницы к якорю
  const scrollToAnchor = (anchorId) => {
    const anchorElement = document.getElementById(anchorId);
    if (anchorElement) {
      anchorElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

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
            <UI.Paragraph
              size={'large'}
              color={COLORS.GRAY}
              key={index}
              onClick={() => scrollToAnchor(item.id)}
            >
              {item.title}
            </UI.Paragraph>
          ))}
      </Styled.TableOfContentsWrapper>
    </Styled.TableOfContents>
  );
};

export default TableOfContents;
