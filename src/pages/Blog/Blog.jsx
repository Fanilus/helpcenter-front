import React from 'react';

import * as Styled from './styled';
import { COLORS } from '../../models/colors';
import Title from './components/Title/Title';
import Card from './components/Card/Card';

const Blog = () => {
  const DATA = [
    {
      heading: 'Heading 1',
      title: 'Name of the article can consist from one to three lines length',
      description:
        'The Decentralized Structured Products Protocol (DSPP) enables the creation of financial products and strategies tailored to the needs of a broad range of non-professional users, thereby making the management of crypto assets more efficient and accessible.',
      date: '03.06.2023 (updated — 04.08.2024)',
      authorName: 'Name of the author ',
      authorOccupation: 'Occupation',
      big: true,
      color: 'BLACK',
      background: 'LIME_LEMON',
    },
    {
      heading: 'Heading 1',
      title: 'Name of the article can consist from one to three lines length',
      description:
        'The Decentralized Structured Products Protocol (DSPP) enables the creation of financial products and strategies tailored to the needs of a broad range of non-professional users, thereby making the management of crypto assets more efficient and accessible.',
      date: '03.06.2023 (updated — 04.08.2024)',
      authorName: 'Name of the author ',
      authorOccupation: 'Occupation',
      big: false,
      color: 'BLACK',
      background: 'LIME_LEMON',
    },
    {
      heading: 'Heading 1',
      title: 'Name of the article can consist from one to three lines length',
      description:
        'The Decentralized Structured Products Protocol (DSPP) enables the creation of financial products and strategies tailored to the needs of a broad range of non-professional users, thereby making the management of crypto assets more efficient and accessible.',
      date: '03.06.2023 (updated — 04.08.2024)',
      authorName: 'Name of the author ',
      authorOccupation: 'Occupation',
      big: false,
      color: 'BLACK',
      background: 'PURPLE-BRIGHT',
    },
    {
      heading: 'Heading 1',
      title: 'Name of the article can consist from one to three lines length',
      description:
        'The Decentralized Structured Products Protocol (DSPP) enables the creation of financial products and strategies tailored to the needs of a broad range of non-professional users, thereby making the management of crypto assets more efficient and accessible.',
      date: '03.06.2023 (updated — 04.08.2024)',
      authorName: 'Name of the author ',
      authorOccupation: 'Occupation',
      big: false,
      color: 'LIGHT',
      background: 'BLACK',
    },
    {
      heading: 'Heading 1',
      title: 'Name of the article can consist from one to three lines length',
      description:
        'The Decentralized Structured Products Protocol (DSPP) enables the creation of financial products and strategies tailored to the needs of a broad range of non-professional users, thereby making the management of crypto assets more efficient and accessible.',
      date: '03.06.2023 (updated — 04.08.2024)',
      authorName: 'Name of the author ',
      authorOccupation: 'Occupation',
      big: false,
      color: 'BLACK',
      background: 'GRADIENT_RED_PINK',
    },
    {
      heading: 'Heading 1',
      title: 'Name of the article can consist from one to three lines length',
      description:
        'The Decentralized Structured Products Protocol (DSPP) enables the creation of financial products and strategies tailored to the needs of a broad range of non-professional users, thereby making the management of crypto assets more efficient and accessible.',
      date: '03.06.2023 (updated — 04.08.2024)',
      authorName: 'Name of the author ',
      authorOccupation: 'Occupation',
      big: false,
      color: 'BLACK',
      background: 'PURPLE_LIGHT',
    },
    {
      heading: 'Heading 1',
      title: 'Name of the article can consist from one to three lines length',
      description:
        'The Decentralized Structured Products Protocol (DSPP) enables the creation of financial products and strategies tailored to the needs of a broad range of non-professional users, thereby making the management of crypto assets more efficient and accessible.',
      date: '03.06.2023 (updated — 04.08.2024)',
      authorName: 'Name of the author ',
      authorOccupation: 'Occupation',
      big: false,
      color: 'LIGHT',
      background: 'GRADIENT_DARK_PURPLE',
    },
  ];
  const bigTrueData = DATA.filter((item) => item.big);
  const bigFalseData = DATA.filter((item) => !item.big);
  const length = DATA.length - bigTrueData.length;
  return (
    <Styled.Blog>
      <Title />
      {bigTrueData.map((item, index) => (
        <Card
          key={index}
          big={item.big}
          color={COLORS[item.color]}
          background={COLORS[item.background]}
          heading={item.heading}
          title={item.title}
          description={item.description}
          date={item.date}
          authorName={item.authorName}
          authorOccupation={item.authorOccupation}
          dataLength={length}
        />
      ))}
      <Styled.Container>
        {bigFalseData.map((item, index) => (
          <Card
            key={index}
            big={item.big}
            color={COLORS[item.color]}
            background={COLORS[item.background]}
            heading={item.heading}
            title={item.title}
            description={item.description}
            date={item.date}
            authorName={item.authorName}
            authorOccupation={item.authorOccupation}
            dataLength={length}
          />
        ))}
      </Styled.Container>
    </Styled.Blog>
  );
};

export default Blog;
