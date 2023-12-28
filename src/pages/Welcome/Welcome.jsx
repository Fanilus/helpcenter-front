import React from 'react';

import * as Styled from './styled';
import * as UI from '../../components/index';
import { COLORS } from '../../models/colors';

import LogoSmall from '../../components/Icons/LogoSmall/LogoSmall';
import TableContent from './components/TableContent/TableContent';
import { useStep } from '../../hooks';

const APP_LINK = process.env.REACT_APP_APP_LINK;
const DIRECTION = process.env.REACT_APP_WELCOME_PAGE_DIRECTION;

const Welcome = () => {
  const step = useStep();
  return (
    <Styled.Welcome>
      <UI.Animation>
        <Styled.Banner>
          <Styled.Logo>
            <LogoSmall />
          </Styled.Logo>
          <Styled.Wrapper>
            {DIRECTION === 'sell' && (
              <UI.HH color={COLORS.BLACK}>
                SELL BITCOIN <br />
                OR ETHEREUM HIGHER.
              </UI.HH>
            )}

            {DIRECTION === 'buy' && (
              <UI.HH color={COLORS.BLACK}>
                BUY BITCOIN <br />
                OR ETHEREUM LOWER.
              </UI.HH>
            )}
            <UI.HH color={COLORS.LEMON}>GET BEST PRICE POSSIBLE</UI.HH>
          </Styled.Wrapper>
        </Styled.Banner>
      </UI.Animation>

      <Styled.Table>
        <UI.Animation delay={step * 2} style={{ paddingBottom: '80px' }}>
          <Styled.TableItem>
            <Styled.Title>
              <UI.H2>Current {DIRECTION.toUpperCase()} offers:</UI.H2>
            </Styled.Title>
            <Styled.Content>
              <TableContent />
              <Styled.Formula>
                <UI.Paragraph size={'small'}>
                  *Price formula: Offer on TYMIO = closest limit order price -
                  guaranteed yield
                </UI.Paragraph>
              </Styled.Formula>
              <Styled.ButtonWrapper>
                <UI.Button
                  type={'big'}
                  onClick={() => window.open(APP_LINK, '_blank')}
                >
                  <Styled.TextButton>GO TO TYMIO APP</Styled.TextButton>
                </UI.Button>
              </Styled.ButtonWrapper>

              <Styled.Description>
                <UI.Paragraph size={'large'}>
                  Order on TYMIO is not the same as common market order. It’s
                  execution is not guaranteed, hence we can get you the best
                  price. You will have to lock USDC for a chosen period of time.
                  Sometimes it's worth waiting and getting a better price.
                </UI.Paragraph>
              </Styled.Description>
            </Styled.Content>
          </Styled.TableItem>
        </UI.Animation>

        <UI.Animation
          delay={step * 3}
          style={{
            paddingBottom: '80px',
            paddingTop: '30px',
            borderTop: '1px solid rgb(130, 122, 149)',
            width: 'fit-content',
          }}
        >
          <Styled.TableItem>
            <Styled.Title>
              <UI.H2>How it works?</UI.H2>
            </Styled.Title>
            <Styled.Content width="645px">
              <Styled.TableWrapper>
                <UI.Paragraph size={'large'}>
                  Instead of buying right now at the market price, TYMIO allows
                  you to set a time limit order for buying at your preferred
                  price. In addition, you will get a guaranteed yield premium,
                  which will make your effective price lower.
                </UI.Paragraph>
                <UI.Paragraph size={'large'}>
                  What if my order wouldn’t be executed? <br /> You will get
                  your stablecoins back plus guaranteed yield.
                </UI.Paragraph>
                <UI.Paragraph size={'large'}>
                  I have only fiat, what can I do? <br />
                  You can use services like{' '}
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.moonpay.com/"
                    style={{ color: COLORS.PINK, textDecoration: 'none' }}
                  >
                    Moonpay
                  </a>{' '}
                  for it.
                </UI.Paragraph>
              </Styled.TableWrapper>
            </Styled.Content>
          </Styled.TableItem>
        </UI.Animation>

        <UI.Animation
          delay={step * 4}
          style={{
            paddingTop: '30px',
            borderTop: '1px solid rgb(130, 122, 149)',
            width: 'fit-content',
          }}
        >
          <Styled.TableItem>
            <Styled.Title>
              <UI.H2 color={COLORS.LEMON}>New to crypto?</UI.H2>
              <UI.H2>Check out these articles:</UI.H2>
            </Styled.Title>
            <Styled.Content width="645px">
              <Styled.TableWrapperArticles>
                <UI.Paragraph size={'large'}>
                  Name of the article 1 →
                </UI.Paragraph>
                <UI.Paragraph size={'large'}>
                  Name of the article 2 →
                </UI.Paragraph>
              </Styled.TableWrapperArticles>
            </Styled.Content>
          </Styled.TableItem>
        </UI.Animation>
      </Styled.Table>
    </Styled.Welcome>
  );
};

export default Welcome;
