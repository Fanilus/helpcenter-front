import React from 'react';
import * as TymioUI from '../../../../components';
import * as Styled from '../styled';
import * as Hooks from '../hooks';

const FAQ = () => {
  const { faq } = Hooks.useFaq();
  return (
    <Styled.FaqWrapper id="faq">
      <Styled.FaqTitle>FAQ</Styled.FaqTitle>
      {faq.map(({ title, content }, i) => (
        <TymioUI.Accordion key={i} title={title}>
          {content}
        </TymioUI.Accordion>
      ))}
    </Styled.FaqWrapper>
  );
};

export default FAQ;
