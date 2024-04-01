import { useEffect, useState } from 'react';
import BlogService from '../../../services/blog.service';

const useBlog = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [blogs, setBlogs] = useState([
    {
      id: 1,
      heading: 'Heading 1',
      title: 'Name of the article can consist from one to three lines length',
      description:
        'The Decentralized Structured Products Protocol (DSPP) enables the creation of financial products and strategies tailored to the needs of a broad range of non-professional users, thereby making the management of crypto assets more efficient and accessible.',
      date: '03.06.2023 (updated — 04.08.2024)',
      authorName: 'Name of the author ',
      authorOccupation: 'Occupation',
      big: true,
      color: 'BLACK',
      background: 'LEMON',
      articleBlog: {
        tableOfContents: [
          'Subtitle',
          'Subtitle a few lines',
          'Subtitle',
          'Subtitle Subtitle a few lines',
          'Subtitle a few lines',
          'Subtitle subtitle subtitle ',
        ],
        content: [
          {
            text: 'The Decentralized Structured Products Protocol (DSPP) enables the creation of financial products and strategies tailored to the needs of a broad range of non-professional users, thereby making the management of crypto assets more efficient and accessible.',
          },
          { header: 'Subtitle' },
          {
            text: 'Structured products are well-known in traditional fiat finance, typically offered by banks to high net worth individuals (HNWI) as pre-packaged, out-of-the-box products. According to Bloomberg, the total structured product market accounts for over $7 trillion in invested assets*. We expect several trends to continue over time, such as overall financial literacy growth and increasing crypto/DeFi adoption worldwide. Currently, there is strong demand for low-risk financial solutions that can produce higher yields on crypto assets. ',
          },
          {
            earningBanner: true,
          },
          {
            text: 'The Decentralized Structured Products Protocol (DSPP) enables the creation of financial products and strategies tailored to the needs of a broad range of non-professional users, thereby making the management of crypto assets more efficient and accessible.',
          },
          {
            bigHeader:
              'Important point that need to be highlighted in a few line, not too long. Highlighting key points concisely is crucial. Important point that need to be highlighted.',
          },
          { header: 'Subtitle' },
          {
            text: 'Structured products are well-known in traditional fiat finance, typically offered by banks to high net worth individuals (HNWI) as pre-packaged, out-of-the-box products. According to Bloomberg, the total structured product market accounts for over $7 trillion in invested assets*. We expect several trends to continue over time, such as overall financial literacy growth and increasing crypto/DeFi adoption worldwide. Currently, there is strong demand for low-risk financial solutions that can produce higher yields on crypto assets. ',
          },
          {
            image: {
              link: 'default',
              imageDescription: 'Caption for photo or illustrations',
            },
          },
          {
            text: 'The Decentralized Structured Products Protocol (DSPP) enables the creation of financial products and strategies tailored to the needs of a broad range of non-professional users, thereby making the management of crypto assets more efficient and accessible.',
          },
        ],
        related: [
          {
            id: 1,
            header: 'Heading 1',
            title: 'Name of the article can consist from one to three lines',
            date: '03.06.2023 (updated — 04.08.2024)',
            nameAuthor: 'Name of the author',
            occupation: 'Occupation',
          },
          {
            id: 2,
            header: 'Heading 1',
            title: 'Name of the article can consist from one to three lines',
            date: '03.06.2023 (updated — 04.08.2024)',
            nameAuthor: 'Name of the author',
            occupation: 'Occupation',
          },
          {
            id: 3,
            header: 'Heading 1',
            title: 'Name of the article can consist from one to three lines',
            date: '03.06.2023 (updated — 04.08.2024)',
            nameAuthor: 'Name of the author',
            occupation: 'Occupation',
          },
        ],
      },
    },
    {
      id: 2,
      heading: 'Heading 1',
      title: 'Name of the article can consist from one to three lines length',
      description:
        'The Decentralized Structured Products Protocol (DSPP) enables the creation of financial products and strategies tailored to the needs of a broad range of non-professional users, thereby making the management of crypto assets more efficient and accessible.',
      date: '03.06.2023 (updated — 04.08.2024)',
      authorName: 'Name of the author ',
      authorOccupation: 'Occupation',
      big: false,
      color: 'BLACK',
      background: 'LEMON',
      articleBlog: {
        tableOfContents: [
          'Subtitle',
          'Subtitle a few lines',
          'Subtitle',
          'Subtitle Subtitle a few lines',
          'Subtitle a few lines',
          'Subtitle subtitle subtitle ',
        ],
        content: [
          {
            text: 'The Decentralized Structured Products Protocol (DSPP) enables the creation of financial products and strategies tailored to the needs of a broad range of non-professional users, thereby making the management of crypto assets more efficient and accessible.',
          },
          { header: 'Subtitle' },
          {
            text: 'Structured products are well-known in traditional fiat finance, typically offered by banks to high net worth individuals (HNWI) as pre-packaged, out-of-the-box products. According to Bloomberg, the total structured product market accounts for over $7 trillion in invested assets*. We expect several trends to continue over time, such as overall financial literacy growth and increasing crypto/DeFi adoption worldwide. Currently, there is strong demand for low-risk financial solutions that can produce higher yields on crypto assets. ',
          },
          {
            earningBanner: true,
          },
          {
            text: 'The Decentralized Structured Products Protocol (DSPP) enables the creation of financial products and strategies tailored to the needs of a broad range of non-professional users, thereby making the management of crypto assets more efficient and accessible.',
          },
          {
            bigHeader:
              'Important point that need to be highlighted in a few line, not too long. Highlighting key points concisely is crucial. Important point that need to be highlighted.',
          },
          { header: 'Subtitle' },
          {
            text: 'Structured products are well-known in traditional fiat finance, typically offered by banks to high net worth individuals (HNWI) as pre-packaged, out-of-the-box products. According to Bloomberg, the total structured product market accounts for over $7 trillion in invested assets*. We expect several trends to continue over time, such as overall financial literacy growth and increasing crypto/DeFi adoption worldwide. Currently, there is strong demand for low-risk financial solutions that can produce higher yields on crypto assets. ',
          },
          {
            image: {
              link: 'default',
              imageDescription: 'Caption for photo or illustrations',
            },
          },
          {
            text: 'The Decentralized Structured Products Protocol (DSPP) enables the creation of financial products and strategies tailored to the needs of a broad range of non-professional users, thereby making the management of crypto assets more efficient and accessible.',
          },
        ],
        related: [
          {
            id: 1,
            header: 'Heading 1',
            title: 'Name of the article can consist from one to three lines',
            date: '03.06.2023 (updated — 04.08.2024)',
            nameAuthor: 'Name of the author',
            occupation: 'Occupation',
          },
          {
            id: 2,
            header: 'Heading 1',
            title: 'Name of the article can consist from one to three lines',
            date: '03.06.2023 (updated — 04.08.2024)',
            nameAuthor: 'Name of the author',
            occupation: 'Occupation',
          },
          {
            id: 3,
            header: 'Heading 1',
            title: 'Name of the article can consist from one to three lines',
            date: '03.06.2023 (updated — 04.08.2024)',
            nameAuthor: 'Name of the author',
            occupation: 'Occupation',
          },
        ],
      },
    },
    {
      id: 3,
      heading: 'Heading 1',
      title: 'Name of the article can consist from one to three lines length',
      description:
        'The Decentralized Structured Products Protocol (DSPP) enables the creation of financial products and strategies tailored to the needs of a broad range of non-professional users, thereby making the management of crypto assets more efficient and accessible.',
      date: '03.06.2023 (updated — 04.08.2024)',
      authorName: 'Name of the author ',
      authorOccupation: 'Occupation',
      big: false,
      color: 'BLACK',
      background: 'PURPLE-BRIGHT',
      articleBlog: {
        tableOfContents: [
          'Subtitle',
          'Subtitle a few lines',
          'Subtitle',
          'Subtitle Subtitle a few lines',
          'Subtitle a few lines',
          'Subtitle subtitle subtitle ',
        ],
        content: [
          {
            text: 'The Decentralized Structured Products Protocol (DSPP) enables the creation of financial products and strategies tailored to the needs of a broad range of non-professional users, thereby making the management of crypto assets more efficient and accessible.',
          },
          { header: 'Subtitle' },
          {
            text: 'Structured products are well-known in traditional fiat finance, typically offered by banks to high net worth individuals (HNWI) as pre-packaged, out-of-the-box products. According to Bloomberg, the total structured product market accounts for over $7 trillion in invested assets*. We expect several trends to continue over time, such as overall financial literacy growth and increasing crypto/DeFi adoption worldwide. Currently, there is strong demand for low-risk financial solutions that can produce higher yields on crypto assets. ',
          },
          {
            earningBanner: true,
          },
          {
            text: 'The Decentralized Structured Products Protocol (DSPP) enables the creation of financial products and strategies tailored to the needs of a broad range of non-professional users, thereby making the management of crypto assets more efficient and accessible.',
          },
          {
            bigHeader:
              'Important point that need to be highlighted in a few line, not too long. Highlighting key points concisely is crucial. Important point that need to be highlighted.',
          },
          { header: 'Subtitle' },
          {
            text: 'Structured products are well-known in traditional fiat finance, typically offered by banks to high net worth individuals (HNWI) as pre-packaged, out-of-the-box products. According to Bloomberg, the total structured product market accounts for over $7 trillion in invested assets*. We expect several trends to continue over time, such as overall financial literacy growth and increasing crypto/DeFi adoption worldwide. Currently, there is strong demand for low-risk financial solutions that can produce higher yields on crypto assets. ',
          },
          {
            image: {
              link: 'default',
              imageDescription: 'Caption for photo or illustrations',
            },
          },
          {
            text: 'The Decentralized Structured Products Protocol (DSPP) enables the creation of financial products and strategies tailored to the needs of a broad range of non-professional users, thereby making the management of crypto assets more efficient and accessible.',
          },
        ],
        related: [
          {
            id: 1,
            header: 'Heading 1',
            title: 'Name of the article can consist from one to three lines',
            date: '03.06.2023 (updated — 04.08.2024)',
            nameAuthor: 'Name of the author',
            occupation: 'Occupation',
          },
          {
            id: 2,
            header: 'Heading 1',
            title: 'Name of the article can consist from one to three lines',
            date: '03.06.2023 (updated — 04.08.2024)',
            nameAuthor: 'Name of the author',
            occupation: 'Occupation',
          },
          {
            id: 3,
            header: 'Heading 1',
            title: 'Name of the article can consist from one to three lines',
            date: '03.06.2023 (updated — 04.08.2024)',
            nameAuthor: 'Name of the author',
            occupation: 'Occupation',
          },
        ],
      },
    },
    {
      id: 4,
      heading: 'Heading 1',
      title: 'Name of the article can consist from one to three lines length',
      description:
        'The Decentralized Structured Products Protocol (DSPP) enables the creation of financial products and strategies tailored to the needs of a broad range of non-professional users, thereby making the management of crypto assets more efficient and accessible.',
      date: '03.06.2023 (updated — 04.08.2024)',
      authorName: 'Name of the author ',
      authorOccupation: 'Occupation',
      big: false,
      color: 'LIGHT',
      background: 'BLACK',
      articleBlog: {
        tableOfContents: [
          'Subtitle',
          'Subtitle a few lines',
          'Subtitle',
          'Subtitle Subtitle a few lines',
          'Subtitle a few lines',
          'Subtitle subtitle subtitle ',
        ],
        content: [
          {
            text: 'The Decentralized Structured Products Protocol (DSPP) enables the creation of financial products and strategies tailored to the needs of a broad range of non-professional users, thereby making the management of crypto assets more efficient and accessible.',
          },
          { header: 'Subtitle' },
          {
            text: 'Structured products are well-known in traditional fiat finance, typically offered by banks to high net worth individuals (HNWI) as pre-packaged, out-of-the-box products. According to Bloomberg, the total structured product market accounts for over $7 trillion in invested assets*. We expect several trends to continue over time, such as overall financial literacy growth and increasing crypto/DeFi adoption worldwide. Currently, there is strong demand for low-risk financial solutions that can produce higher yields on crypto assets. ',
          },
          {
            earningBanner: true,
          },
          {
            text: 'The Decentralized Structured Products Protocol (DSPP) enables the creation of financial products and strategies tailored to the needs of a broad range of non-professional users, thereby making the management of crypto assets more efficient and accessible.',
          },
          {
            bigHeader:
              'Important point that need to be highlighted in a few line, not too long. Highlighting key points concisely is crucial. Important point that need to be highlighted.',
          },
          { header: 'Subtitle' },
          {
            text: 'Structured products are well-known in traditional fiat finance, typically offered by banks to high net worth individuals (HNWI) as pre-packaged, out-of-the-box products. According to Bloomberg, the total structured product market accounts for over $7 trillion in invested assets*. We expect several trends to continue over time, such as overall financial literacy growth and increasing crypto/DeFi adoption worldwide. Currently, there is strong demand for low-risk financial solutions that can produce higher yields on crypto assets. ',
          },
          {
            image: {
              link: 'default',
              imageDescription: 'Caption for photo or illustrations',
            },
          },
          {
            text: 'The Decentralized Structured Products Protocol (DSPP) enables the creation of financial products and strategies tailored to the needs of a broad range of non-professional users, thereby making the management of crypto assets more efficient and accessible.',
          },
        ],
        related: [
          {
            id: 1,
            header: 'Heading 1',
            title: 'Name of the article can consist from one to three lines',
            date: '03.06.2023 (updated — 04.08.2024)',
            nameAuthor: 'Name of the author',
            occupation: 'Occupation',
          },
          {
            id: 2,
            header: 'Heading 1',
            title: 'Name of the article can consist from one to three lines',
            date: '03.06.2023 (updated — 04.08.2024)',
            nameAuthor: 'Name of the author',
            occupation: 'Occupation',
          },
          {
            id: 3,
            header: 'Heading 1',
            title: 'Name of the article can consist from one to three lines',
            date: '03.06.2023 (updated — 04.08.2024)',
            nameAuthor: 'Name of the author',
            occupation: 'Occupation',
          },
        ],
      },
    },
    {
      id: 5,
      heading: 'Heading 1',
      title: 'Name of the article can consist from one to three lines length',
      description:
        'The Decentralized Structured Products Protocol (DSPP) enables the creation of financial products and strategies tailored to the needs of a broad range of non-professional users, thereby making the management of crypto assets more efficient and accessible.',
      date: '03.06.2023 (updated — 04.08.2024)',
      authorName: 'Name of the author ',
      authorOccupation: 'Occupation',
      big: false,
      color: 'BLACK',
      background: 'GRADIENT_RED_PINK',
      articleBlog: {
        tableOfContents: [
          'Subtitle',
          'Subtitle a few lines',
          'Subtitle',
          'Subtitle Subtitle a few lines',
          'Subtitle a few lines',
          'Subtitle subtitle subtitle ',
        ],
        content: [
          {
            text: 'The Decentralized Structured Products Protocol (DSPP) enables the creation of financial products and strategies tailored to the needs of a broad range of non-professional users, thereby making the management of crypto assets more efficient and accessible.',
          },
          { header: 'Subtitle' },
          {
            text: 'Structured products are well-known in traditional fiat finance, typically offered by banks to high net worth individuals (HNWI) as pre-packaged, out-of-the-box products. According to Bloomberg, the total structured product market accounts for over $7 trillion in invested assets*. We expect several trends to continue over time, such as overall financial literacy growth and increasing crypto/DeFi adoption worldwide. Currently, there is strong demand for low-risk financial solutions that can produce higher yields on crypto assets. ',
          },
          {
            earningBanner: true,
          },
          {
            text: 'The Decentralized Structured Products Protocol (DSPP) enables the creation of financial products and strategies tailored to the needs of a broad range of non-professional users, thereby making the management of crypto assets more efficient and accessible.',
          },
          {
            bigHeader:
              'Important point that need to be highlighted in a few line, not too long. Highlighting key points concisely is crucial. Important point that need to be highlighted.',
          },
          { header: 'Subtitle' },
          {
            text: 'Structured products are well-known in traditional fiat finance, typically offered by banks to high net worth individuals (HNWI) as pre-packaged, out-of-the-box products. According to Bloomberg, the total structured product market accounts for over $7 trillion in invested assets*. We expect several trends to continue over time, such as overall financial literacy growth and increasing crypto/DeFi adoption worldwide. Currently, there is strong demand for low-risk financial solutions that can produce higher yields on crypto assets. ',
          },
          {
            image: {
              link: 'default',
              imageDescription: 'Caption for photo or illustrations',
            },
          },
          {
            text: 'The Decentralized Structured Products Protocol (DSPP) enables the creation of financial products and strategies tailored to the needs of a broad range of non-professional users, thereby making the management of crypto assets more efficient and accessible.',
          },
        ],
        related: [
          {
            id: 1,
            header: 'Heading 1',
            title: 'Name of the article can consist from one to three lines',
            date: '03.06.2023 (updated — 04.08.2024)',
            nameAuthor: 'Name of the author',
            occupation: 'Occupation',
          },
          {
            id: 2,
            header: 'Heading 1',
            title: 'Name of the article can consist from one to three lines',
            date: '03.06.2023 (updated — 04.08.2024)',
            nameAuthor: 'Name of the author',
            occupation: 'Occupation',
          },
          {
            id: 3,
            header: 'Heading 1',
            title: 'Name of the article can consist from one to three lines',
            date: '03.06.2023 (updated — 04.08.2024)',
            nameAuthor: 'Name of the author',
            occupation: 'Occupation',
          },
        ],
      },
    },
    {
      id: 6,
      heading: 'Heading 1',
      title: 'Name of the article can consist from one to three lines length',
      description:
        'The Decentralized Structured Products Protocol (DSPP) enables the creation of financial products and strategies tailored to the needs of a broad range of non-professional users, thereby making the management of crypto assets more efficient and accessible.',
      date: '03.06.2023 (updated — 04.08.2024)',
      authorName: 'Name of the author ',
      authorOccupation: 'Occupation',
      big: false,
      color: 'BLACK',
      background: 'PURPLE_LIGHT',
      articleBlog: {
        tableOfContents: [
          'Subtitle',
          'Subtitle a few lines',
          'Subtitle',
          'Subtitle Subtitle a few lines',
          'Subtitle a few lines',
          'Subtitle subtitle subtitle ',
        ],
        content: [
          {
            text: 'The Decentralized Structured Products Protocol (DSPP) enables the creation of financial products and strategies tailored to the needs of a broad range of non-professional users, thereby making the management of crypto assets more efficient and accessible.',
          },
          { header: 'Subtitle' },
          {
            text: 'Structured products are well-known in traditional fiat finance, typically offered by banks to high net worth individuals (HNWI) as pre-packaged, out-of-the-box products. According to Bloomberg, the total structured product market accounts for over $7 trillion in invested assets*. We expect several trends to continue over time, such as overall financial literacy growth and increasing crypto/DeFi adoption worldwide. Currently, there is strong demand for low-risk financial solutions that can produce higher yields on crypto assets. ',
          },
          {
            earningBanner: true,
          },
          {
            text: 'The Decentralized Structured Products Protocol (DSPP) enables the creation of financial products and strategies tailored to the needs of a broad range of non-professional users, thereby making the management of crypto assets more efficient and accessible.',
          },
          {
            bigHeader:
              'Important point that need to be highlighted in a few line, not too long. Highlighting key points concisely is crucial. Important point that need to be highlighted.',
          },
          { header: 'Subtitle' },
          {
            text: 'Structured products are well-known in traditional fiat finance, typically offered by banks to high net worth individuals (HNWI) as pre-packaged, out-of-the-box products. According to Bloomberg, the total structured product market accounts for over $7 trillion in invested assets*. We expect several trends to continue over time, such as overall financial literacy growth and increasing crypto/DeFi adoption worldwide. Currently, there is strong demand for low-risk financial solutions that can produce higher yields on crypto assets. ',
          },
          {
            image: {
              link: 'default',
              imageDescription: 'Caption for photo or illustrations',
            },
          },
          {
            text: 'The Decentralized Structured Products Protocol (DSPP) enables the creation of financial products and strategies tailored to the needs of a broad range of non-professional users, thereby making the management of crypto assets more efficient and accessible.',
          },
        ],
        related: [
          {
            id: 1,
            header: 'Heading 1',
            title: 'Name of the article can consist from one to three lines',
            date: '03.06.2023 (updated — 04.08.2024)',
            nameAuthor: 'Name of the author',
            occupation: 'Occupation',
          },
          {
            id: 2,
            header: 'Heading 1',
            title: 'Name of the article can consist from one to three lines',
            date: '03.06.2023 (updated — 04.08.2024)',
            nameAuthor: 'Name of the author',
            occupation: 'Occupation',
          },
          {
            id: 3,
            header: 'Heading 1',
            title: 'Name of the article can consist from one to three lines',
            date: '03.06.2023 (updated — 04.08.2024)',
            nameAuthor: 'Name of the author',
            occupation: 'Occupation',
          },
        ],
      },
    },
    {
      id: 7,
      heading: 'Heading 1',
      title: 'Name of the article can consist from one to three lines length',
      description:
        'The Decentralized Structured Products Protocol (DSPP) enables the creation of financial products and strategies tailored to the needs of a broad range of non-professional users, thereby making the management of crypto assets more efficient and accessible.',
      date: '03.06.2023 (updated — 04.08.2024)',
      authorName: 'Name of the author ',
      authorOccupation: 'Occupation',
      big: false,
      color: 'LIGHT',
      background: 'GRADIENT_DARK_PURPLE',
      articleBlog: {
        tableOfContents: [
          'Subtitle',
          'Subtitle a few lines',
          'Subtitle',
          'Subtitle Subtitle a few lines',
          'Subtitle a few lines',
          'Subtitle subtitle subtitle ',
        ],
        content: [
          {
            text: 'The Decentralized Structured Products Protocol (DSPP) enables the creation of financial products and strategies tailored to the needs of a broad range of non-professional users, thereby making the management of crypto assets more efficient and accessible.',
          },
          { header: 'Subtitle' },
          {
            text: 'Structured products are well-known in traditional fiat finance, typically offered by banks to high net worth individuals (HNWI) as pre-packaged, out-of-the-box products. According to Bloomberg, the total structured product market accounts for over $7 trillion in invested assets*. We expect several trends to continue over time, such as overall financial literacy growth and increasing crypto/DeFi adoption worldwide. Currently, there is strong demand for low-risk financial solutions that can produce higher yields on crypto assets. ',
          },
          {
            earningBanner: true,
          },
          {
            text: 'The Decentralized Structured Products Protocol (DSPP) enables the creation of financial products and strategies tailored to the needs of a broad range of non-professional users, thereby making the management of crypto assets more efficient and accessible.',
          },
          {
            bigHeader:
              'Important point that need to be highlighted in a few line, not too long. Highlighting key points concisely is crucial. Important point that need to be highlighted.',
          },
          { header: 'Subtitle' },
          {
            text: 'Structured products are well-known in traditional fiat finance, typically offered by banks to high net worth individuals (HNWI) as pre-packaged, out-of-the-box products. According to Bloomberg, the total structured product market accounts for over $7 trillion in invested assets*. We expect several trends to continue over time, such as overall financial literacy growth and increasing crypto/DeFi adoption worldwide. Currently, there is strong demand for low-risk financial solutions that can produce higher yields on crypto assets. ',
          },
          {
            image: {
              link: 'default',
              imageDescription: 'Caption for photo or illustrations',
            },
          },
          {
            text: 'The Decentralized Structured Products Protocol (DSPP) enables the creation of financial products and strategies tailored to the needs of a broad range of non-professional users, thereby making the management of crypto assets more efficient and accessible.',
          },
        ],
        related: [
          {
            id: 1,
            header: 'Heading 1',
            title: 'Name of the article can consist from one to three lines',
            date: '03.06.2023 (updated — 04.08.2024)',
            nameAuthor: 'Name of the author',
            occupation: 'Occupation',
          },
          {
            id: 2,
            header: 'Heading 1',
            title: 'Name of the article can consist from one to three lines',
            date: '03.06.2023 (updated — 04.08.2024)',
            nameAuthor: 'Name of the author',
            occupation: 'Occupation',
          },
          {
            id: 3,
            header: 'Heading 1',
            title: 'Name of the article can consist from one to three lines',
            date: '03.06.2023 (updated — 04.08.2024)',
            nameAuthor: 'Name of the author',
            occupation: 'Occupation',
          },
        ],
      },
    },
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
