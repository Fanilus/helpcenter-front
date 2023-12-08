import React from 'react';

import * as Styled from './styled';
import * as UI from '../../../../components/index';
import { useStep } from '../../../../hooks';

const UseCases = () => {
  const step = useStep();
  const faqList = [
    {
      title: 'Investors',
      description:
        'For those who seek to earn more from their assets, TYMIO offers many ways to achieve this. You can set time limit orders to sell or to buy your asset for a price better than the market price and generate extra yield. You can also execute smart rebalancing via TYMIO. More flexibility. Fewer emotions. Better results.',
      question: 'Example',
      answer:
        'You are looking to convert 10 ETH to USDC to rebalance your portfolio. The current ETH market price is 1000, so you would get 10,000 immediately. But, since there is no time pressure for you to do this right away, you are setting a time limit order to sell at 1100 with a 7 day lock and a fixed yield of 330 USDC. After 7 days, you will either get 10 ETH back + 330 USDC, or you will have your ETH sold at 1100 plus 330 USDC, making a total of 11,330 USDC.',
    },
    {
      title: 'Speculators',
      description:
        "Most speculators end up losing money over the span of a year or longer. This trend is backed by statistical data. Why does this happen? They often employ leverage, set strict stop-loss orders, and struggle to accurately forecast market movements. With TYMIO, you're not burdened with predicting the exact direction of price movements. Instead, you simply estimate how far the price won't probably go. <br/> <br/> This approach is simpler and offers a higher likelihood of success. Instead of risking money and time in active trading, especially if you're inexperienced, start with TYMIO to build your knowledge and skill set. Statistics are on your side.",
      question: 'Statistics',
      answer:
        'Only 26.5% of all orders end up being executed. The 73.5% are pure profit. ',
    },
    {
      title: 'Miners',
      description:
        'Hedge your future mining output to reduce price risk. Set a sell limit order at your desired price to maximize your revenue.',
      question: 'Example',
      answer:
        "The current BTC price is 28,000. If you anticipate producing 10 BTC in the next 7 days, you can set a time limit order to sell 10 WBTC for 29,000 USDC, thereby securing a premium of 3,240 USDC. Both outcomes are beneficial: you'll either sell at a higher rate and receive the premium, or you'll simply earn the premium.",
    },
    {
      title: 'Money managers',
      description:
        'Do you hold stablecoins or crypto assets? You can determine the APR you wish to collect while managing your risk effectively.',
      question: 'Example',
      answer:
        "Suppose you hold 300 ETH. If there's a price surge, you're comfortable selling all or part of them for 1,800. With the current price at 1,500 and your willingness to sell at 1,800, you can set a time limit order. By doing this, you earn a fixed premium, essentially monetizing your readiness to sell. TYMIO rewards you with a fixed premium for capping your potential profit.",
    },
    {
      title: 'Startups',
      description:
        'Put your treasury funds to work. This strategy will enhance your runway and give you a competitive advantage. We offer special rates and a higher APR.',
      question: 'Example',
      answer:
        "Imagine you need to sell 1 BTC in a month to cover your team's salary. With TYMIO, you can set a sell order at a higher price with a duration of one month. At the end of this period, you'll either achieve the desired selling price or earn a fixed yield on your BTC. It's both straightforward and profitable.",
    },
  ];
  return (
    <Styled.UseCases>
      <UI.Container>
        <UI.H1>
          <UI.Animation type={'text'}>Use cases</UI.Animation>
        </UI.H1>
        <UI.AccordionCases faqList={faqList} />
        <UI.Animation delay={step}>
          <Styled.Board>
            <Styled.Badge>
              <UI.Badge
                height={'fit-content'}
                width={'fit-content'}
                padding={'8px 16px'}
              >
                TYMIO OTC
              </UI.Badge>
            </Styled.Badge>
            <Styled.Desc>
              <UI.Animation delay={step * 2} type={'opacity'}>
                <UI.H2>
                  Looking to transact over 100 ETH or its equivalent in USDC or
                  BTC?
                  <br />
                  We provide customized OTC services, higher APR rates, and the
                  option to transact without locking funds in a smart contract.
                  <br />
                  Reach out to us at{' '}
                  <span>
                    <a
                      style={{ textDecoration: 'none', color: 'unset' }}
                      href={'mailto:info@tymio.com'}
                    >
                      info@tymio.com
                    </a>
                  </span>
                </UI.H2>
              </UI.Animation>
            </Styled.Desc>
          </Styled.Board>
        </UI.Animation>
      </UI.Container>
    </Styled.UseCases>
  );
};

export default UseCases;
