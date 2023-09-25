import React from 'react';
import * as Styled from './styled';
import * as UI from '../../components/index';
import { COLORS } from '../../models/colors';
import Currency from '../../assets/video/Currency.mp4';

const UIDemo = () => {
  const faqList = [
    {
      q: 'All questions',
      a: 'All questionsAll questionsAll questionsAll questionsAll questionsAll questionsAll questionsAll questionsAll questionsAll questionsAll questionsAll questionsAll questionsAll questionsAll questionsAll questionsAll questionsAll questions',
    },
    {
      q: 'All questions',
      a: 'All questionsAll questionsAll questions',
    },
    {
      q: 'All questions',
      a: 'All questionsAll questionsAll questions',
    },
  ];
  const options = [
    { label: 'how it works', path: '/' },
    { label: 'Use cases', path: '/' },
    { label: 'Safety', path: '/' },
    { label: 'Ambassadors', path: '/' },
    { label: 'FAQ', path: '/' },
  ];
  return (
    <Styled.Container>
      <video src={Currency} width="600" height="300" autoPlay loop muted />
      <UI.H1>H1</UI.H1>
      <UI.HH>HH</UI.HH>
      <UI.H2>H2</UI.H2>
      <UI.Paragraph size={'Big'}>Paragraph</UI.Paragraph>
      <UI.Paragraph size={'Medium'}>Paragraph</UI.Paragraph>
      <UI.Paragraph size={'Small'}>Paragraph</UI.Paragraph>
      <UI.Button lowercase={true}>Start earning</UI.Button>
      <UI.RouteMenu options={options} />
      <UI.RouteMenu light={true} options={options} />
      <UI.Accordion faqList={faqList} />
      <UI.Input />
    </Styled.Container>
  );
};

export default UIDemo;
