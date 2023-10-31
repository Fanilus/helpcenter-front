import React, {
  useEffect,
  //  useState
} from 'react';

import * as Styled from './styled';
import * as UI from '../../components/index';

import CheckAmbassadors from '../../components/Icons/CheckAmbassadors/CheckAmbassadors';
// import { COUNTRIES } from '../../models/enum';
import { useLocation } from 'react-router-dom';

const Ambassadors = () => {
  // const optionsSelect = COUNTRIES;
  // const [valueSelected, setValueSelected] = useState('Country');
  // const onSelectAction = (value) => {
  //   setValueSelected(value);
  // };

  const location = useLocation();

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    scrollToTop();
  }, [location]);

  return (
    <Styled.Ambassadors>
      <UI.Container>
        <UI.H1><UI.Animation type={'text'}>Ambassadors</UI.Animation></UI.H1>

        <Styled.Content>
          <UI.H2>
            TYMIO ambassador has all the power to influence the community and
            help people to discover new ways of earning with TYMIO.
          </UI.H2>
          <Styled.Description>
            <Styled.Text>
              <UI.Paragraph size={'large'}>
                We are looking for key opinion leaders in crypto and DeFi, with
                an audience starting from 1,000 active members. After an
                interview process to see if you are eligible, we will be happy
                to offer you:
              </UI.Paragraph>
            </Styled.Text>
            <Styled.Checks>
              <Styled.Check>
                <CheckAmbassadors />
                <UI.Paragraph size="large">Marketing budget</UI.Paragraph>
              </Styled.Check>
              <Styled.Check>
                <CheckAmbassadors />
                <UI.Paragraph size="large">
                  Doubled revenue share from referrals
                </UI.Paragraph>
              </Styled.Check>
              <Styled.Check>
                <CheckAmbassadors />
                <UI.Paragraph size="large">Increased APR on TYMIO</UI.Paragraph>
              </Styled.Check>
              <Styled.Check>
                <CheckAmbassadors />
                <UI.Paragraph size="large">
                  100% revenue share from TYMIO course, which we will help you
                  to create
                </UI.Paragraph>
              </Styled.Check>
              <Styled.Check>
                <CheckAmbassadors />
                <UI.Paragraph size="large">
                  24/7 support from our tech and business team
                </UI.Paragraph>
              </Styled.Check>
              <Styled.Text style={{ marginTop: '25px', width: '100%' }}>
                <UI.Paragraph size={'large'}>
                  For questions regarding cooperation, please email{' '}
                  <a href="mailto:info@tymio.com">info@tymio.com</a>
                </UI.Paragraph>
              </Styled.Text>
            </Styled.Checks>
          </Styled.Description>
        </Styled.Content>
        {/* <Styled.AmbassadorsCard>
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
              placeholder={'Describe your community (describe or give a link)'}
              paste
            />
            <Styled.FooterWrapper>
              <UI.Input
                checkbox
                label={
                  'I hereby consent to the processing of the personal data that I have provided'
                }
              />
              <UI.Button>Send</UI.Button>
            </Styled.FooterWrapper>
          </Styled.InputContainer>
        </Styled.AmbassadorsCard> */}
      </UI.Container>
    </Styled.Ambassadors>
  );
};

export default Ambassadors;
