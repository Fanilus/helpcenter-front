import React, { useState } from 'react';

import * as Styled from './styled';

import AccordionItem from './components/AccordionFAQItem';

const AccordionFAQ = ({ faqList, isOpen, setOpen, setInternalHeightSum }) => {
  const [openId, setId] = useState(null);
  // const [isExpanded, setExpanded] = useState(false);

  const clickHandler = (id) => {
    if (id === openId) {
      setId(null);
      setOpen(false);
    } else {
      setId(id);
      setOpen(true);
    }
  };

  return (
    <Styled.AccordionFAQ>
      {faqList &&
        faqList.map((item, id) => (
          <AccordionItem
            key={id}
            item={item}
            id={id}
            isExpanded={isOpen}
            clickHandler={clickHandler}
            isOpen={id === openId}
            setInternalHeightSum={setInternalHeightSum}
          />
        ))}
    </Styled.AccordionFAQ>
  );
};

export default AccordionFAQ;
