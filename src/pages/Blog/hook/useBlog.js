import { useEffect, useState } from 'react';
import BlogService from '../../../services/blog.service';

const useBlog = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [blogs, setBlogs] = useState([
    {
      id: 1,
      heading: '-',
      title: '-',
      description: '-',
      date: '-',
      authorName: '-',
      authorOccupation: '-',
      big: true,
      color: 'BLACK',
      background: 'LEMON',
      articleBlog: {
        tableOfContents: [
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
          },
          {
            text: 'Any investment strategies are built around two key factors: return and degree of risk. Investors choose personalized investment strategies based on their preferences and their willingness or unwillingness to risk their capital for higher returns.',
          },
          {
            text: "The same principles apply to cryptocurrency investing. Let's take a comparative look at the profitability and riskiness of such crypto investing strategies as staking, farming, and trading. Additionally, we’ll explore the unique features of the <a href='https://tymio.com/' rel='noreferrer' target='_blank'>Tymio</a>  platform that allows users to place limit orders with yield. We will also compare these three popular strategies with the opportunities that the Tymio platform offers to crypto investors.",
          },
          { header: 'Staking', id: 'staking' },
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
            header: 'Yield Farming',
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
            header: 'Trading',
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
            header:
              '<a href="https://tymio.com/" rel="noreferrer" target="_blank">TYMIO</a>',
            id: 'tymio',
          },
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
          {
            image: {
              link: 'IMG_1185.PNG',
            },
          },
          { header: 'In summary:', id: 'inSummary' },
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
      },
    },
    // {
    //   id: 1,
    //   heading: 'Heading 1',
    //   title: 'Name of the article can consist from one to three lines length',
    //   description:
    //     'The Decentralized Structured Products Protocol (DSPP) enables the creation of financial products and strategies tailored to the needs of a broad range of non-professional users, thereby making the management of crypto assets more efficient and accessible.',
    //   date: '03.06.2023 (updated — 04.08.2024)',
    //   authorName: 'Name of the author ',
    //   authorOccupation: 'Occupation',
    //   big: true,
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
    //   ],
    // },
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
