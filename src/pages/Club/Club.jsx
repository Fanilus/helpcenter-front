import React, { useEffect, useRef, useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';

import * as Styled from './styled';
import * as UI from '../../components/index';

import CheckClub from '../../components/Icons/CheckAmbassadors/CheckAmbassadors';
import { useLocation } from 'react-router-dom';
import useFormik from './hook/useFormik';

const reCAPTCHA = process.env.REACT_APP_CAPTCHA;

const Club = () => {
  const [sentForm, setSentForm] = useState(false);
  const location = useLocation();
  const recaptchaRef = useRef();

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    scrollToTop();
  }, [location]);

  const formik = useFormik();

  const handleChange = async (field, value) => {
    await formik.setFieldValue(field, value, false);
    await formik.validateField(field);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errors = await formik.validateForm();
    if (JSON.stringify(errors) === '{}' && formik.isValid) {
      try {
        await recaptchaRef.current.executeAsync();
      } catch (e) {
        await recaptchaRef.current.reset();
        await recaptchaRef.current.executeAsync();
      }
    }
  };

  const handleRecaptchaVerify = async (captcha) => {
    await handleChange('captcha', captcha);
    await formik.handleSubmit();
    setSentForm(true);
  };

  return (
    <Styled.Club>
      <UI.Container>
        <UI.H1>
          <UI.Animation type={'text'}>TYMIO CLUB</UI.Animation>
        </UI.H1>

        <Styled.Content>
          <UI.H2>What is the TYMIO club subscription?</UI.H2>
          <Styled.Description>
            <Styled.Text>
              <UI.Paragraph size={'large'}>
                It includes a variety of enhanced services tailored for regular
                users of TYMIO. <br /> Here are the most interesting features:
              </UI.Paragraph>
            </Styled.Text>
            <Styled.Checks>
              <Styled.Check>
                <CheckClub />
                <UI.Paragraph size="large">
                  Increased profitability (APR) in the app
                </UI.Paragraph>
              </Styled.Check>
              <Styled.Check>
                <CheckClub />
                <UI.Paragraph size="large">
                  Priority in receiving airdrop (second wave)
                </UI.Paragraph>
              </Styled.Check>
              <Styled.Check>
                <CheckClub />
                <UI.Paragraph size="large">
                  Access to the closed TYMIO club chat*
                </UI.Paragraph>
              </Styled.Check>
              <Styled.Check>
                <CheckClub />
                <UI.Paragraph size="large">
                  Support from an ambassador in making transactions, forming
                  strategies, answering questions (transaction infrastructure,
                  wallets, conversion from and to fiat currency, bridges)
                </UI.Paragraph>
              </Styled.Check>
              <Styled.TextContent>
                <UI.Paragraph size={'large'}>
                  *some languages not supproted
                </UI.Paragraph>
                <UI.Paragraph size={'large'}>
                  The club subscription costs $89 for six months. Access can
                  only be purchased through TYMIO ambassadors.
                </UI.Paragraph>
              </Styled.TextContent>
            </Styled.Checks>
          </Styled.Description>
        </Styled.Content>
        <Styled.ClubCard>
          <UI.H2>{!sentForm && 'Apply here:'}</UI.H2>

          <Styled.InputContainer onSubmit={handleSubmit}>
            {sentForm ? (
              <UI.H2>
                For questions regarding cooperation, please email{' '}
                <a href="mailto:info@Tymio.com">info@Tymio.com</a>
              </UI.H2>
            ) : (
              <form onSubmit={handleSubmit}>
                <UI.Input
                  placeholder={'Name'}
                  value={formik.values.name}
                  onChange={(value) => handleChange('name', value)}
                  error={formik.errors.name}
                />

                <UI.Input
                  placeholder={'Telegram alias'}
                  value={formik.values.alias}
                  onChange={(value) => handleChange('alias', value)}
                  error={formik.errors.alias}
                />

                <UI.Input
                  placeholder={'E-mail'}
                  value={formik.values.email}
                  onChange={(value) => handleChange('email', value)}
                  error={formik.errors.email}
                />

                <UI.Input
                  placeholder={'ETH wallet'}
                  paste
                  value={formik.values.wallet}
                  onChange={(value) => handleChange('wallet', value)}
                  error={formik.errors.wallet}
                />

                <Styled.FooterWrapper>
                  <ReCAPTCHA
                    ref={recaptchaRef}
                    size="invisible"
                    style={{ position: 'absolute' }}
                    sitekey={reCAPTCHA}
                    onChange={handleRecaptchaVerify}
                  />
                  <UI.Input
                    checkbox
                    label={
                      'I hereby consent to the processing of the personal data that I have provided'
                    }
                    value={formik.values.agreement}
                    onChange={(value) => handleChange('agreement', value)}
                    error={formik.errors.agreement}
                  />
                  <UI.Button type="submit">Send</UI.Button>
                </Styled.FooterWrapper>
              </form>
            )}
          </Styled.InputContainer>
        </Styled.ClubCard>
      </UI.Container>
    </Styled.Club>
  );
};

export default Club;
