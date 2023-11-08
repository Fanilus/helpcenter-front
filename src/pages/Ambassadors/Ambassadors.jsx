import React, { useEffect, useRef, useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';

import * as Styled from './styled';
import * as UI from '../../components/index';

import CheckAmbassadors from '../../components/Icons/CheckAmbassadors/CheckAmbassadors';
import { COUNTRIES } from '../../models/enum';
import { useLocation } from 'react-router-dom';
import useFormik from './hook/useFormik';

const reCAPTCHA = process.env.REACT_APP_CAPTCHA;

const Ambassadors = () => {
  const [sentForm, setSentForm] = useState(false);
  const location = useLocation();
  const recaptchaRef = useRef();

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    scrollToTop();
  }, [location]);

  const optionsSelect = COUNTRIES;
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
    <Styled.Ambassadors>
      <UI.Container>
        <UI.H1>
          <UI.Animation type={'text'}>Ambassadors</UI.Animation>
        </UI.H1>

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
        <Styled.AmbassadorsCard>
          <UI.H2>{!sentForm && 'Apply here:'}</UI.H2>

          <Styled.InputContainer onSubmit={handleSubmit}>
            {sentForm ? (
              <UI.H2>
                For questions regarding cooperation, please email{' '}
                <a href="mailto:info@Tymio.com">info@Tymio.com</a>
              </UI.H2>
            ) : (
              <form onSubmit={handleSubmit}>
                <Styled.Wrapper>
                  <UI.Input
                    placeholder={'Name'}
                    value={formik.values.name}
                    onChange={(value) => handleChange('name', value)}
                    error={formik.errors.name}
                  />

                  <UI.Dropdown
                    onSelectAction={(value) => handleChange('country', value)}
                    options={optionsSelect}
                    valueSelected={formik.values.country}
                    placeholder={'Country'}
                    error={formik.errors.country}
                  />
                </Styled.Wrapper>

                <UI.Input
                  number
                  placeholder={'Contact number (Telegram or WhatsApp)'}
                  value={formik.values.phone}
                  onChange={(value) => handleChange('phone', value)}
                  error={formik.errors.phone}
                />

                <Styled.Wrapper>
                  <UI.Input
                    placeholder={'Your experience in DeFi'}
                    value={formik.values.experience}
                    onChange={(value) => handleChange('experience', value)}
                    error={formik.errors.experience}
                  />
                  <UI.Input
                    placeholder={'Your ETH wallet'}
                    paste
                    value={formik.values.wallet}
                    onChange={(value) => handleChange('wallet', value)}
                    error={formik.errors.wallet}
                  />
                </Styled.Wrapper>

                <UI.Input
                  placeholder={
                    'Describe your community (describe or give a link)'
                  }
                  paste
                  value={formik.values.link}
                  onChange={(value) => handleChange('link', value)}
                  error={formik.errors.link}
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
        </Styled.AmbassadorsCard>
      </UI.Container>
    </Styled.Ambassadors>
  );
};

export default Ambassadors;
