import { useEffect, useState } from 'react';
import BlogService from '../../../services/blog.service';

const useBlog = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [blogs, setBlogs] = useState([
    {
      id: 1,
      heading: 'investing ',
      title: 'Overview of low-risk strategies for investing in digital assets',
      description:
        'Explore low-risk strategies for investing in digital assets and learn how the innovative Tymio platform combines limit orders with yield to provide secure and profitable opportunities in the dynamic crypto market.',
      date: '8.04.2024',
      authorName: 'TYMIO team',
      authorOccupation: '',
      big: true,
      color: 'BLACK',
      background: 'LEMON',
      articleBlog: {
        tableOfContents: [
          {
            title:
              'Overview of low-risk strategies for investing in digital assets',
            id: '0',
          },
          { title: 'Staking', id: 'staking' },
          { title: 'Yield Farming', id: 'yieldFarming' },
          { title: 'Trading', id: 'trading' },
          { title: 'Tymio', id: 'tymio' },
          { title: 'In Summary', id: 'inSummary' },
        ],
        content: [
          {
            header:
              'Overview of low-risk strategies for investing in digital assets',
            id: '0',
          },
          {
            text: 'Any investment strategies are built around two key factors: return and degree of risk. Investors choose personalized investment strategies based on their preferences and their willingness or unwillingness to risk their capital for higher returns.',
          },
          {
            text: "The same principles apply to cryptocurrency investing. Let's take a comparative look at the profitability and riskiness of such crypto investing strategies as staking, farming, and trading. Additionally, we’ll explore the unique features of the <a href='https://tymio.com/' rel='noreferrer' target='_blank'>Tymio</a>  platform that allows users to place limit orders with yield. We will also compare these three popular strategies with the opportunities that the Tymio platform offers to crypto investors.",
          },
          { bigHeader: 'Staking', id: 'staking' },
          {
            text: 'Staking is a process where investors lock up their crypto assets to support network operations and validate transactions. In return, stakers receive rewards in the form of additional tokens.',
          },
          {
            list: [
              {
                label: 'Risk',
                listItem: [
                  'Staking is generally considered low-risk because it involves holding assets rather than actively trading them.',
                  'The value of assets locked in staking, as well as the value of the staking reward, is directly related to the market rate of the crypto asset selected for staking. In case of a collapse of the market rate, which is a common phenomenon in the crypto market, the profitability of staking can go into negative territory.',
                  'There is still a risk of slashing (losing a portion of staked assets) if a validator behaves maliciously or goes offline.',
                ],
              },
              {
                label: 'Profitability',
                listItem: [
                  'Staking can be profitable due to consistent rewards.',
                  'The profitability depends on the network’s token price, staking percentage, and inflation rate.',
                ],
              },
            ],
          },
          {
            earningBanner: true,
          },
          {
            bigHeader: 'Yield Farming',
            id: 'yieldFarming',
          },
          {
            text: 'Yield farming is a DeFi practice where liquidity providers (LPs) contribute their tokens to liquidity pools on decentralized lending or exchange protocols. In return, they earn rewards (often in the form of additional tokens) for providing liquidity.',
          },
          {
            list: [
              {
                label: 'Risk',
                listItem: [
                  'Yield farming can be highly rewarding but also risky.',
                  'Impermanent loss occurs when the value of the tokens in the pool diverges from the initial deposit. The LP may lose out compared to simply holding the tokens.',
                  'Smart contract risks: Smart contracts are prone to errors, bugs, or malicious attacks, potentially resulting in the loss or theft of funds.',
                  'Market volatility can result in losses for both borrowers and lenders, especially during turbulent market conditions.',
                ],
              },
              {
                label: 'Profitability',
                listItem: [
                  'High APYs (Annual Percentage Yields) can make yield farming profitable.',
                  'However, it requires active management and understanding of the risks involved.',
                ],
              },
            ],
          },
          {
            bigHeader: 'Trading',
            id: 'trading',
          },
          {
            text: 'Trading involves buying and selling assets on exchanges to profit from price fluctuations. Traders use various strategies, including technical analysis, fundamental analysis, and market timing.',
          },
          {
            list: [
              {
                label: 'Risk',
                listItem: [
                  'Trading is high-risk due to market volatility, leverage, and emotional biases.',
                  'Losses can occur rapidly, especially during market downturns.',
                ],
              },
              {
                label: 'Profitability',
                listItem: [
                  'Successful traders can generate substantial profits, but many traders also suffer losses.',
                  'It requires skill, experience, and discipline.',
                ],
              },
            ],
          },

          {
            bigHeader:
              '<a href="https://tymio.com/" rel="noreferrer" target="_blank">TYMIO →</a>',
            id: 'tymio',
          },
          // {
          //          tymioBanner: true,
          //         },
          {
            text: 'Tymio is an innovative platform that combines limit orders with yield. Users can set time-limit orders with yield for assets like ETH or WBTC.',
          },
          {
            list: [
              {
                label: 'How it works',
                listItem: [
                  'Users can set a maximum price (the limit) to buy or sell BTC or ETH at a price above or below the market price.',
                  "Additionally, Tymio introduces an innovative 'time-limit orders with yield’ feature. This means that the order will only execute if the market price reaches the specified limit and meets the yield criteria. Even if the order is not executed, the user receives the specified return plus get his crypto-assets back. If the order is executed at a favorable price for the user, the user will receive the benefit of the sale/purchase plus the specified yield from Tymio.",
                  'The yield component adds an extra layer of flexibility and potential profit.',
                ],
              },
              {
                label: 'Benefits',
                listItem: [
                  'Risk Management: By combining limit orders with yield, users can manage risk more effectively.',
                  'Profit Potential: Users can benefit from both the price difference and the yield. By placing orders on Tymio the user insures his income against crypto market volatility, which is usually the cause of financial losses.',
                  'Tymio is a DeFi platform. Recall that in decentralized financial platforms (DeFi), crypto-assets are fully owned by their owners, unlike centralized platforms',
                  'Educational Value: Tymio encourages users to explore different trading strategies and understand the dynamics of limit orders and yields.',
                ],
              },
              {
                label: 'Risk',
                listItem: [
                  "Tymio's risks are common to all smart contract-based cryptocurrencies. But it should be noted that Tymio smart contracts have successfully <a href='https://twitter.com/TYMIOapp/status/1771170769948561711' rel='noreferrer' target='_blank'>passed the security audit</a> conducted by Pessimistic.",
                ],
              },
              {
                label: 'Profitability',
                listItem: [
                  'Tymio allows users to potentially profit from both price movements and yield.',
                  'Moreover, the pre-designated profitability is guaranteed to the user regardless of the execution or non-execution of the order. Therefore, Tymio has significant advantages over other crypto investment strategies.',
                ],
              },
            ],
          },

          { bigHeader: 'In summary:', id: 'inSummary' },
          {
            list: [
              {
                label: 'Staking is low-risk but offers moderate returns.',
              },
              {
                label:
                  'Yield farming can be highly rewarding but comes with higher risks.',
              },
              {
                label:
                  'Trading offers potential profits but is risky and requires skill.',
              },
              {
                label:
                  'Tymio provides a novel way to combine limit orders and yield, offering a different avenue for potential profitability.',
              },
            ],
          },
          {
            text: "Unlike traditional trading, where you're at the mercy of market fluctuations, Tymio lets you execute orders exactly as planned. While your limit orders are pending, Tymio puts your idle assets to work. You earn yield on crypto assets, enhancing your overall returns. So, Tymio offers a unique blend of precision, yield, and risk management, making it an attractive choice for crypto investors seeking a smarter way to navigate the market and build up a capital.",
          },
          {
            text: 'The revolutionary nature of crypto-assets and the innovative flexibility of their management opens up impressive opportunities for fintechs, like an innovative crypto asset investment strategy developed by Tymio.',
          },
        ],
        related: [
          {
            id: 2,
            header: 'Investing',
            title:
              'TYMIO: Revolutionazing Crypto Investing with Safe, Yield-Generating Strategies',
            date: '16.04.2024',
            nameAuthor: 'Tymio Team',
          },
        ],
      },
    },
    {
      id: 2,
      heading: 'Investing',
      title:
        'TYMIO: Revolutionazing Crypto Investing with Safe, Yield-Generating Strategies',
      description:
        ' Learn the safe yield-generating strategies and how the platform offers accessible options trading and fixed yields in the DeFi landscape.',
      date: '16.04.2024',
      authorName: 'Tymio Team',
      big: false,
      color: 'BLACK',
      background: 'LEMON',
      articleBlog: {
        tableOfContents: [
          {
            title: `TYMIO: Revolutionizing Crypto Investing with Safe, Yield-Generating Strategies`,
            id: '0',
          },
          { title: "TYMIO's Innovative Approach", id: '1' },
          { title: 'A User-Friendly Experience', id: '2' },
          { title: 'Challenges and Opportunities', id: '3' },
          { title: "The TYMIO Team's Perspective", id: '4' },
          { title: 'The Road Ahead', id: '5' },
        ],
        content: [
          {
            header:
              'TYMIO: Revolutionizing Crypto Investing with Safe, Yield-Generating Strategies',
            id: 0,
          },
          {
            text: 'Contrary to the common misconception, the crypto market has various strategies to generate substantial returns without exposing investors to excessive risk. One such approach, "selling covered calls," has long been employed by seasoned professionals like Warren Buffett in classical financial markets. TYMIO has recognized the potential of these strategies and has successfully transposed them into the crypto ecosystem, where the necessary infrastructure in the form of options exchanges already exists.',
          },
          {
            text: 'Mentioning "options" can often conjure images of complex mathematical formulas and high-risk gambles. However, TYMIO has set out to challenge this perception by adapting low-risk strategies from traditional finance and making them accessible to the average crypto user.',
          },
          { bigHeader: "TYMIO's Innovative Approach", id: '1' },
          {
            text: "TYMIO's mission is to redefine how crypto investors interact with the market and earn passive income. The TYMIO app, launched at the end of 2022, offered users two distinct scenarios to generate yield on their digital assets:",
          },
          {
            list: [
              {
                label:
                  'Sell an asset, such as Ethereum (ETH), above the current market price: In this scenario, the user locks their ETH in a smart contract for a specified duration, typically seven days, to sell it at a predetermined price higher than the market rate. Regardless of whether the order is executed or not, the user receives a guaranteed yield, usually ranging from 0.5% to 1% of the total transaction amount.',
              },
              {
                label:
                  'Buy an asset, such as ETH, below the current market price: In this mirrored scenario, the user commits USDC (a stablecoin) to purchase the asset at a price lower than the prevailing market rate. While the risks are slightly higher in this case, as the user could potentially end up with a negative position if the market drops significantly, it still offers a more favorable outcome than an immediate market buy.',
              },
            ],
          },
          {
            earningBanner: true,
          },
          {
            text: 'By offering these two distinct scenarios, TYMIO has created a platform that caters to buyers and sellers, allowing them to earn passive income on their crypto holdings without the need for extensive trading expertise or time-consuming activities.',
          },
          {
            bigHeader: 'A User-Friendly Experience',
            id: '2',
          },
          {
            text: `A critical factor contributing to TYMIO's success is its focus on simplicity and user-friendliness. The protocol has consciously avoided the complexity that often plagues centralized exchanges regarding similar "dual currency" or "dual investment" products.`,
          },
          {
            text: `Instead, TYMIO has distilled the process into three simple clicks, allowing users to understand and engage with the platform easily.`,
          },
          {
            text: `The metric of "loyal customers," defined as those who have made more than one transaction on the system, is a testament to TYMIO's ability to resonate with its target audience. Impressively, this figure stands at a remarkable 80-85%, indicating that the protocol has struck a chord with the crypto community.`,
          },
          {
            text: `One of TYMIO's clients aptly described the platform as "a place where you can place a limit order with yield," a phrase that instantly resonates with those familiar with trading terminology. TYMIO explains the process in plain language for those new to the concept, highlighting the opportunity to earn passive income by simply indicating their intention to buy or sell a particular asset.`,
          },
          {
            bigHeader: 'Challenges and Opportunities',
            id: '3',
          },
          {
            text: `As with any innovative venture, TYMIO has faced its fair share of challenges. One of the primary hurdles is the need for larger order sizes to achieve meaningful returns. The TYMIO's target clientele is not the speculative trader but rather the more cautious investor with significant capital. These clients often exhibit a higher level of skepticism towards startups, posing a unique challenge for TYMIO to overcome.
            `,
          },
          {
            text: `Additionally, TYMIO's earnings are directly tied to market volatility, making the protocol vulnerable to periods of low volatility, as witnessed in September 2023. However, the team's resilience and adaptability were displayed as they weathered the storm and saw a resurgence in returns by October, when volatility returned to more favorable levels.
            `,
          },
          {
            text: `Despite these challenges, TYMIO's confidence in its unicorn potential is rooted in three fundamental premises:
            `,
          },
          {
            list: [
              {
                label:
                  'The continued growth of the digital asset market is fueling demand for innovative investment solutions.',
              },
              {
                label:
                  "The increasing popularity and demand for low-risk, high-return structured products align with TYMIO's core offerings.",
              },
              {
                label:
                  'The gradual mainstream adoption of the "limit orders with yield" concept, as more investors recognize the benefits of this approach.',
              },
            ],
          },
          {
            bigHeader: 'Navigating Crypto Market Conditions',
            id: '4',
          },
          {
            text: 'As of the end of January 2024, TYMIO has witnessed remarkable growth, with the turnover of its intelligent contracts reaching approximately $7.5 million and the number of transactions approaching 1,500. The protocol has further expanded its offerings, supporting Wrapped Bitcoin (WBTC) and the Arbitrum network and enhancing its user interface through a comprehensive redesign.',
          },
          {
            text: "To further strengthen its presence and support its users, TYMIO has launched a dedicated Telegram group, showcasing a model strategy that generated a remarkable 30% return on actual trades in 2023. This initiative provides educational resources and fosters a sense of community among TYMIO's growing user base.",
          },
          {
            bigHeader: "The TYMIO Team's Perspective",
            id: '5',
          },
          {
            text: 'Despite the constant challenges and a succession of diverse tasks, the TYMIO team takes pride in the fact that they are making a tangible difference in the lives of their users. The team derives immense satisfaction from the knowledge that they are helping people earn money in the crypto market in a predictable and stress-free manner, without the typical market-related anxieties.',
          },
          {
            text: "The TYMIO team's unwavering commitment to their mission is a testament to their belief in the protocol's disruptive potential. They are driven by the conviction that their unique approach to structured products in the crypto space will continue to resonate with investors, ultimately solidifying TYMIO's position as a trailblazer.",
          },
          {
            bigHeader: 'The Road Ahead',
            id: '6',
          },
          {
            text: 'As TYMIO looks towards the future, the team remains steadfast in its pursuit of innovation and growth. With the digital asset market poised for continued expansion and the increasing demand for low-risk, high-return investment strategies, TYMIO is well-positioned to capitalize on these favorable trends.',
          },
          {
            text: "The protocol's unwavering focus on user-friendliness and simplicity has been a critical driver of its success, and the team is committed to further enhancing the platform's accessibility and functionality. By constantly adapting to the evolving needs of the crypto community, TYMIO aims to cement its status as a trusted and indispensable tool for savvy investors seeking to navigate the complex crypto landscape with confidence and ease.",
          },
          {
            text: 'With a strong foundation, a resilient team, and a clear vision for the future, TYMIO is poised to play a pivotal role in shaping how crypto investors approach the market and generate sustainable returns on their digital assets.',
          },
        ],
        related: [
          {
            id: 1,
            header: 'Investing',
            title:
              'Overview of low-risk strategies for investing in digital assets',
            date: '8.04.2024',
            nameAuthor: 'Tymio Team',
          },
        ],
      },
    },
    // {
    //   id: 2,
    //   heading: 'Heading 1',
    //   title: 'Name of the article can consist from one to three lines length',
    //   description:
    //     'The Decentralized Structured Products Protocol (DSPP) enables the creation of financial products and strategies tailored to the needs of a broad range of non-professional users, thereby making the management of crypto assets more efficient and accessible.',
    //   date: '03.06.2023 (updated — 04.08.2024)',
    //   authorName: 'Name of the author ',
    //   authorOccupation: 'Occupation',
    //   big: false,
    //   color: 'BLACK',
    //   background: 'LEMON',
    //   articleBlog: {
    //     tableOfContents: [
    //       'Subtitle',
    //       'Subtitle a few lines',
    //       'Subtitle',
    //       'Subtitle Subtitle a few lines',
    //       'Subtitle a few lines',
    //       'Subtitle subtitle subtitle ',
    //     ],
    //     content: [
    //       {
    //         text: 'The Decentralized Structured Products Protocol (DSPP) enables the creation of financial products and strategies tailored to the needs of a broad range of non-professional users, thereby making the management of crypto assets more efficient and accessible.',
    //       },
    //       { header: 'Subtitle' },
    //       {
    //         text: 'Structured products are well-known in traditional fiat finance, typically offered by banks to high net worth individuals (HNWI) as pre-packaged, out-of-the-box products. According to Bloomberg, the total structured product market accounts for over $7 trillion in invested assets*. We expect several trends to continue over time, such as overall financial literacy growth and increasing crypto/DeFi adoption worldwide. Currently, there is strong demand for low-risk financial solutions that can produce higher yields on crypto assets. ',
    //       },
    //       {
    //         earningBanner: true,
    //       },
    //       {
    //         text: 'The Decentralized Structured Products Protocol (DSPP) enables the creation of financial products and strategies tailored to the needs of a broad range of non-professional users, thereby making the management of crypto assets more efficient and accessible.',
    //       },
    //       {
    //         bigHeader:
    //           'Important point that need to be highlighted in a few line, not too long. Highlighting key points concisely is crucial. Important point that need to be highlighted.',
    //       },
    //       { header: 'Subtitle' },
    //       {
    //         text: 'Structured products are well-known in traditional fiat finance, typically offered by banks to high net worth individuals (HNWI) as pre-packaged, out-of-the-box products. According to Bloomberg, the total structured product market accounts for over $7 trillion in invested assets*. We expect several trends to continue over time, such as overall financial literacy growth and increasing crypto/DeFi adoption worldwide. Currently, there is strong demand for low-risk financial solutions that can produce higher yields on crypto assets. ',
    //       },
    //       {
    //         image: {
    //           link: 'default',
    //           imageDescription: 'Caption for photo or illustrations',
    //         },
    //       },
    //       {
    //         text: 'The Decentralized Structured Products Protocol (DSPP) enables the creation of financial products and strategies tailored to the needs of a broad range of non-professional users, thereby making the management of crypto assets more efficient and accessible.',
    //       },
    //     ],
    // related: [
    //   {
    //     id: 1,
    //     header: 'Heading 1',
    //     title: 'Name of the article can consist from one to three lines',
    //     date: '03.06.2023 (updated — 04.08.2024)',
    //     nameAuthor: 'Name of the author',
    //     occupation: 'Occupation',
    //   },
    //   {
    //     id: 2,
    //     header: 'Heading 1',
    //     title: 'Name of the article can consist from one to three lines',
    //     date: '03.06.2023 (updated — 04.08.2024)',
    //     nameAuthor: 'Name of the author',
    //     occupation: 'Occupation',
    //   },
    //   {
    //     id: 3,
    //     header: 'Heading 1',
    //     title: 'Name of the article can consist from one to three lines',
    //     date: '03.06.2023 (updated — 04.08.2024)',
    //     nameAuthor: 'Name of the author',
    //     occupation: 'Occupation',
    //   },
    // ],
    //   },
    // },
    // {
    //   id: 3,
    //   heading: 'Heading 1',
    //   title: 'Name of the article can consist from one to three lines length',
    //   description:
    //     'The Decentralized Structured Products Protocol (DSPP) enables the creation of financial products and strategies tailored to the needs of a broad range of non-professional users, thereby making the management of crypto assets more efficient and accessible.',
    //   date: '03.06.2023 (updated — 04.08.2024)',
    //   authorName: 'Name of the author ',
    //   authorOccupation: 'Occupation',
    //   big: false,
    //   color: 'BLACK',
    //   background: 'PURPLE-BRIGHT',
    //   articleBlog: {
    //     tableOfContents: [
    //       'Subtitle',
    //       'Subtitle a few lines',
    //       'Subtitle',
    //       'Subtitle Subtitle a few lines',
    //       'Subtitle a few lines',
    //       'Subtitle subtitle subtitle ',
    //     ],
    //     content: [
    //       {
    //         text: 'The Decentralized Structured Products Protocol (DSPP) enables the creation of financial products and strategies tailored to the needs of a broad range of non-professional users, thereby making the management of crypto assets more efficient and accessible.',
    //       },
    //       { header: 'Subtitle' },
    //       {
    //         text: 'Structured products are well-known in traditional fiat finance, typically offered by banks to high net worth individuals (HNWI) as pre-packaged, out-of-the-box products. According to Bloomberg, the total structured product market accounts for over $7 trillion in invested assets*. We expect several trends to continue over time, such as overall financial literacy growth and increasing crypto/DeFi adoption worldwide. Currently, there is strong demand for low-risk financial solutions that can produce higher yields on crypto assets. ',
    //       },
    //       {
    //         earningBanner: true,
    //       },
    //       {
    //         text: 'The Decentralized Structured Products Protocol (DSPP) enables the creation of financial products and strategies tailored to the needs of a broad range of non-professional users, thereby making the management of crypto assets more efficient and accessible.',
    //       },
    //       {
    //         bigHeader:
    //           'Important point that need to be highlighted in a few line, not too long. Highlighting key points concisely is crucial. Important point that need to be highlighted.',
    //       },
    //       { header: 'Subtitle' },
    //       {
    //         text: 'Structured products are well-known in traditional fiat finance, typically offered by banks to high net worth individuals (HNWI) as pre-packaged, out-of-the-box products. According to Bloomberg, the total structured product market accounts for over $7 trillion in invested assets*. We expect several trends to continue over time, such as overall financial literacy growth and increasing crypto/DeFi adoption worldwide. Currently, there is strong demand for low-risk financial solutions that can produce higher yields on crypto assets. ',
    //       },
    //       {
    //         image: {
    //           link: 'default',
    //           imageDescription: 'Caption for photo or illustrations',
    //         },
    //       },
    //       {
    //         text: 'The Decentralized Structured Products Protocol (DSPP) enables the creation of financial products and strategies tailored to the needs of a broad range of non-professional users, thereby making the management of crypto assets more efficient and accessible.',
    //       },
    //     ],
    //     related: [
    //       {
    //         id: 1,
    //         header: 'Heading 1',
    //         title: 'Name of the article can consist from one to three lines',
    //         date: '03.06.2023 (updated — 04.08.2024)',
    //         nameAuthor: 'Name of the author',
    //         occupation: 'Occupation',
    //       },
    //       {
    //         id: 2,
    //         header: 'Heading 1',
    //         title: 'Name of the article can consist from one to three lines',
    //         date: '03.06.2023 (updated — 04.08.2024)',
    //         nameAuthor: 'Name of the author',
    //         occupation: 'Occupation',
    //       },
    //       {
    //         id: 3,
    //         header: 'Heading 1',
    //         title: 'Name of the article can consist from one to three lines',
    //         date: '03.06.2023 (updated — 04.08.2024)',
    //         nameAuthor: 'Name of the author',
    //         occupation: 'Occupation',
    //       },
    //     ],
    //   },
    // },
    // {
    //   id: 4,
    //   heading: 'Heading 1',
    //   title: 'Name of the article can consist from one to three lines length',
    //   description:
    //     'The Decentralized Structured Products Protocol (DSPP) enables the creation of financial products and strategies tailored to the needs of a broad range of non-professional users, thereby making the management of crypto assets more efficient and accessible.',
    //   date: '03.06.2023 (updated — 04.08.2024)',
    //   authorName: 'Name of the author ',
    //   authorOccupation: 'Occupation',
    //   big: false,
    //   color: 'LIGHT',
    //   background: 'BLACK',
    //   articleBlog: {
    //     tableOfContents: [
    //       'Subtitle',
    //       'Subtitle a few lines',
    //       'Subtitle',
    //       'Subtitle Subtitle a few lines',
    //       'Subtitle a few lines',
    //       'Subtitle subtitle subtitle ',
    //     ],
    //     content: [
    //       {
    //         text: 'The Decentralized Structured Products Protocol (DSPP) enables the creation of financial products and strategies tailored to the needs of a broad range of non-professional users, thereby making the management of crypto assets more efficient and accessible.',
    //       },
    //       { header: 'Subtitle' },
    //       {
    //         text: 'Structured products are well-known in traditional fiat finance, typically offered by banks to high net worth individuals (HNWI) as pre-packaged, out-of-the-box products. According to Bloomberg, the total structured product market accounts for over $7 trillion in invested assets*. We expect several trends to continue over time, such as overall financial literacy growth and increasing crypto/DeFi adoption worldwide. Currently, there is strong demand for low-risk financial solutions that can produce higher yields on crypto assets. ',
    //       },
    //       {
    //         earningBanner: true,
    //       },
    //       {
    //         text: 'The Decentralized Structured Products Protocol (DSPP) enables the creation of financial products and strategies tailored to the needs of a broad range of non-professional users, thereby making the management of crypto assets more efficient and accessible.',
    //       },
    //       {
    //         bigHeader:
    //           'Important point that need to be highlighted in a few line, not too long. Highlighting key points concisely is crucial. Important point that need to be highlighted.',
    //       },
    //       { header: 'Subtitle' },
    //       {
    //         text: 'Structured products are well-known in traditional fiat finance, typically offered by banks to high net worth individuals (HNWI) as pre-packaged, out-of-the-box products. According to Bloomberg, the total structured product market accounts for over $7 trillion in invested assets*. We expect several trends to continue over time, such as overall financial literacy growth and increasing crypto/DeFi adoption worldwide. Currently, there is strong demand for low-risk financial solutions that can produce higher yields on crypto assets. ',
    //       },
    //       {
    //         image: {
    //           link: 'default',
    //           imageDescription: 'Caption for photo or illustrations',
    //         },
    //       },
    //       {
    //         text: 'The Decentralized Structured Products Protocol (DSPP) enables the creation of financial products and strategies tailored to the needs of a broad range of non-professional users, thereby making the management of crypto assets more efficient and accessible.',
    //       },
    //     ],
    //     related: [
    //       {
    //         id: 1,
    //         header: 'Heading 1',
    //         title: 'Name of the article can consist from one to three lines',
    //         date: '03.06.2023 (updated — 04.08.2024)',
    //         nameAuthor: 'Name of the author',
    //         occupation: 'Occupation',
    //       },
    //       {
    //         id: 2,
    //         header: 'Heading 1',
    //         title: 'Name of the article can consist from one to three lines',
    //         date: '03.06.2023 (updated — 04.08.2024)',
    //         nameAuthor: 'Name of the author',
    //         occupation: 'Occupation',
    //       },
    //       {
    //         id: 3,
    //         header: 'Heading 1',
    //         title: 'Name of the article can consist from one to three lines',
    //         date: '03.06.2023 (updated — 04.08.2024)',
    //         nameAuthor: 'Name of the author',
    //         occupation: 'Occupation',
    //       },
    //     ],
    //   },
    // },
    // {
    //   id: 5,
    //   heading: 'Heading 1',
    //   title: 'Name of the article can consist from one to three lines length',
    //   description:
    //     'The Decentralized Structured Products Protocol (DSPP) enables the creation of financial products and strategies tailored to the needs of a broad range of non-professional users, thereby making the management of crypto assets more efficient and accessible.',
    //   date: '03.06.2023 (updated — 04.08.2024)',
    //   authorName: 'Name of the author ',
    //   authorOccupation: 'Occupation',
    //   big: false,
    //   color: 'BLACK',
    //   background: 'GRADIENT_RED_PINK',
    //   articleBlog: {
    //     tableOfContents: [
    //       'Subtitle',
    //       'Subtitle a few lines',
    //       'Subtitle',
    //       'Subtitle Subtitle a few lines',
    //       'Subtitle a few lines',
    //       'Subtitle subtitle subtitle ',
    //     ],
    //     content: [
    //       {
    //         text: 'The Decentralized Structured Products Protocol (DSPP) enables the creation of financial products and strategies tailored to the needs of a broad range of non-professional users, thereby making the management of crypto assets more efficient and accessible.',
    //       },
    //       { header: 'Subtitle' },
    //       {
    //         text: 'Structured products are well-known in traditional fiat finance, typically offered by banks to high net worth individuals (HNWI) as pre-packaged, out-of-the-box products. According to Bloomberg, the total structured product market accounts for over $7 trillion in invested assets*. We expect several trends to continue over time, such as overall financial literacy growth and increasing crypto/DeFi adoption worldwide. Currently, there is strong demand for low-risk financial solutions that can produce higher yields on crypto assets. ',
    //       },
    //       {
    //         earningBanner: true,
    //       },
    //       {
    //         text: 'The Decentralized Structured Products Protocol (DSPP) enables the creation of financial products and strategies tailored to the needs of a broad range of non-professional users, thereby making the management of crypto assets more efficient and accessible.',
    //       },
    //       {
    //         bigHeader:
    //           'Important point that need to be highlighted in a few line, not too long. Highlighting key points concisely is crucial. Important point that need to be highlighted.',
    //       },
    //       { header: 'Subtitle' },
    //       {
    //         text: 'Structured products are well-known in traditional fiat finance, typically offered by banks to high net worth individuals (HNWI) as pre-packaged, out-of-the-box products. According to Bloomberg, the total structured product market accounts for over $7 trillion in invested assets*. We expect several trends to continue over time, such as overall financial literacy growth and increasing crypto/DeFi adoption worldwide. Currently, there is strong demand for low-risk financial solutions that can produce higher yields on crypto assets. ',
    //       },
    //       {
    //         image: {
    //           link: 'default',
    //           imageDescription: 'Caption for photo or illustrations',
    //         },
    //       },
    //       {
    //         text: 'The Decentralized Structured Products Protocol (DSPP) enables the creation of financial products and strategies tailored to the needs of a broad range of non-professional users, thereby making the management of crypto assets more efficient and accessible.',
    //       },
    //     ],
    //     related: [
    //       {
    //         id: 1,
    //         header: 'Heading 1',
    //         title: 'Name of the article can consist from one to three lines',
    //         date: '03.06.2023 (updated — 04.08.2024)',
    //         nameAuthor: 'Name of the author',
    //         occupation: 'Occupation',
    //       },
    //       {
    //         id: 2,
    //         header: 'Heading 1',
    //         title: 'Name of the article can consist from one to three lines',
    //         date: '03.06.2023 (updated — 04.08.2024)',
    //         nameAuthor: 'Name of the author',
    //         occupation: 'Occupation',
    //       },
    //       {
    //         id: 3,
    //         header: 'Heading 1',
    //         title: 'Name of the article can consist from one to three lines',
    //         date: '03.06.2023 (updated — 04.08.2024)',
    //         nameAuthor: 'Name of the author',
    //         occupation: 'Occupation',
    //       },
    //     ],
    //   },
    // },
    // {
    //   id: 6,
    //   heading: 'Heading 1',
    //   title: 'Name of the article can consist from one to three lines length',
    //   description:
    //     'The Decentralized Structured Products Protocol (DSPP) enables the creation of financial products and strategies tailored to the needs of a broad range of non-professional users, thereby making the management of crypto assets more efficient and accessible.',
    //   date: '03.06.2023 (updated — 04.08.2024)',
    //   authorName: 'Name of the author ',
    //   authorOccupation: 'Occupation',
    //   big: false,
    //   color: 'BLACK',
    //   background: 'PURPLE_LIGHT',
    //   articleBlog: {
    //     tableOfContents: [
    //       'Subtitle',
    //       'Subtitle a few lines',
    //       'Subtitle',
    //       'Subtitle Subtitle a few lines',
    //       'Subtitle a few lines',
    //       'Subtitle subtitle subtitle ',
    //     ],
    //     content: [
    //       {
    //         text: 'The Decentralized Structured Products Protocol (DSPP) enables the creation of financial products and strategies tailored to the needs of a broad range of non-professional users, thereby making the management of crypto assets more efficient and accessible.',
    //       },
    //       { header: 'Subtitle' },
    //       {
    //         text: 'Structured products are well-known in traditional fiat finance, typically offered by banks to high net worth individuals (HNWI) as pre-packaged, out-of-the-box products. According to Bloomberg, the total structured product market accounts for over $7 trillion in invested assets*. We expect several trends to continue over time, such as overall financial literacy growth and increasing crypto/DeFi adoption worldwide. Currently, there is strong demand for low-risk financial solutions that can produce higher yields on crypto assets. ',
    //       },
    //       {
    //         earningBanner: true,
    //       },
    //       {
    //         text: 'The Decentralized Structured Products Protocol (DSPP) enables the creation of financial products and strategies tailored to the needs of a broad range of non-professional users, thereby making the management of crypto assets more efficient and accessible.',
    //       },
    //       {
    //         bigHeader:
    //           'Important point that need to be highlighted in a few line, not too long. Highlighting key points concisely is crucial. Important point that need to be highlighted.',
    //       },
    //       { header: 'Subtitle' },
    //       {
    //         text: 'Structured products are well-known in traditional fiat finance, typically offered by banks to high net worth individuals (HNWI) as pre-packaged, out-of-the-box products. According to Bloomberg, the total structured product market accounts for over $7 trillion in invested assets*. We expect several trends to continue over time, such as overall financial literacy growth and increasing crypto/DeFi adoption worldwide. Currently, there is strong demand for low-risk financial solutions that can produce higher yields on crypto assets. ',
    //       },
    //       {
    //         image: {
    //           link: 'default',
    //           imageDescription: 'Caption for photo or illustrations',
    //         },
    //       },
    //       {
    //         text: 'The Decentralized Structured Products Protocol (DSPP) enables the creation of financial products and strategies tailored to the needs of a broad range of non-professional users, thereby making the management of crypto assets more efficient and accessible.',
    //       },
    //     ],
    //     related: [
    //       {
    //         id: 1,
    //         header: 'Heading 1',
    //         title: 'Name of the article can consist from one to three lines',
    //         date: '03.06.2023 (updated — 04.08.2024)',
    //         nameAuthor: 'Name of the author',
    //         occupation: 'Occupation',
    //       },
    //       {
    //         id: 2,
    //         header: 'Heading 1',
    //         title: 'Name of the article can consist from one to three lines',
    //         date: '03.06.2023 (updated — 04.08.2024)',
    //         nameAuthor: 'Name of the author',
    //         occupation: 'Occupation',
    //       },
    //       {
    //         id: 3,
    //         header: 'Heading 1',
    //         title: 'Name of the article can consist from one to three lines',
    //         date: '03.06.2023 (updated — 04.08.2024)',
    //         nameAuthor: 'Name of the author',
    //         occupation: 'Occupation',
    //       },
    //     ],
    //   },
    // },
    // {
    //   id: 7,
    //   heading: 'Heading 1',
    //   title: 'Name of the article can consist from one to three lines length',
    //   description:
    //     'The Decentralized Structured Products Protocol (DSPP) enables the creation of financial products and strategies tailored to the needs of a broad range of non-professional users, thereby making the management of crypto assets more efficient and accessible.',
    //   date: '03.06.2023 (updated — 04.08.2024)',
    //   authorName: 'Name of the author ',
    //   authorOccupation: 'Occupation',
    //   big: false,
    //   color: 'LIGHT',
    //   background: 'GRADIENT_DARK_PURPLE',
    //   articleBlog: {
    //     tableOfContents: [
    //       'Subtitle',
    //       'Subtitle a few lines',
    //       'Subtitle',
    //       'Subtitle Subtitle a few lines',
    //       'Subtitle a few lines',
    //       'Subtitle subtitle subtitle ',
    //     ],
    //     content: [
    //       {
    //         text: 'The Decentralized Structured Products Protocol (DSPP) enables the creation of financial products and strategies tailored to the needs of a broad range of non-professional users, thereby making the management of crypto assets more efficient and accessible.',
    //       },
    //       { header: 'Subtitle' },
    //       {
    //         text: 'Structured products are well-known in traditional fiat finance, typically offered by banks to high net worth individuals (HNWI) as pre-packaged, out-of-the-box products. According to Bloomberg, the total structured product market accounts for over $7 trillion in invested assets*. We expect several trends to continue over time, such as overall financial literacy growth and increasing crypto/DeFi adoption worldwide. Currently, there is strong demand for low-risk financial solutions that can produce higher yields on crypto assets. ',
    //       },
    //       {
    //         earningBanner: true,
    //       },
    //       {
    //         text: 'The Decentralized Structured Products Protocol (DSPP) enables the creation of financial products and strategies tailored to the needs of a broad range of non-professional users, thereby making the management of crypto assets more efficient and accessible.',
    //       },
    //       {
    //         bigHeader:
    //           'Important point that need to be highlighted in a few line, not too long. Highlighting key points concisely is crucial. Important point that need to be highlighted.',
    //       },
    //       { header: 'Subtitle' },
    //       {
    //         text: 'Structured products are well-known in traditional fiat finance, typically offered by banks to high net worth individuals (HNWI) as pre-packaged, out-of-the-box products. According to Bloomberg, the total structured product market accounts for over $7 trillion in invested assets*. We expect several trends to continue over time, such as overall financial literacy growth and increasing crypto/DeFi adoption worldwide. Currently, there is strong demand for low-risk financial solutions that can produce higher yields on crypto assets. ',
    //       },
    //       {
    //         image: {
    //           link: 'default',
    //           imageDescription: 'Caption for photo or illustrations',
    //         },
    //       },
    //       {
    //         text: 'The Decentralized Structured Products Protocol (DSPP) enables the creation of financial products and strategies tailored to the needs of a broad range of non-professional users, thereby making the management of crypto assets more efficient and accessible.',
    //       },
    //     ],
    //     related: [
    //       {
    //         id: 1,
    //         header: 'Heading 1',
    //         title: 'Name of the article can consist from one to three lines',
    //         date: '03.06.2023 (updated — 04.08.2024)',
    //         nameAuthor: 'Name of the author',
    //         occupation: 'Occupation',
    //       },
    //       {
    //         id: 2,
    //         header: 'Heading 1',
    //         title: 'Name of the article can consist from one to three lines',
    //         date: '03.06.2023 (updated — 04.08.2024)',
    //         nameAuthor: 'Name of the author',
    //         occupation: 'Occupation',
    //       },
    //       {
    //         id: 3,
    //         header: 'Heading 1',
    //         title: 'Name of the article can consist from one to three lines',
    //         date: '03.06.2023 (updated — 04.08.2024)',
    //         nameAuthor: 'Name of the author',
    //         occupation: 'Occupation',
    //       },
    //     ],
    //   },
    // },
  ]);
  useEffect(() => {
    setLoading(true);
    // BlogService.getData();

    const blogs$ = BlogService.state$.subscribe((state) => {
      setError(state.error);
      setBlogs();
      console.log(blogs);

      setLoading(state.loading);
    });

    return () => {
      blogs$.unsubscribe();
    };
  }, [blogs]);

  return {
    loading,
    error,
    blogs,
  };
};

export default useBlog;
