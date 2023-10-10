import React from 'react';

import * as Styled from './styled';
import * as UI from '../../components/index';

const WhitePaper = () => {
  return (
    <Styled.WhitePaper>
      <UI.H1>White paper</UI.H1>
      <Styled.SubTitle>
        <UI.H2>
          Tymio — Decentralized <br /> Structured Products Protocol
        </UI.H2>
        <UI.Paragraph>V.1.2 eng, updated 04 jun 2023</UI.Paragraph>
      </Styled.SubTitle>
      <Styled.Container>
        <Styled.Content>
          <Styled.Title>
            <UI.H2>1. Abstract</UI.H2>
          </Styled.Title>
          <Styled.Description>
            <UI.Paragraph size={'large'}>
              The Decentralized Structured Products Protocol (DSPP) enables the
              creation of financial products and strategies tailored to the
              needs of a broad range of non-professional users, thereby making
              the management of crypto assets more efficient and accessible.
              DSSP operates atop decentralized options liquidity markets as an
              additional layer, offering user-friendly tools for individuals
              seeking low to moderate risks to enhance the profitability of
              their crypto asset holdings.
            </UI.Paragraph>
            <UI.Paragraph size={'large'}>
              Similar to how Automated Market Makers (AMMs) and Decentralized
              Exchanges (DEXes) have disrupted traditional exchanges and market
              makers, Tymio DSPP aims to do the same for banks by democratizing
              the creation of customized structured products. DSPP enables users
              to tailor their own financial products according to their needs,
              removing the reliance on traditional banking institutions. This
              shift towards decentralization allows for greater accessibility,
              transparency, and control over investment strategies, putting the
              power in the hands of individual users.
            </UI.Paragraph>
          </Styled.Description>
        </Styled.Content>
      </Styled.Container>
      <Styled.Container>
        <Styled.Content>
          <Styled.Title>
            <UI.H2>2. Market</UI.H2>
          </Styled.Title>
          <Styled.Description>
            <UI.Paragraph size={'large'}>
              Bitcoin revolutionized finance by enabling trustless financial
              transactions. Ethereum took it a step further, allowing smart
              contracts and complex financial products, thus initiating
              decentralized finance (DeFi). However, the complexity of these
              products has limited their use to a relatively small group of
              people who understand blockchain and cryptocurrency.
            </UI.Paragraph>
            <UI.Paragraph size={'large'}>
              Structured products are well-known in traditional fiat finance,
              typically offered by banks to high net worth individuals (HNWI) as
              pre-packaged, out-of-the-box products. According to Bloomberg, the
              total structured product market accounts for over $7 trillion in
              invested assets*. We expect several trends to continue over time,
              such as overall financial literacy growth and increasing
              crypto/DeFi adoption worldwide. Currently, there is strong demand
              for low-risk financial solutions that can produce higher yields on
              crypto assets.
            </UI.Paragraph>
            <UI.Paragraph size={'large'}>
              For example, farming, which involves providing liquidity to
              automated market makers (AMMs), can offer higher yields. However,
              it is still quite complex for the general public to use, not to
              mention “impermanent loss” and the need to hold extremely volatile
              tokens to achieve high yields. Another product worth mentioning is
              the "option vault" DeFi products, which provide the ability to
              follow a fund engaged in an option strategy, such as a "covered
              call."
            </UI.Paragraph>
            <UI.Paragraph size={'large'}>
              However, this product cannot be customized to meet individual
              needs and, therefore, has limited use. The uniqueness and
              distinction of Tymio DSPP lie in the fact that a user can create a
              tailor-made product themselves, setting custom price and duration
              parameters.
            </UI.Paragraph>
          </Styled.Description>
        </Styled.Content>
      </Styled.Container>
      <Styled.Container>
        <Styled.Content>
          <Styled.Title>
            <UI.H2>3. Vision</UI.H2>
          </Styled.Title>
          <Styled.Description>
            <UI.Paragraph size={'large'}>
              Tymio DSPP aims to provide user-friendly financial products based
              on options for a broad range of crypto asset holders who do not
              wish to or have the ability to engage in active trading but seek
              additional yield from their crypto. Our precise target audience
              consists of those seeking passive strategies with low to moderate
              risk and increased APY/ARP. We expect this segment to grow over
              time, in tandem with worldwide crypto adoption. We will begin with
              the ETH/USDC "limit order with yield" product and expand our
              offerings over time, as well as incorporate additional
              blockchains, assets, and liquidity sources.
            </UI.Paragraph>
          </Styled.Description>
        </Styled.Content>
      </Styled.Container>
      <Styled.Container>
        <Styled.Content>
          <Styled.Title>
            <UI.H2>4. Roadmap</UI.H2>
          </Styled.Title>
          <Styled.Description>
            <UI.Paragraph size={'large'}>
              1. 2023. Evaluating. <br />
              Demand "Limit orders with yield" for USDC/ETH, our flagship
              product, based on the time-tested covered call/put option strategy
              using CEX liquidity (smart-routing liquidity from option CEXs).
            </UI.Paragraph>
            <UI.Paragraph size={'large'}>
              2. H2 2023. Expansion. <br />
              In this phase, we incorporate layer-2 networks such as Arbitrum
              and Optimism, as well as other blockchains and assets (BTC, USDT).
            </UI.Paragraph>
            <UI.Paragraph size={'large'}>
              3. Q4 2023–Q1 2024. Decentralization. <br />
              During this phase, we connect to various option DEX liquidity
              sources, becoming a truly decentralized, permissionless,
              non-custodial protocol.
            </UI.Paragraph>
            <UI.Paragraph size={'large'}>
              4. H2 2024. Multiple Product Offering. <br />
              In this phase, we introduce other products, derived from option
              and futures strategies. As always, users will be able to set price
              and duration parameters, creating custom-made products.
            </UI.Paragraph>
            <UI.Paragraph size={'large'}>
              5. H2 2024. Transition to DAO. <br />
              Tymio aims to become a significant pillar of the decentralized
              economy and an essential building block within the DeFi ecosystem.
              As it progresses, Tymio plans to transition ownership of the
              service to the community through a Token Generation Event (TGE).
              This shift in ownership will empower the community to actively
              participate in the governance and decision-making processes of
              Tymio.
            </UI.Paragraph>
          </Styled.Description>
        </Styled.Content>
      </Styled.Container>

      <Styled.SubContainer>
        <Styled.Content>
          <Styled.Title>
            <UI.H2>
              5. “Limit order with yield’ <br />
              (buy-low and sell-high)
            </UI.H2>
          </Styled.Title>
          <Styled.Description>
            <UI.Paragraph size={'large'}>
              Assets: ETH/USDC (Ethereum chain) Buy-low/sell-high employs the
              covered call/put option strategy to achieve a high fixed return.
              By setting a time limit order to sell ETH above market value or to
              buy ETH below market value, and locking funds in a smart contract,
              thereby committing to the deal, Tymio DSPP users can obtain a high
              yield, typically ranging from 20% to 100% annualized, depending on
              the order price.
            </UI.Paragraph>
            <UI.Paragraph size={'large'}>
              This product enables clients to monetize their intent to sell or
              buy crypto assets at a specific price. Currently, the Tymio app
              supports only ETH/USDC on the Ethereum blockchain and the MetaMask
              wallet. Users receive an APR that depends on the buying or selling
              price levels and the duration of the contract. Profits are made in
              ETH or USDC, and unlike farming, there is no issue of impermanent
              loss. Additionally, no other tokens are involved besides USDC/ETH.
              This product is the ideal instrument for investors who hold ETH or
              USDC and wish to earn a steady passive income.
            </UI.Paragraph>
          </Styled.Description>
        </Styled.Content>
      </Styled.SubContainer>
      <Styled.SubContainer>
        <Styled.Content>
          <Styled.Title>
            <UI.Paragraph>5.1. HOW IT WORKS</UI.Paragraph>
          </Styled.Title>
          <Styled.Description>
            <UI.Paragraph size={'large'}>
              Let's examine two main cases: SELL-HIGH. In the first case
              (https://sell-high.io), you have an ETH and are willing to sell it
              above the market value or just generate yield. So, you set a time
              limit order to sell ETH. For example, the current ETH price is
              1200, and you are ready to sell it for 1350. You enter the total
              number of ETH, set the price at 1350, and then browse the contract
              duration options. Typically, the duration might be a couple of
              days, a week, or a month. You select an appropriate contract
              duration and agree to the terms.
            </UI.Paragraph>
            <UI.Paragraph size={'large'}>
              After the specified number of days, you can have one of two
              outcomes: If the ETH price exceeds 1350 on the day and at the
              moment of contract expiration, it means you have sold your ETH. In
              this case, you receive your return in USDC, equivalent to the sold
              ETH (at 1350 each) plus the yield. If the price of one ETH is
              lower than 1350 at the moment of contract expiration, your ETH is
              not sold, and you receive back your ETH plus the yield. As you can
              see, you earn a fixed yield in either case, and you'll likely sell
              your ETH at a significantly higher price than it was at the time
              of the transaction.
            </UI.Paragraph>
            <Styled.Card>
              <UI.Paragraph size={'large'}>
                NOTE: <br />
                The further the required ETH sell price is from the current
                market price, the lower the probability that the transaction
                will occur. BUY-LOW. In the second case (https://buy-low.io),
                you have USDC and are willing to buy ETH below market value or
                just to generate passive income out of USDC. So, you set a time
                limit order to buy ETH. For example, the current ETH price is
                1200, and you are prepared to buy it for 1100. You enter the
                total number of ETH, set the price at 1100, and then browse the
                contract duration options.
              </UI.Paragraph>
            </Styled.Card>
            <UI.Paragraph size={'large'}>
              Typically, the duration might be a couple of days, a week, or a
              month. You select an appropriate contract duration and yield and
              agree to the terms. After the specified number of days, you can
              have one of two outcomes: If the ETH price is above 1100 on the
              day and at the moment of contract expiration, it means you haven't
              bought ETH. In this case, you receive your return in USDC plus the
              fixed income. If the price of one ETH is lower than 1100 at the
              moment of contract expiration, your ETH transaction is valid, and
              you receive your ETH for 1100 plus the fixed income.
            </UI.Paragraph>
            <UI.Paragraph size={'large'}>
              As in the first case, the further the required ETH buy price is
              from the current market price, the lower the probability that the
              transaction will occur. Consequently, "limit order with yield"
              allows you to monetize not the transaction itself, but the intent
              to buy ETH. At the same time, the transaction may not take place,
              and you merely receive passive income in USDC. You can do this
              transaction repeatedly to generate a positive cash flow from your
              stablecoins.
            </UI.Paragraph>
          </Styled.Description>
        </Styled.Content>
      </Styled.SubContainer>
      <Styled.SubContainer>
        <Styled.Content>
          <Styled.Title>
            <UI.Paragraph>5.2 WHY IS A HIGH YIELD POSSIBLE?</UI.Paragraph>
          </Styled.Title>
          <Styled.Description>
            <UI.Paragraph size={'large'}>
              In short: the market pays you for holding assets and limiting your
              upside. If you agree to sell your asset at a certain price, that
              means you would not earn more than that price + yield. By setting
              a limit on your gains from price appreciation, the market
              compensates you in exchange for this cap, allowing you to earn a
              fixed yield.
            </UI.Paragraph>

            <Styled.Card>
              <UI.Paragraph size={'large'}>
                EXAMPLE: <br />
                Let's say the current price is 1400 and you agree to sell for
                1500 and wait for 7 days. Your fixed yield is 35. Therefore, you
                have limited your income to 1535 (1500+35). In case the price is
                above 1500 on the contract finish date, you would sell it for
                1535 (1500 + 35 fixed yield). This scenario always has a lower
                probability. However, you would still earn significantly more
                than selling the asset at the market price (1400).
              </UI.Paragraph>
            </Styled.Card>
          </Styled.Description>
        </Styled.Content>
      </Styled.SubContainer>
      <Styled.SubContainer>
        <Styled.Content>
          <Styled.Title>
            <UI.Paragraph>5.3 WHERE DOES THE YIELD COME FROM?</UI.Paragraph>
          </Styled.Title>
          <Styled.Description>
            <UI.Paragraph size={'large'}>
              The yield originates from option traders who make bets on low
              probability scenarios of significant price increases. They
              purchase put/call options, paying a premium (call/put price) to
              make leveraged aggressive bets. Tymio's yield comes in the form of
              option premiums generated from selling these options.
            </UI.Paragraph>
          </Styled.Description>
        </Styled.Content>
      </Styled.SubContainer>
    </Styled.WhitePaper>
  );
};

export default WhitePaper;
