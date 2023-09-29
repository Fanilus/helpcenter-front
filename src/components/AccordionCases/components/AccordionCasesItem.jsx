import React, { useRef } from 'react';

import AccordionIcon from '../../Icons/AccordionIcon/AccordionIcon';
import * as UI from '../../index';
import * as Styled from '../styled';
import { COLORS } from '../../../models/colors';

const AccordionItem = ({ isExpanded, isOpen, id, item, clickHandler }) => {
  const itemRef = useRef(null);

  return (
    <Styled.AccordionItem key={id}>
      <Styled.Title>
        <UI.Badge>{id + 1}</UI.Badge>
        <UI.H2>{item.title}</UI.H2>
      </Styled.Title>
      <Styled.Content>
        <Styled.Description>
          <UI.Paragraph size={'large'}>{item.description}</UI.Paragraph>
        </Styled.Description>
        <Styled.Quation
          onClick={() => clickHandler(id)}
          expanded={isOpen ? isExpanded : null}
        >
          <Styled.Question>{item.question}</Styled.Question>
          <AccordionIcon expanded={isOpen ? isExpanded : null} />
        </Styled.Quation>
        <Styled.Collapse isOpen={isOpen} itemRef={itemRef}>
          <Styled.Body ref={itemRef}>
            <UI.Paragraph color={COLORS.PURPLE_GRAY}>
              {item.answer}
            </UI.Paragraph>
          </Styled.Body>
        </Styled.Collapse>
      </Styled.Content>
    </Styled.AccordionItem>
  );
};

export default AccordionItem;
