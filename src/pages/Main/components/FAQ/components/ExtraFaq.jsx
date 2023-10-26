import React from 'react';
import * as UI from '../../../../../components/index';
import { EXTRA_FAQ } from '../../../../../models/enum';

const Content = () => {
  return (
    <>
      {EXTRA_FAQ.map((item, index) => (
        <UI.Accordion
          key={index}
          trigger={item.question}
          content={<span dangerouslySetInnerHTML={{ __html: item.answer }} />}
        />
      ))}
    </>
  );
};

const ExtraFaq = () => {
  return (
    <UI.Accordion
      trigger={'All questions'}
      content={<Content />}
      type={'nested'}
    />
  );
};

export default ExtraFaq;
