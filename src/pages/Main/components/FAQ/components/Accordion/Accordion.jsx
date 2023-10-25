import React, { useState, useRef, useEffect } from 'react';
import * as Styled from './styled';
import * as UI from '../../../../../../components/index';
import AccordionIcon from '../../../../../../components/Icons/AccordionIcon/AccordionIcon';

const Accordion = ({ faqList }) => {
  const itemRef = useRef(null);
  const [isExpanded, setExpanded] = useState(false);
  const [isOpen, setOpen] = useState(false);
  const [internalHeightSum, setInternalHeightSum] = useState(0);
  console.log(internalHeightSum);

  const [heightSum, setHeightSum] = useState(0);

  const clickHandler = () => {
    setExpanded(!isExpanded);
  };

  // console.log(isOpen);

  const updateHeightSum = () => {
    if (itemRef.current) {
      const childElements = isExpanded
        ? itemRef.current.children
        : itemRef.current.children[0].children;

      let sum = 0;

      for (let i = 0; i < Math.min(childElements.length, 5); i++) {
        sum += childElements[i].offsetHeight;
      }

      setHeightSum(sum);
    }
  };

  useEffect(() => {
    updateHeightSum();
  }, [isExpanded]);

  return (
    <UI.Animation delay={1}>
      <Styled.AccordionItem>
        <Styled.Content>
          <Styled.Collapse
            isOpen={isExpanded}
            heightSum={isOpen ? heightSum + internalHeightSum : heightSum}
          >
            <Styled.Body ref={itemRef}>
              <UI.AccordionFAQ
                faqList={faqList}
                isOpen={isOpen}
                setOpen={setOpen}
                setInternalHeightSum={setInternalHeightSum}
              />
            </Styled.Body>
          </Styled.Collapse>
          <UI.Animation delay={2} distance={'50px'}>
            <Styled.Quation onClick={clickHandler} expanded={isExpanded}>
              <Styled.Question>All questions</Styled.Question>
              <AccordionIcon expanded={isExpanded} />
            </Styled.Quation>
          </UI.Animation>
        </Styled.Content>
      </Styled.AccordionItem>
    </UI.Animation>
  );
};

export default Accordion;
