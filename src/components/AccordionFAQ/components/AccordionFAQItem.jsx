import React, { useRef, useState, useEffect } from 'react';

import AccordionIcon from '../../Icons/AccordionIcon/AccordionIcon';
import * as UI from '../../index';
import * as Styled from '../styled';
import { TYPOGRAPHY_SIZE } from '../../../models/types';

const AccordionFAQItem = ({
  isExpanded,
  isOpen,
  id,
  item,
  clickHandler,
  setInternalHeightSum,
}) => {
  const itemRef = useRef(null);
  const [height, setHeight] = useState(0);

  console.log(isOpen);
  useEffect(() => {
    if (itemRef.current) {
      setHeight(itemRef.current.scrollHeight);
      setInternalHeightSum(isOpen ? itemRef.current.scrollHeight : 0);
    }
  }, [isOpen]);

  return (
    <UI.Animation>
      <Styled.AccordionFAQItem key={id}>
        <Styled.Content>
          <Styled.Quation
            onClick={() => clickHandler(id)}
            expanded={isOpen ? isExpanded : null}
          >
            <Styled.Question>{item.question}</Styled.Question>
            <AccordionIcon
              size={'large'}
              expanded={isOpen ? isExpanded : null}
            />
          </Styled.Quation>
          <Styled.Collapse isOpen={isOpen} itemRef={height}>
            <Styled.Body ref={itemRef}>
              <UI.Paragraph
                size={TYPOGRAPHY_SIZE.LARGE}
                dangerouslySetInnerHTML={{ __html: item.answer }}
              />
            </Styled.Body>
          </Styled.Collapse>
        </Styled.Content>
      </Styled.AccordionFAQItem>
    </UI.Animation>
  );
};

export default AccordionFAQItem;
