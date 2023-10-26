import React from 'react';
import * as UI from '../../../../../components/index';
import { FAQ_LIST } from '../../../../../models/enum';

const FaqList = () => {
  return (
    <>
      {FAQ_LIST.map((item, index) => (
        <UI.Animation delay={0.2 * index}>
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
