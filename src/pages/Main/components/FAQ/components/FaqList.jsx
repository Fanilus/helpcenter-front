import React from 'react';
import * as UI from '../../../../../components/index';
import { FAQ_LIST } from '../../../../../models/enum';
import { useStep } from '../../../../../hooks';

const FaqList = () => {
  const step = useStep();

  return (
    <>
      {FAQ_LIST.map((item, index) => (
        <UI.Animation key={index} delay={step * index}>
          <UI.Accordion
            key={index}
            trigger={item.question}
            content={<span dangerouslySetInnerHTML={{ __html: item.answer }} />}
          />
        </UI.Animation>
      ))}
    </>
  );
};

export default FaqList;
