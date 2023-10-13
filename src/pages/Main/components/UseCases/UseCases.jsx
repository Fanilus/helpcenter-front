import React from 'react';

import * as Styled from './styled';
import * as UI from '../../../../components/index';

const UseCases = () => {
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
  return (
    <Styled.UseCases>
      <UI.H1>Use cases</UI.H1>
      <UI.AccordionCases faqList={faqList} />
      <Styled.Board>
        <Styled.Badge>
          <UI.Badge
            height={'fit-content'}
            width={'fit-content'}
            padding={'9px 15px'}
          >
            Custom
          </UI.Badge>
        </Styled.Badge>
        <UI.H2>
          Over 100 ETH or USDC <br /> equivalent? We are ready to <br /> make
          you a special offer. <br /> Contact us at <span>info@Tymio.com</span>
        </UI.H2>
      </Styled.Board>
    </Styled.UseCases>
  );
};

export default UseCases;
