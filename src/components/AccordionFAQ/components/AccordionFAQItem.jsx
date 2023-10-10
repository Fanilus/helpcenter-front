import React, { useRef } from 'react';

import AccordionIcon from '../../Icons/AccordionIcon/AccordionIcon';
import * as UI from '../../index';
import * as Styled from '../styled';

const AccordionFAQItem = ({ isExpanded, isOpen, id, item, clickHandler }) => {
  const itemRef = useRef(null);

  return (
    <Styled.AccordionFAQItem key={id}>
      <Styled.Content>
        <Styled.Quation
          onClick={() => clickHandler(id)}
          expanded={isOpen ? isExpanded : null}
        >
          <Styled.Question>{item.question}</Styled.Question>
          <AccordionIcon size={'large'} expanded={isOpen ? isExpanded : null} />
        </Styled.Quation>
        <Styled.Collapse isOpen={isOpen} itemRef={itemRef}>
          <Styled.Body ref={itemRef}>
            <UI.Paragraph>{item.answer}</UI.Paragraph>
          </Styled.Body>
        </Styled.Collapse>
      </Styled.Content>
    </Styled.AccordionFAQItem>
  );
};

export default AccordionFAQItem;
