import React, { useEffect, useRef, useState } from 'react';

import * as Styled from './styled';

import AccordionIcon from '../Icons/AccordionIcon/AccordionIcon';

const Accordion = ({ content, trigger, type }) => {
  const ref = useRef(null);
  const [expanded, setExpanded] = useState(false);
  const [height, setHeight] = useState('0');

  const toggleHandler = () => {
    setExpanded((prevState) => !prevState);
  };

  useEffect(() => {
    let height = 0;
    if (expanded) {
      for (const item of ref.current.children) {
        height += item.offsetHeight;
      }
      if (type === 'nested') {
        height = 'auto';
      }
    }
    setHeight(String(height));
  }, [expanded, type]);

  return (
    <Styled.Accordion type={type}>
      <Styled.Trigger onClick={toggleHandler} expanded={expanded} type={type}>
        <Styled.Question>{trigger}</Styled.Question>
        <AccordionIcon size={'large'} expanded={expanded} />
      </Styled.Trigger>
      <Styled.Collapse height={height} ref={ref}>
        <Styled.Content>{content}</Styled.Content>
      </Styled.Collapse>
    </Styled.Accordion>
  );
};

export default Accordion;
