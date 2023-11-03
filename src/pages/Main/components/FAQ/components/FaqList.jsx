import React from 'react';
import * as UI from '../../../../../components/index';
import { ANIMATION, FAQ_LIST } from '../../../../../models/enum';

const FaqList = () => {
  return (
    <>
      {FAQ_LIST.map((item, index) => (
        <UI.Animation key={index} delay={ANIMATION.STEP * index}>
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
