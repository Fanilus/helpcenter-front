import React from 'react';

import * as Styled from './styled';
import * as UI from '../../../../components/index';
import { COLORS } from '../../../../models/colors';

import TableOfContents from '../../components/TableOfContents/TableOfContents';
import EarningBanner from '../../components/EarningBanner/EarningBanner';
import Image from '../../../../img/default_blog_article.png';
import TymioBanner from '../TymioBanner/TymioBanner';

const Content = ({ content, tableOfContents }) => {
  return (
    <Styled.Content>
      <Styled.LeftContent>
        {tableOfContents && (
          <TableOfContents tableOfContents={tableOfContents} />
        )}
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
              <UI.H2
                noMedia
                color={COLORS.BLACK}
                key={index}
                id={item.id}
                dangerouslySetInnerHTML={{ __html: item.header }}
              />
            );
          if (Object.keys(item)[0] === 'bigHeader')
            return (
              <Styled.BigHeader key={index} id={item.id}>
                <UI.H2
                  noMedia
                  color={COLORS.BLACK}
                  dangerouslySetInnerHTML={{ __html: item.bigHeader }}
                />
              </Styled.BigHeader>
            );
          if (Object.keys(item)[0] === 'text')
            return (
              <UI.Paragraph
                size={'large'}
                color={COLORS.BLACK}
                key={index}
                dangerouslySetInnerHTML={{ __html: item.text }}
              />
            );
          if (Object.keys(item)[0] === 'image')
            return (
              <Styled.ImageWrapper key={index}>
                <Styled.Image
                  src={
                    item.image.link && item.image.link !== 'default'
                      ? require(`../../../../img/${item.image.link}`).default
                      : Image
                  }
                  alt="Blog Image"
                />
                {item.image.link &&
                  item.image.link !== 'default' &&
                  item.image.imageDescription && (
                    <UI.Paragraph size={'small'} color={COLORS.BLACK}>
                      {item.image.imageDescription}
                    </UI.Paragraph>
                  )}
              </Styled.ImageWrapper>
            );

          if (Object.keys(item)[0] === 'earningBanner')
            return (
              <Styled.MobileAdaptive key={index}>
                <EarningBanner />
              </Styled.MobileAdaptive>
            );
          if (Object.keys(item)[0] === 'tymioBanner') return <TymioBanner />;
          if (Object.keys(item)[0] === 'list')
            return (
              <Styled.ListContainer key={index}>
                {item.list.map((i, index) => (
                  <Styled.List key={index} gap={i.listItem ? true : false}>
                    <Styled.TitleList>
                      <Styled.ListIcon>&#9679;</Styled.ListIcon>
                      <UI.Paragraph
                        size={'large'}
                        color={COLORS.BLACK}
                        dangerouslySetInnerHTML={{
                          __html: `${i.label} ${i.listItem ? ':' : ''}`,
                        }}
                      />
                    </Styled.TitleList>
                    <Styled.ListWrapper>
                      {i.listItem &&
                        i.listItem.map((i, index) => (
                          <Styled.ListItem key={index}>
                            <Styled.ListIcon>&#9675;</Styled.ListIcon>
                            <UI.Paragraph
                              size={'big'}
                              color={COLORS.BLACK}
                              dangerouslySetInnerHTML={{ __html: i }}
                            />
                          </Styled.ListItem>
                        ))}
                    </Styled.ListWrapper>
                  </Styled.List>
                ))}
              </Styled.ListContainer>
            );
          return '';
        })}
      </Styled.CenterContent>
    </Styled.Content>
  );
};

export default Content;
