import React from 'react';

import * as Styled from './styled';
import * as UI from '../../../../components/index';

const FAQ = () => {
  const faqList = [
    {
      question: 'What is Tymio?',
      answer:
        'Tymio is a DeFi crypto service pionering a concept of “time limit orders with yield”. This idea allows you to monetize your readiness to sell or buy assets for a specific price. You could earn double and even triple digit APR (annual percentage rate) with our app.',
    },
    {
      question: 'What do I need to earn yield on Tymio app?',
      answer:
        'Tymio is a DeFi crypto service pionering a concept of “time limit orders with yield”. This idea allows you to monetize your readiness to sell or buy assets for a specific price. You could earn double and even triple digit APR (annual percentage rate) with our app.',
    },
    {
      question:
        'I have ETH which I am ready to sell or I have USDC and ready to buy ETH. How do I execute a transaction?',
      answer:
        'Tymio is a DeFi crypto service pionering a concept of “time limit orders with yield”. This idea allows you to monetize your readiness to sell or buy assets for a specific price. You could earn double and even triple digit APR (annual percentage rate) with our app.',
    },
    {
      question: 'What do I need to earn yield on Tymio? app?',
      answer:
        'Tymio is a DeFi crypto service pionering a concept of “time limit orders with yield”. This idea allows you to monetize your readiness to sell or buy assets for a specific price. You could earn double and even triple digit APR (annual percentage rate) with our app.',
    },
    {
      question:
        'I have ETH which I am ready to sell or I have USDC and ready to buy ETH. How do I execute a transaction?',
      answer:
        'Tymio is a DeFi crypto service pionering a concept of “time limit orders with yield”. This idea allows you to monetize your readiness to sell or buy assets for a specific price. You could earn double and even triple digit APR (annual percentage rate) with our app.',
    },
  ];
  return (
    <Styled.FAQ>
      <UI.H1>FAQ</UI.H1>
      <UI.AccordionFAQ faqList={faqList} />
    </Styled.FAQ>
  );
};

export default FAQ;
