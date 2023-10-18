import React from 'react';

import * as Styled from './styled';
import * as UI from '../../components/index';

import algorithmPic from '../../img/algorithm-pic.svg';
import strategyPic from '../../img/strategy-pic.svg';
import { TYPOGRAPHY_SIZE } from '../../models/types';

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
            <Styled.ListItem>
              <UI.Paragraph size={TYPOGRAPHY_SIZE.LARGE}>1.</UI.Paragraph>
              <Styled.ItemDesc>
                <UI.Paragraph size={TYPOGRAPHY_SIZE.LARGE} uppercase>
                  2023. Evaluating.
                </UI.Paragraph>
                <UI.Paragraph>
                  Demand "Limit orders with yield" for USDC/ETH, our flagship
                  product, based on the time-tested covered call/put option
                  strategy using CEX liquidity (smart-routing liquidity from
                  option CEXs).
                </UI.Paragraph>
              </Styled.ItemDesc>
            </Styled.ListItem>

            <Styled.ListItem>
              <UI.Paragraph size={TYPOGRAPHY_SIZE.LARGE}>2.</UI.Paragraph>
              <Styled.ItemDesc>
                <UI.Paragraph size={TYPOGRAPHY_SIZE.LARGE} uppercase>
                  H2 2023. Expansion.
                </UI.Paragraph>
                <UI.Paragraph>
                  In this phase, we incorporate layer-2 networks such as
                  Arbitrum and Optimism, as well as other blockchains and assets
                  (BTC, USDT).
                </UI.Paragraph>
              </Styled.ItemDesc>
            </Styled.ListItem>

            <Styled.ListItem>
              <UI.Paragraph size={TYPOGRAPHY_SIZE.LARGE}>3.</UI.Paragraph>
              <Styled.ItemDesc>
                <UI.Paragraph size={TYPOGRAPHY_SIZE.LARGE} uppercase>
                  Q4 2023–Q1 2024. Decentralization.
                </UI.Paragraph>
                <UI.Paragraph>
                  During this phase, we connect to various option DEX liquidity
                  sources, becoming a truly decentralized, permissionless,
                  non-custodial protocol.
                </UI.Paragraph>
              </Styled.ItemDesc>
            </Styled.ListItem>

            <Styled.ListItem>
              <UI.Paragraph size={TYPOGRAPHY_SIZE.LARGE}>4.</UI.Paragraph>
              <Styled.ItemDesc>
                <UI.Paragraph size={TYPOGRAPHY_SIZE.LARGE} uppercase>
                  H2 2024. Multiple Product Offering.
                </UI.Paragraph>
                <UI.Paragraph>
                  In this phase, we introduce other products, derived from
                  option and futures strategies. As always, users will be able
                  to set price and duration parameters, creating custom-made
                  products.
                </UI.Paragraph>
              </Styled.ItemDesc>
            </Styled.ListItem>

            <Styled.ListItem>
              <UI.Paragraph size={TYPOGRAPHY_SIZE.LARGE}>5.</UI.Paragraph>
              <Styled.ItemDesc>
                <UI.Paragraph size={TYPOGRAPHY_SIZE.LARGE} uppercase>
                  H2 2024. Transition to DAO.
                </UI.Paragraph>
                <UI.Paragraph>
                  Tymio aims to become a significant pillar of the decentralized
                  economy and an essential building block within the DeFi
                  ecosystem. As it progresses, Tymio plans to transition
                  ownership of the service to the community through a Token
                  Generation Event (TGE). This shift in ownership will empower
                  the community to actively participate in the governance and
                  decision-making processes of Tymio.
                </UI.Paragraph>
              </Styled.ItemDesc>
            </Styled.ListItem>
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
                <span>NOTE:</span> <br />
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
                <span>EXAMPLE:</span> <br />
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
      <Styled.Container>
        <Styled.Content>
          <Styled.Title>
            <UI.Paragraph>5.4. THE ALGORITHM</UI.Paragraph>
            <Styled.DesktopImg
              width={563}
              height={359}
              src={algorithmPic}
              alt="algorithm"
            />
          </Styled.Title>
          <Styled.Description>
            <UI.Paragraph size={'large'}>
              When someone executes a deal on Tymio, the protocol searches for
              the best price and immediately executes a hedge option
              transaction: for instance, for BUY-LOW or SELL-HIGH — selling an
              option with the corresponding strike and duration using one of the
              available liquidity sources. The protocol itself is transactional
              and does not bear market risk. After the option settlement date,
              the earned call/put premium is transferred back to the client,
              minus fees (see Pic.1)
            </UI.Paragraph>
            <Styled.MobileImg
              width={462}
              height={274}
              src={algorithmPic}
              alt="algorithm"
            />
            <UI.Paragraph size={'large'}>
              In product phase one (see paragraph 4), a simple Ethereum smart
              contract is used to lock the funds until the expiration date and
              process incoming and outgoing transfers. Client funds are not
              transferred from the Tymio smart contract to liquidity providers
              or used in any other ways except as collateral for the deal, thus
              eliminating counterparty risks. The premium is generated through
              option liquidity providers, utilizing Tymio's own treasury funds.
              In product phase four, smart-routing logic will move to a
              smart-contract, connected only to DEXes, making the app
              non-custodial and decentralized.
            </UI.Paragraph>
          </Styled.Description>
        </Styled.Content>
      </Styled.Container>
      <Styled.SubContainer>
        <Styled.Content>
          <Styled.Title>
            <UI.H2>6. Risks</UI.H2>
            <Styled.DesktopImg
              width={563}
              height={369}
              src={strategyPic}
              alt="strategy"
            />
          </Styled.Title>
          <Styled.Description>
            <UI.Paragraph size={'large'}>
              There are several risks involved in using any crypto DeFi service,
              including: Market risk (or risk of asset price volatility and
              associated loss in USDC). These types of risks are different for
              SELL-HIGH and BUY-LOW.
            </UI.Paragraph>
            <UI.Paragraph size={'large'}>
              <span>SELL-HIGH</span> <br />
              As you are already holding ETH and are therefore exposed to its
              price fluctuation risk, using TYMIO doesn't add any additional
              risks. As described above in paragraph 5.1, at the contract expiry
              date you will have one of two scenarios, which are detailed at the
              signing of the contract. In case of selling ETH at a higher price,
              you are limiting your upside, as the asset price on the expiration
              date could be significantly higher than the price of the executed
              limit order. Therefore, your profit plus earned yield could be
              lower compared to the strategy of just holding the asset until the
              expiration date. Nevertheless, that would still be a better
              strategy than selling at the time of contract initiation, as you
              will sell it at a higher price plus earn additional yield.
            </UI.Paragraph>
            <Styled.MobileImg
              width={462}
              height={274}
              src={strategyPic}
              alt="strategy"
            />
            <UI.Paragraph size={'large'}>
              <span>BUY-LOW</span> <br />
              In the case of using BUY-LOW, you are locking USDC to buy ETH
              lower. At the time of the deal, you do not have exposure to ETH,
              but if a transaction is executed, you will swap your USDC for ETH
              at a certain price you set beforehand. At the time of settlement,
              the price of ETH plus earned yield could be lower than the price
              you set, resulting in an unrealized loss. As you can see, BUY-LOW
              is riskier than SELL-HIGH when measuring risks in USDC, so you
              should evaluate the contract text carefully and execute a deal
              with TYMIO only if buying ETH at a certain price level aligns with
              your long-term strategy. It's worth noting that this outcome is
              still better than buying ETH at the market price instead of using
              TYMIO BUY-LOW.
            </UI.Paragraph>
            <UI.Paragraph size={'large'}>
              <span>SMART CONTRACT VULNERABILITY RISK</span> <br />
              Coding errors or bugs in smart contracts can lead to hacks,
              exploits, or unintended consequences that can result in the loss
              of funds. TYMIO uses a simple smart contract to lock funds until
              settlement. Funds in the smart contract are insured with a 100K
              USDC reserve fund financed from the TYMIO treasury. At phase one,
              the smart contract is not audited by a third party.
            </UI.Paragraph>
            <UI.Paragraph size={'large'}>
              <span>COUNTERPARTY RISK.</span> <br />
              TYMIO uses option DEX/CEX liquidity and is exposed to their
              insolvency problems and other associated risks. TYMIO works only
              with top-tier industry leaders, aiming to mitigate this risk. As
              stated in paragraph 6.2, TYMIO uses its own liquidity as
              collateral at third-party liquidity providers, not exposing client
              funds.
            </UI.Paragraph>
            <UI.Paragraph size={'large'}>
              <span>CUSTODIAL RISK</span> <br />
              At phase one, TYMIO is a custodial service, and therefore exposed
              to all types of custodial risks. At phase three, TYMIO will become
              non-custodial and be exposed to smart contract and oracle risks.
            </UI.Paragraph>
            <UI.Paragraph size={'large'}>
              <span>REGULATORY RISK</span> <br />
              Regulatory risk refers to the potential that a change in laws and
              regulations will significantly impact a security, business,
              sector, or market. It can lead to substantial costs for affected
              parties and can even make operating in the affected area or
              industry unviable.
            </UI.Paragraph>
          </Styled.Description>
        </Styled.Content>
      </Styled.SubContainer>
      <Styled.Container>
        <Styled.Content>
          <Styled.Title>
            <UI.Paragraph size={'medium'}>
              IN THE CONTEXT OF TYMIO, A DECENTRALIZED STRUCTURED <br />
              PRODUCTS PROTOCOL (DSPP), REGULATORY RISK COULD MANIFEST <br /> IN
              SEVERAL WAYS:
            </UI.Paragraph>
          </Styled.Title>
          <Styled.Description>
            <UI.Paragraph size={'medium'}>
              <span>LEGAL CLASSIFICATION</span> <br />
              The underlying crypto assets or the financial products offered
              through TYMIO could be legally classified in a way that imposes
              more regulations or bans them entirely. For example, if a
              regulatory body determined that certain activities on TYMIO
              constitute securities trading, it could enforce securities laws,
              impose fines, or even shut down operations.
            </UI.Paragraph>
            <UI.Paragraph size={'medium'}>
              <span>TAX LAWS</span> <br />
              Changes in tax laws and regulations could affect the profitability
              of using TYMIO. For example, if crypto assets were subjected to
              higher capital gains taxes or if tax authorities were to treat
              crypto transactions differently, it could reduce the returns that
              users make.
            </UI.Paragraph>
            <UI.Paragraph size={'medium'}>
              <span>COMPLIANCE COSTS</span> <br />
              New regulations could introduce compliance costs that could affect
              the protocol's profitability and efficiency. For instance, if
              anti-money laundering (AML) or know-your-customer (KYC)
              regulations were imposed on decentralized protocols like TYMIO, it
              might lead to increased costs or hamper user accessibility.
            </UI.Paragraph>
            <UI.Paragraph size={'medium'}>
              <span>CROSS-BORDER REGULATIONS</span> <br />
              Given the global nature of cryptocurrencies, different
              jurisdictions could have varying regulations. These could affect
              how TYMIO functions in different countries, potentially
              restricting its global operations.
            </UI.Paragraph>
            <UI.Paragraph size={'medium'}>
              <span>CHANGES IN DEFI REGULATIONS</span> <br />
              As decentralized finance (DeFi) is still a relatively new field,
              its regulatory environment is not yet fully defined and could
              change rapidly. Any major changes could directly impact TYMIO and
              its users.
            </UI.Paragraph>
            <UI.Paragraph size={'medium'}>
              <span>PRIVACY LAWS</span> <br />
              Changes in data protection or privacy laws could impact the
              operations of blockchain-based protocols like TYMIO.
            </UI.Paragraph>
          </Styled.Description>
        </Styled.Content>
      </Styled.Container>
      <Styled.Container>
        <Styled.Content>
          <Styled.Title>
            <UI.H2>7. Competition</UI.H2>
          </Styled.Title>
          <Styled.Description>
            <Styled.ListItem>
              <UI.Paragraph size={TYPOGRAPHY_SIZE.LARGE}>1.</UI.Paragraph>
              <Styled.ItemDesc>
                <UI.Paragraph size={TYPOGRAPHY_SIZE.LARGE} uppercase>
                  DUAL INVESTMENT PRODUCTS BY CENTRALIZED CRYPTO EXCHANGES
                </UI.Paragraph>
                <UI.Paragraph>
                  These products represent strong competition at product phases
                  one and two. Many CEXs provide similar functionality. Once
                  phase three is completed, TYMIO will be a fully permissionless
                  protocol, offering significant advantages over centralized
                  venues. At phase one, TYMIO uses a 3-click approach, providing
                  better UX/UI than most CEX competitors. Additionally, from a
                  marketing perspective, TYMIO's product concept is easier to
                  understand.
                </UI.Paragraph>
              </Styled.ItemDesc>
            </Styled.ListItem>

            <Styled.ListItem>
              <UI.Paragraph size={TYPOGRAPHY_SIZE.LARGE}>2.</UI.Paragraph>
              <Styled.ItemDesc>
                <UI.Paragraph size={TYPOGRAPHY_SIZE.LARGE} uppercase>
                  FARMING PROTOCOLS
                </UI.Paragraph>
                <UI.Paragraph>
                  While farming yields can be higher than TYMIO's APR, they also
                  involve impermanent risk, volatility risks of tokens, and
                  complex UI/UX, which are typically designed for DeFi
                  professionals rather than the general public. TYMIO is simpler
                  to use.
                </UI.Paragraph>
              </Styled.ItemDesc>
            </Styled.ListItem>

            <Styled.ListItem>
              <UI.Paragraph size={TYPOGRAPHY_SIZE.LARGE}>3.</UI.Paragraph>
              <Styled.ItemDesc>
                <UI.Paragraph size={TYPOGRAPHY_SIZE.LARGE} uppercase>
                  STAKING
                </UI.Paragraph>
                <UI.Paragraph>
                  Staking yields for ETH are currently less than 10% APR, but
                  staking is still seen as a main competitor to TYMIO.
                </UI.Paragraph>
              </Styled.ItemDesc>
            </Styled.ListItem>

            <Styled.ListItem>
              <UI.Paragraph size={TYPOGRAPHY_SIZE.LARGE}>4.</UI.Paragraph>
              <Styled.ItemDesc>
                <UI.Paragraph size={TYPOGRAPHY_SIZE.LARGE} uppercase>
                  OPTION VAULTS
                </UI.Paragraph>
                <UI.Paragraph>
                  Although decentralized and providing exposure to similar
                  covered call/put strategies, option vaults cannot be
                  customized and tailored to one's needs like TYMIO's "limit
                  order with yield" product.
                </UI.Paragraph>
              </Styled.ItemDesc>
            </Styled.ListItem>
          </Styled.Description>
        </Styled.Content>
      </Styled.Container>
      <Styled.Container>
        <Styled.Content>
          <Styled.Title>
            <UI.H2>8. Conclusion</UI.H2>
          </Styled.Title>
          <Styled.Description>
            <UI.Paragraph size={'large'}>
              TYMIO DSPP is set to disrupt the market for crypto structured
              products. It is a web3 protocol designed for the increasing number
              of crypto asset holders who are looking for efficient tools to
              generate higher yields on their assets. It allows users to create
              customized structured products with specified durations and price
              levels. Built on top of option liquidity sources, DSPP enables the
              general crypto-holding public to execute their income strategies
              without engaging in active trading. This makes it an accessible
              solution for those seeking passive income with more control over
              their investments.
            </UI.Paragraph>
          </Styled.Description>
        </Styled.Content>
      </Styled.Container>
      <Styled.Container>
        <Styled.Content>
          <Styled.Title>
            <UI.H2>9. References</UI.H2>
          </Styled.Title>
          <Styled.Description>
            <UI.Paragraph size={'large'}>
              <a href="https://www.bloomberg.com">Bloomberg.com →</a> <br />
              Sure time to grasp the potential of structured products
            </UI.Paragraph>
            {/* TODO сделать ссылку */}
            <UI.Paragraph size={'large'}>
              <a href="https://sell-high.io/">Start earning → </a> <br />
              Sell higher than market and earn extra yield, buy lower than
              market and earn extra yield with Tymio App
            </UI.Paragraph>
          </Styled.Description>
        </Styled.Content>
      </Styled.Container>
    </Styled.WhitePaper>
  );
};

export default WhitePaper;
