import React, { useState } from 'react';

import * as Styled from './styled';

import AccordionItem from './components/AccordionFAQItem';

const AccordionFAQ = ({ faqList }) => {
  const [openId, setId] = useState(null);
  const [isExpanded, setExpanded] = useState(false);

  const clickHandler = (id) => {
    if (id === openId) {
      setId(null);
      setExpanded(false);
    } else {
      setId(id);
      setExpanded(true);
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
            isExpanded={isExpanded}
            clickHandler={clickHandler}
            isOpen={id === openId}
          />
        ))}
    </Styled.AccordionFAQ>
  );
};

export default AccordionFAQ;
