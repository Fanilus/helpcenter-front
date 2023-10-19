import React, { useState } from 'react';

import * as Styled from './styled';
import * as UI from '../../components/index';

import CheckAmbassadors from '../../components/Icons/CheckAmbassadors/CheckAmbassadors';

const Ambassadors = () => {
  const optionsSelect = [
    'Penis',
    '123',
    'zxc',
    'Penis',
    '123',
    'zxc',
    'Penis',
    '123',
    'zxc',
    'Penis',
    '123',
    'zxc',
    'Penis',
    '123',
    'zxc',
  ];
  const [valueSelected, setValueSelected] = useState('Country');
  const onSelectAction = (value) => {
    setValueSelected(value);
  };
  return (
    <Styled.Ambassadors>
      <UI.H1>Ambassadors</UI.H1>

      <Styled.Content>
        <UI.H2>
          Tymio ambassador has all the power to influence the community and help
          people to discover new ways of earning with Tymio.
        </UI.H2>
        <Styled.Description>
          <Styled.Text>
            <UI.Paragraph size={'large'}>
              We are looking for key opinion leaders in crypto and DeFi, with an
              audience starting from 1,000 active members. After an interview
              process to see if you are elgible, we will be happy to offer you:
            </UI.Paragraph>
          </Styled.Text>
          <Styled.Checks>
            <Styled.Check>
              <CheckAmbassadors />
              <UI.Paragraph size="large">Fixed monthly payments;</UI.Paragraph>
            </Styled.Check>
            <Styled.Check>
              <CheckAmbassadors />
              <UI.Paragraph size="large">
                Doubled revenue share from referrals;
              </UI.Paragraph>
            </Styled.Check>
            <Styled.Check>
              <CheckAmbassadors />
              <UI.Paragraph size="large">Increased APR on Tymio;</UI.Paragraph>
            </Styled.Check>
            <Styled.Check>
              <CheckAmbassadors />
              <UI.Paragraph size="large">
                80% revenue share from Tymio course, which we will help you to
                create;
              </UI.Paragraph>
            </Styled.Check>
            <Styled.Check>
              <CheckAmbassadors />
              <UI.Paragraph size="large">
                24/7 support from our tech and business team.
              </UI.Paragraph>
            </Styled.Check>
          </Styled.Checks>
        </Styled.Description>
      </Styled.Content>
      <Styled.AmbassadorsCard>
        <UI.H2>Apply here:</UI.H2>
        <Styled.InputContainer>
          <Styled.Wrapper>
            <UI.Input placeholder={'Name'} />
            <UI.Dropdown
              onSelectAction={onSelectAction}
              options={optionsSelect}
              valueSelected={valueSelected}
            >
              {valueSelected}
            </UI.Dropdown>
          </Styled.Wrapper>
          <UI.Input placeholder={'Contact number (Telegram or WahatsApp)'} />
          <Styled.Wrapper>
            <UI.Input placeholder={'Your experience in DeFi'} />
            <UI.Input placeholder={'Your ETH wallet'} paste />
          </Styled.Wrapper>
          <UI.Input
            placeholder={'Describe your community or give a link'}
            paste
          />
          <Styled.FooterWrapper>
            <UI.Input
              checkbox
              label={'I have read the agreement above and Term and Conditions'}
            />
            <UI.Button>Send</UI.Button>
          </Styled.FooterWrapper>
        </Styled.InputContainer>
      </Styled.AmbassadorsCard>
    </Styled.Ambassadors>
  );
};

export default Ambassadors;
