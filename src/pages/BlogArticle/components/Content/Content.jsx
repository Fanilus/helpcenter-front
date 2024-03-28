import React from 'react';

import * as Styled from './styled';
import * as UI from '../../../../components/index';
import { COLORS } from '../../../../models/colors';

import TableOfContents from '../../components/TableOfContents/TableOfContents';
import EarningBanner from '../../components/EarningBanner/EarningBanner';
import Image from '../../../../img/default_blog_article.png';

const Content = ({ content, tableOfContents }) => {
  return (
    <Styled.Content>
      <Styled.LeftContent>
        <TableOfContents tableOfContents={tableOfContents} />
        <EarningBanner />
        <div></div>
      </Styled.LeftContent>
      <Styled.CenterContent>
        <Styled.MobileAdaptive>
          <TableOfContents tableOfContents={tableOfContents} />
        </Styled.MobileAdaptive>
        {content.map((item, index) => {
          if (Object.keys(item)[0] === 'header')
            return (
              <UI.H2 noMedia color={COLORS.BLACK} key={index}>
                {item.header}
              </UI.H2>
            );
          if (Object.keys(item)[0] === 'bigHeader')
            return (
              <Styled.BigHeader key={index}>
                <UI.H2 noMedia color={COLORS.BLACK}>
                  {item.bigHeader}
                </UI.H2>
              </Styled.BigHeader>
            );
          if (Object.keys(item)[0] === 'text')
            return (
              <UI.Paragraph size={'large'} color={COLORS.BLACK} key={index}>
                {item.text}
              </UI.Paragraph>
            );
          if (Object.keys(item)[0] === 'image')
            return (
              <Styled.ImageWrapper key={index}>
                <Styled.Image
                  src={
                    item.image.link && !item.image.link === 'default'
                      ? item.image.link
                      : Image
                  }
                  alt="Blog Image"
                />
                <UI.Paragraph size={'small'} color={COLORS.BLACK}>
                  {item.image.link && !item.image.link === 'default'
                    ? item.image.imageDescription
                    : 'Image default'}
                </UI.Paragraph>
              </Styled.ImageWrapper>
            );
          if (Object.keys(item)[0] === 'earningBanner')
            return (
              <Styled.MobileAdaptive key={index}>
                <EarningBanner />
              </Styled.MobileAdaptive>
            );
          return '';
        })}
      </Styled.CenterContent>
    </Styled.Content>
  );
};

export default Content;
