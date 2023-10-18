import React, { useState } from 'react';
import * as Styled from './styled';
import * as UI from '../../components/index';
import Currency from '../../assets/video/Currency.mp4';

const UIDemo = () => {
  const faqList = [
    {
      title: 'Investors',
      description:
        'For those who seek to earn more from their assets, Tymio offers many variants how to do it. You can set  time limit orders to sell or to buy your asset for better than market price and generate extra yield.  <example>Or can execute smart rebalancing via Tymio. More flexibility. Less emotions. Better results.',
      question: 'Example',
      answer:
        'All questionsAll questionsAll questionsAll questionsAll questionsAll questionsAll questionsAll questionsAll questionsAll questionsAll questionsAll questionsAll questionsAll questionsAll questionsAll questionsAll questionsAll questions',
    },
    {
      title: 'Inexperienced traders',
      description:
        'For those who seek to earn more from their assets, Tymio offers many variants how to do it. You can set  time limit orders to sell or to buy your asset for better than market price and generate extra yield.  <example>Or can execute smart rebalancing via Tymio. More flexibility. Less emotions. Better results.',
      question: 'Example',
      answer:
        'All questionsAll questionsAll questionsAll questionsAll questionsAll questionsAll questionsAll questionsAll questionsAll questionsAll questionsAll questionsAll questionsAll questionsAll questionsAll questionsAll questionsAll questions',
    },
    {
      title: 'Miners',
      description:
        'For those who seek to earn more from their assets, Tymio offers many variants how to do it. You can set  time limit orders to sell or to buy your asset for better than market price and generate extra yield.  <example>Or can execute smart rebalancing via Tymio. More flexibility. Less emotions. Better results.',
      question: 'Example',
      answer:
        'All questionsAll questionsAll questionsAll questionsAll questionsAll questionsAll questionsAll questionsAll questionsAll questionsAll questionsAll questionsAll questionsAll questionsAll questionsAll questionsAll questionsAll questions',
    },
    {
      title: 'Money managers',
      description:
        'For those who seek to earn more from their assets, Tymio offers many variants how to do it. You can set  time limit orders to sell or to buy your asset for better than market price and generate extra yield.  <example>Or can execute smart rebalancing via Tymio. More flexibility. Less emotions. Better results.',
      question: 'Example',
      answer:
        'All questionsAll questionsAll questionsAll questionsAll questionsAll questionsAll questionsAll questionsAll questionsAll questionsAll questionsAll questionsAll questionsAll questionsAll questionsAll questionsAll questionsAll questions',
    },
    {
      title: 'Startups',
      description:
        'For those who seek to earn more from their assets, Tymio offers many variants how to do it. You can set  time limit orders to sell or to buy your asset for better than market price and generate extra yield.  <example>Or can execute smart rebalancing via Tymio. More flexibility. Less emotions. Better results.',
      question: 'Example',
      answer:
        'All questionsAll questionsAll questionsAll questionsAll questionsAll questionsAll questionsAll questionsAll questionsAll questionsAll questionsAll questionsAll questionsAll questionsAll questionsAll questionsAll questionsAll questions',
    },
  ];
  const options = [
    { label: 'how it works', path: '/' },
    { label: 'Use cases', path: '/' },
    { label: 'Safety', path: '/' },
    { label: 'Ambassadors', path: '/' },
    { label: 'FAQ', path: '/' },
  ];

  const optionsSelect = ['Penis', '123', 'zxc'];
  const [valueSelected, setValueSelected] = useState('Penis');
  const onSelectAction = (value) => {
    setValueSelected(value);
  };
  return (
    <Styled.Container>
      <video src={Currency} width="600" height="300" autoPlay loop muted />
      <UI.H1>H1</UI.H1>
      <UI.HH>HH</UI.HH>
      <UI.H2>H2</UI.H2>
      <UI.Paragraph size={'Big'}>Paragraph</UI.Paragraph>
      <UI.Paragraph size={'Medium'}>Paragraph</UI.Paragraph>
      <UI.Paragraph size={'Small'}>Paragraph</UI.Paragraph>
      <UI.Button
        lowercase={true}
        onClick={() => window.open('https://sell-high.io', '_blank')}
      >
        Start earning
      </UI.Button>
      <UI.RouteMenu options={options} />
      <UI.RouteMenu light={true} options={options} />
      <UI.Dropdown onSelectAction={onSelectAction} options={optionsSelect}>
        {valueSelected}
      </UI.Dropdown>
      <UI.AccordionCases faqList={faqList} />
      <UI.Input />
    </Styled.Container>
  );
};

export default UIDemo;
