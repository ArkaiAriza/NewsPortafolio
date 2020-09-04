import React, { useContext } from 'react';
import Carousel from './Carousel';
import NewsGrid from './NewsGrid';

import NewsContext from '../contexts/NewsContext';

import { Col, Row } from 'antd';

const newsList = [
  {
    source: {
      id: 'the-washington-post',
      name: 'The Washington Post',
    },
    author: 'John Wagner',
    title:
      'Election 2020 live updates: Biden to speak on economic fallout of pandemic; Trump hosting diplomatic talks - The Washington Post',
    description:
      'With less than two months remaining until Election Days, both campaigns are also reacting to a bombshell report in the Atlantic that Trump called U.S. soldiers injured or killed in war “losers."',
    url:
      'https://www.washingtonpost.com/elections/2020/09/04/trump-biden-live-updates/',
    urlToImage:
      'https://www.washingtonpost.com/wp-apps/imrs.php?src=https://d1i4t8bqe7zgj6.cloudfront.net/09-03-2020/t_2b8b3f42d7614bb9ab4482d91bc9fc1a_name_01860b00_ee1f_11ea_bd08_1b10132b458f.jpg&w=1440',
    publishedAt: '2020-09-04T14:02:00Z',
    content:
      'Secretary of State Mike Pompeo warned Friday that there is a real risk associated with widespread mail-in balloting, echoing a talking point that the Trump campaign has repeatedly hammered as it seek… [+1737 chars]',
  },
  {
    source: {
      id: 'the-washington-post',
      name: 'The Washington Post',
    },
    author: 'John Wagner',
    title:
      'Election 2020 live updates: Biden to speak on economic fallout of pandemic; Trump hosting diplomatic talks - The Washington Post',
    description: 'With less than two months remaining until Election Days, ',
    url:
      'https://www.washingtonpost.com/elections/2020/09/04/trump-biden-live-updates/',
    urlToImage:
      'https://www.washingtonpost.com/wp-apps/imrs.php?src=https://d1i4t8bqe7zgj6.cloudfront.net/09-03-2020/t_2b8b3f42d7614bb9ab4482d91bc9fc1a_name_01860b00_ee1f_11ea_bd08_1b10132b458f.jpg&w=1440',
    publishedAt: '2020-09-04T14:02:00Z',
    content:
      'Secretary of State Mike Pompeo warned Friday that there is a real risk associated with widespread mail-in balloting, echoing a talking point that the Trump campaign has repeatedly hammered as it seek… [+1737 chars]',
  },
  {
    source: {
      id: 'the-washington-post',
      name: 'The Washington Post',
    },
    author: 'John Wagner',
    title:
      'Election 2020 live updates: Biden to speak on economic fallout of pandemic; Trump hosting diplomatic talks - The Washington Post',
    description:
      'With less than two months remaining until Election Days, both campaigns are also reacting to a bombshell report in the Atlantic that Trump called U.S. soldiers injured or killed in war “losers."',
    url:
      'https://www.washingtonpost.com/elections/2020/09/04/trump-biden-live-updates/',
    urlToImage:
      'https://www.washingtonpost.com/wp-apps/imrs.php?src=https://d1i4t8bqe7zgj6.cloudfront.net/09-03-2020/t_2b8b3f42d7614bb9ab4482d91bc9fc1a_name_01860b00_ee1f_11ea_bd08_1b10132b458f.jpg&w=1440',
    publishedAt: '2020-09-04T14:02:00Z',
    content:
      'Secretary of State Mike Pompeo warned Friday that there is a real risk associated with widespread mail-in balloting, echoing a talking point that the Trump campaign has repeatedly hammered as it seek… [+1737 chars]',
  },
  {
    source: {
      id: 'the-washington-post',
      name: 'The Washington Post',
    },
    author: 'John Wagner',
    title:
      'Election 2020 live updates: Biden to speak on economic fallout of pandemic; Trump hosting diplomatic talks - The Washington Post',
    description:
      'With less than two months remaining until Election Days, both campaigns are also reacting to a bombshell report in the Atlantic that Trump called U.S. soldiers injured or killed in war “losers."',
    url:
      'https://www.washingtonpost.com/elections/2020/09/04/trump-biden-live-updates/',
    urlToImage:
      'https://www.washingtonpost.com/wp-apps/imrs.php?src=https://d1i4t8bqe7zgj6.cloudfront.net/09-03-2020/t_2b8b3f42d7614bb9ab4482d91bc9fc1a_name_01860b00_ee1f_11ea_bd08_1b10132b458f.jpg&w=1440',
    publishedAt: '2020-09-04T14:02:00Z',
    content:
      'Secretary of State Mike Pompeo warned Friday that there is a real risk associated with widespread mail-in balloting, echoing a talking point that the Trump campaign has repeatedly hammered as it seek… [+1737 chars]',
  },
  {
    source: {
      id: 'the-washington-post',
      name: 'The Washington Post',
    },
    author: 'John Wagner',
    title:
      'Election 2020 live updates: Biden to speak on economic fallout of pandemic; Trump hosting diplomatic talks - The Washington Post',
    description:
      'With less than two months remaining until Election Days, both campaigns are also reacting to a bombshell report in the Atlantic that Trump called U.S. soldiers injured or killed in war “losers."',
    url:
      'https://www.washingtonpost.com/elections/2020/09/04/trump-biden-live-updates/',
    urlToImage:
      'https://www.washingtonpost.com/wp-apps/imrs.php?src=https://d1i4t8bqe7zgj6.cloudfront.net/09-03-2020/t_2b8b3f42d7614bb9ab4482d91bc9fc1a_name_01860b00_ee1f_11ea_bd08_1b10132b458f.jpg&w=1440',
    publishedAt: '2020-09-04T14:02:00Z',
    content:
      'Secretary of State Mike Pompeo warned Friday that there is a real risk associated with widespread mail-in balloting, echoing a talking point that the Trump campaign has repeatedly hammered as it seek… [+1737 chars]',
  },
  {
    source: {
      id: 'the-washington-post',
      name: 'The Washington Post',
    },
    author: 'John Wagner',
    title:
      'Election 2020 live updates: Biden to speak on economic fallout of pandemic; Trump hosting diplomatic talks - The Washington Post',
    description:
      'With less than two months remaining until Election Days, both campaigns are also reacting to a bombshell report in the Atlantic that Trump called U.S. soldiers injured or killed in war “losers.With less than two months remaining until Election Days, both campaigns are also reacting to a bombshell report in the Atlantic that Trump called U.S. soldiers injured or killed in war “losers."',
    url:
      'https://www.washingtonpost.com/elections/2020/09/04/trump-biden-live-updates/',
    urlToImage:
      'https://www.washingtonpost.com/wp-apps/imrs.php?src=https://d1i4t8bqe7zgj6.cloudfront.net/09-03-2020/t_2b8b3f42d7614bb9ab4482d91bc9fc1a_name_01860b00_ee1f_11ea_bd08_1b10132b458f.jpg&w=1440',
    publishedAt: '2020-09-04T14:02:00Z',
    content:
      'Secretary of State Mike Pompeo warned Friday that there is a real risk associated with widespread mail-in balloting, echoing a talking point that the Trump campaign has repeatedly hammered as it seek… [+1737 chars]',
  },
  {
    source: {
      id: 'the-washington-post',
      name: 'The Washington Post',
    },
    author: 'John Wagner',
    title:
      'Election 2020 live updates: Biden to speak on economic fallout of pandemic; Trump hosting diplomatic talks - The Washington Post',
    description: 'With less than two months remaining until Election Days, ',
    url:
      'https://www.washingtonpost.com/elections/2020/09/04/trump-biden-live-updates/',
    urlToImage:
      'https://www.washingtonpost.com/wp-apps/imrs.php?src=https://d1i4t8bqe7zgj6.cloudfront.net/09-03-2020/t_2b8b3f42d7614bb9ab4482d91bc9fc1a_name_01860b00_ee1f_11ea_bd08_1b10132b458f.jpg&w=1440',
    publishedAt: '2020-09-04T14:02:00Z',
    content:
      'Secretary of State Mike Pompeo warned Friday that there is a real risk associated with widespread mail-in balloting, echoing a talking point that the Trump campaign has repeatedly hammered as it seek… [+1737 chars]',
  },
  {
    source: {
      id: 'the-washington-post',
      name: 'The Washington Post',
    },
    author: 'John Wagner',
    title:
      'Election 2020 live updates: Biden to speak on economic fallout of pandemic; Trump hosting diplomatic talks - The Washington Post',
    description:
      'With less than two months remaining until Election Days, both campaigns are also reacting to a bombshell report in the Atlantic that Trump called U.S. soldiers injured or killed in war “losers."',
    url:
      'https://www.washingtonpost.com/elections/2020/09/04/trump-biden-live-updates/',
    urlToImage:
      'https://www.washingtonpost.com/wp-apps/imrs.php?src=https://d1i4t8bqe7zgj6.cloudfront.net/09-03-2020/t_2b8b3f42d7614bb9ab4482d91bc9fc1a_name_01860b00_ee1f_11ea_bd08_1b10132b458f.jpg&w=1440',
    publishedAt: '2020-09-04T14:02:00Z',
    content:
      'Secretary of State Mike Pompeo warned Friday that there is a real risk associated with widespread mail-in balloting, echoing a talking point that the Trump campaign has repeatedly hammered as it seek… [+1737 chars]',
  },
  {
    source: {
      id: 'the-washington-post',
      name: 'The Washington Post',
    },
    author: 'John Wagner',
    title:
      'Election 2020 live updates: Biden to speak on economic fallout of pandemic; Trump hosting diplomatic talks - The Washington Post',
    description:
      'With less than two months remaining until Election Days, both campaigns are also reacting to a bombshell report in the Atlantic that Trump called U.S. soldiers injured or killed in war “losers."',
    url:
      'https://www.washingtonpost.com/elections/2020/09/04/trump-biden-live-updates/',
    urlToImage:
      'https://www.washingtonpost.com/wp-apps/imrs.php?src=https://d1i4t8bqe7zgj6.cloudfront.net/09-03-2020/t_2b8b3f42d7614bb9ab4482d91bc9fc1a_name_01860b00_ee1f_11ea_bd08_1b10132b458f.jpg&w=1440',
    publishedAt: '2020-09-04T14:02:00Z',
    content:
      'Secretary of State Mike Pompeo warned Friday that there is a real risk associated with widespread mail-in balloting, echoing a talking point that the Trump campaign has repeatedly hammered as it seek… [+1737 chars]',
  },
  {
    source: {
      id: 'the-washington-post',
      name: 'The Washington Post',
    },
    author: 'John Wagner',
    title:
      'Election 2020 live updates: Biden to speak on economic fallout of pandemic; Trump hosting diplomatic talks - The Washington Post',
    description:
      'With less than two months remaining until Election Days, both campaigns are also reacting to a bombshell report in the Atlantic that Trump called U.S. soldiers injured or killed in war “losers."',
    url:
      'https://www.washingtonpost.com/elections/2020/09/04/trump-biden-live-updates/',
    urlToImage:
      'https://www.washingtonpost.com/wp-apps/imrs.php?src=https://d1i4t8bqe7zgj6.cloudfront.net/09-03-2020/t_2b8b3f42d7614bb9ab4482d91bc9fc1a_name_01860b00_ee1f_11ea_bd08_1b10132b458f.jpg&w=1440',
    publishedAt: '2020-09-04T14:02:00Z',
    content:
      'Secretary of State Mike Pompeo warned Friday that there is a real risk associated with widespread mail-in balloting, echoing a talking point that the Trump campaign has repeatedly hammered as it seek… [+1737 chars]',
  },
  {
    source: {
      id: 'the-washington-post',
      name: 'The Washington Post',
    },
    author: 'John Wagner',
    title:
      'Election 2020 live updates: Biden to speak on economic fallout of pandemic; Trump hosting diplomatic talks - The Washington Post',
    description:
      'With less than two months remaining until Election Days, both campaigns are also reacting to a bombshell report in the Atlantic that Trump called U.S. soldiers injured or killed in war “losers."',
    url:
      'https://www.washingtonpost.com/elections/2020/09/04/trump-biden-live-updates/',
    urlToImage:
      'https://www.washingtonpost.com/wp-apps/imrs.php?src=https://d1i4t8bqe7zgj6.cloudfront.net/09-03-2020/t_2b8b3f42d7614bb9ab4482d91bc9fc1a_name_01860b00_ee1f_11ea_bd08_1b10132b458f.jpg&w=1440',
    publishedAt: '2020-09-04T14:02:00Z',
    content:
      'Secretary of State Mike Pompeo warned Friday that there is a real risk associated with widespread mail-in balloting, echoing a talking point that the Trump campaign has repeatedly hammered as it seek… [+1737 chars]',
  },
  {
    source: {
      id: 'the-washington-post',
      name: 'The Washington Post',
    },
    author: 'John Wagner',
    title:
      'Election 2020 live updates: Biden to speak on economic fallout of pandemic; Trump hosting diplomatic talks - The Washington Post',
    description:
      'With less than two months remaining until Election Days, both campaigns are also reacting to a bombshell report in the Atlantic that Trump called U.S. soldiers injured or killed in war “losers."',
    url:
      'https://www.washingtonpost.com/elections/2020/09/04/trump-biden-live-updates/',
    urlToImage:
      'https://www.washingtonpost.com/wp-apps/imrs.php?src=https://d1i4t8bqe7zgj6.cloudfront.net/09-03-2020/t_2b8b3f42d7614bb9ab4482d91bc9fc1a_name_01860b00_ee1f_11ea_bd08_1b10132b458f.jpg&w=1440',
    publishedAt: '2020-09-04T14:02:00Z',
    content:
      'Secretary of State Mike Pompeo warned Friday that there is a real risk associated with widespread mail-in balloting, echoing a talking point that the Trump campaign has repeatedly hammered as it seek… [+1737 chars]',
  },
  {
    source: {
      id: 'the-washington-post',
      name: 'The Washington Post',
    },
    author: 'John Wagner',
    title:
      'Election 2020 live updates: Biden to speak on economic fallout of pandemic; Trump hosting diplomatic talks - The Washington Post',
    description:
      'With less than two months remaining until Election Days, both campaigns are also reacting to a bombshell report in the Atlantic that Trump called U.S. soldiers injured or killed in war “losers."',
    url:
      'https://www.washingtonpost.com/elections/2020/09/04/trump-biden-live-updates/',
    urlToImage:
      'https://www.washingtonpost.com/wp-apps/imrs.php?src=https://d1i4t8bqe7zgj6.cloudfront.net/09-03-2020/t_2b8b3f42d7614bb9ab4482d91bc9fc1a_name_01860b00_ee1f_11ea_bd08_1b10132b458f.jpg&w=1440',
    publishedAt: '2020-09-04T14:02:00Z',
    content:
      'Secretary of State Mike Pompeo warned Friday that there is a real risk associated with widespread mail-in balloting, echoing a talking point that the Trump campaign has repeatedly hammered as it seek… [+1737 chars]',
  },
  {
    source: {
      id: 'the-washington-post',
      name: 'The Washington Post',
    },
    author: 'John Wagner',
    title:
      'Election 2020 live updates: Biden to speak on economic fallout of pandemic; Trump hosting diplomatic talks - The Washington Post',
    description:
      'With less than two months remaining until Election Days, both campaigns are also reacting to a bombshell report in the Atlantic that Trump called U.S. soldiers injured or killed in war “losers."',
    url:
      'https://www.washingtonpost.com/elections/2020/09/04/trump-biden-live-updates/',
    urlToImage:
      'https://www.washingtonpost.com/wp-apps/imrs.php?src=https://d1i4t8bqe7zgj6.cloudfront.net/09-03-2020/t_2b8b3f42d7614bb9ab4482d91bc9fc1a_name_01860b00_ee1f_11ea_bd08_1b10132b458f.jpg&w=1440',
    publishedAt: '2020-09-04T14:02:00Z',
    content:
      'Secretary of State Mike Pompeo warned Friday that there is a real risk associated with widespread mail-in balloting, echoing a talking point that the Trump campaign has repeatedly hammered as it seek… [+1737 chars]',
  },
  {
    source: {
      id: 'the-washington-post',
      name: 'The Washington Post',
    },
    author: 'John Wagner',
    title:
      'Election 2020 live updates: Biden to speak on economic fallout of pandemic; Trump hosting diplomatic talks - The Washington Post',
    description:
      'With less than two months remaining until Election Days, both campaigns are also reacting to a bombshell report in the Atlantic that Trump called U.S. soldiers injured or killed in war “losers."',
    url:
      'https://www.washingtonpost.com/elections/2020/09/04/trump-biden-live-updates/',
    urlToImage:
      'https://www.washingtonpost.com/wp-apps/imrs.php?src=https://d1i4t8bqe7zgj6.cloudfront.net/09-03-2020/t_2b8b3f42d7614bb9ab4482d91bc9fc1a_name_01860b00_ee1f_11ea_bd08_1b10132b458f.jpg&w=1440',
    publishedAt: '2020-09-04T14:02:00Z',
    content:
      'Secretary of State Mike Pompeo warned Friday that there is a real risk associated with widespread mail-in balloting, echoing a talking point that the Trump campaign has repeatedly hammered as it seek… [+1737 chars]',
  },
  {
    source: {
      id: 'the-washington-post',
      name: 'The Washington Post',
    },
    author: 'John Wagner',
    title:
      'Election 2020 live updates: Biden to speak on economic fallout of pandemic; Trump hosting diplomatic talks - The Washington Post',
    description:
      'With less than two months remaining until Election Days, both campaigns are also reacting to a bombshell report in the Atlantic that Trump called U.S. soldiers injured or killed in war “losers."',
    url:
      'https://www.washingtonpost.com/elections/2020/09/04/trump-biden-live-updates/',
    urlToImage:
      'https://www.washingtonpost.com/wp-apps/imrs.php?src=https://d1i4t8bqe7zgj6.cloudfront.net/09-03-2020/t_2b8b3f42d7614bb9ab4482d91bc9fc1a_name_01860b00_ee1f_11ea_bd08_1b10132b458f.jpg&w=1440',
    publishedAt: '2020-09-04T14:02:00Z',
    content:
      'Secretary of State Mike Pompeo warned Friday that there is a real risk associated with widespread mail-in balloting, echoing a talking point that the Trump campaign has repeatedly hammered as it seek… [+1737 chars]',
  },
  {
    source: {
      id: 'the-washington-post',
      name: 'The Washington Post',
    },
    author: 'John Wagner',
    title:
      'Election 2020 live updates: Biden to speak on economic fallout of pandemic; Trump hosting diplomatic talks - The Washington Post',
    description:
      'With less than two months remaining until Election Days, both campaigns are also reacting to a bombshell report in the Atlantic that Trump called U.S. soldiers injured or killed in war “losers."',
    url:
      'https://www.washingtonpost.com/elections/2020/09/04/trump-biden-live-updates/',
    urlToImage:
      'https://www.washingtonpost.com/wp-apps/imrs.php?src=https://d1i4t8bqe7zgj6.cloudfront.net/09-03-2020/t_2b8b3f42d7614bb9ab4482d91bc9fc1a_name_01860b00_ee1f_11ea_bd08_1b10132b458f.jpg&w=1440',
    publishedAt: '2020-09-04T14:02:00Z',
    content:
      'Secretary of State Mike Pompeo warned Friday that there is a real risk associated with widespread mail-in balloting, echoing a talking point that the Trump campaign has repeatedly hammered as it seek… [+1737 chars]',
  },
  {
    source: {
      id: 'the-washington-post',
      name: 'The Washington Post',
    },
    author: 'John Wagner',
    title:
      'Election 2020 live updates: Biden to speak on economic fallout of pandemic; Trump hosting diplomatic talks - The Washington Post',
    description:
      'With less than two months remaining until Election Days, both campaigns are also reacting to a bombshell report in the Atlantic that Trump called U.S. soldiers injured or killed in war “losers."',
    url:
      'https://www.washingtonpost.com/elections/2020/09/04/trump-biden-live-updates/',
    urlToImage:
      'https://www.washingtonpost.com/wp-apps/imrs.php?src=https://d1i4t8bqe7zgj6.cloudfront.net/09-03-2020/t_2b8b3f42d7614bb9ab4482d91bc9fc1a_name_01860b00_ee1f_11ea_bd08_1b10132b458f.jpg&w=1440',
    publishedAt: '2020-09-04T14:02:00Z',
    content:
      'Secretary of State Mike Pompeo warned Friday that there is a real risk associated with widespread mail-in balloting, echoing a talking point that the Trump campaign has repeatedly hammered as it seek… [+1737 chars]',
  },
  {
    source: {
      id: 'the-washington-post',
      name: 'The Washington Post',
    },
    author: 'John Wagner',
    title:
      'Election 2020 live updates: Biden to speak on economic fallout of pandemic; Trump hosting diplomatic talks - The Washington Post',
    description:
      'With less than two months remaining until Election Days, both campaigns are also reacting to a bombshell report in the Atlantic that Trump called U.S. soldiers injured or killed in war “losers."',
    url:
      'https://www.washingtonpost.com/elections/2020/09/04/trump-biden-live-updates/',
    urlToImage:
      'https://www.washingtonpost.com/wp-apps/imrs.php?src=https://d1i4t8bqe7zgj6.cloudfront.net/09-03-2020/t_2b8b3f42d7614bb9ab4482d91bc9fc1a_name_01860b00_ee1f_11ea_bd08_1b10132b458f.jpg&w=1440',
    publishedAt: '2020-09-04T14:02:00Z',
    content:
      'Secretary of State Mike Pompeo warned Friday that there is a real risk associated with widespread mail-in balloting, echoing a talking point that the Trump campaign has repeatedly hammered as it seek… [+1737 chars]',
  },
  {
    source: {
      id: 'the-washington-post',
      name: 'The Washington Post',
    },
    author: 'John Wagner',
    title:
      'Election 2020 live updates: Biden to speak on economic fallout of pandemic; Trump hosting diplomatic talks - The Washington Post',
    description:
      'With less than two months remaining until Election Days, both campaigns are also reacting to a bombshell report in the Atlantic that Trump called U.S. soldiers injured or killed in war “losers."',
    url:
      'https://www.washingtonpost.com/elections/2020/09/04/trump-biden-live-updates/',
    urlToImage:
      'https://www.washingtonpost.com/wp-apps/imrs.php?src=https://d1i4t8bqe7zgj6.cloudfront.net/09-03-2020/t_2b8b3f42d7614bb9ab4482d91bc9fc1a_name_01860b00_ee1f_11ea_bd08_1b10132b458f.jpg&w=1440',
    publishedAt: '2020-09-04T14:02:00Z',
    content:
      'Secretary of State Mike Pompeo warned Friday that there is a real risk associated with widespread mail-in balloting, echoing a talking point that the Trump campaign has repeatedly hammered as it seek… [+1737 chars]',
  },
  {
    source: {
      id: 'the-washington-post',
      name: 'The Washington Post',
    },
    author: 'John Wagner',
    title:
      'Election 2020 live updates: Biden to speak on economic fallout of pandemic; Trump hosting diplomatic talks - The Washington Post',
    description:
      'With less than two months remaining until Election Days, both campaigns are also reacting to a bombshell report in the Atlantic that Trump called U.S. soldiers injured or killed in war “losers."',
    url:
      'https://www.washingtonpost.com/elections/2020/09/04/trump-biden-live-updates/',
    urlToImage:
      'https://www.washingtonpost.com/wp-apps/imrs.php?src=https://d1i4t8bqe7zgj6.cloudfront.net/09-03-2020/t_2b8b3f42d7614bb9ab4482d91bc9fc1a_name_01860b00_ee1f_11ea_bd08_1b10132b458f.jpg&w=1440',
    publishedAt: '2020-09-04T14:02:00Z',
    content:
      'Secretary of State Mike Pompeo warned Friday that there is a real risk associated with widespread mail-in balloting, echoing a talking point that the Trump campaign has repeatedly hammered as it seek… [+1737 chars]',
  },
  {
    source: {
      id: 'the-washington-post',
      name: 'The Washington Post',
    },
    author: 'John Wagner',
    title:
      'Election 2020 live updates: Biden to speak on economic fallout of pandemic; Trump hosting diplomatic talks - The Washington Post',
    description:
      'With less than two months remaining until Election Days, both campaigns are also reacting to a bombshell report in the Atlantic that Trump called U.S. soldiers injured or killed in war “losers."',
    url:
      'https://www.washingtonpost.com/elections/2020/09/04/trump-biden-live-updates/',
    urlToImage:
      'https://www.washingtonpost.com/wp-apps/imrs.php?src=https://d1i4t8bqe7zgj6.cloudfront.net/09-03-2020/t_2b8b3f42d7614bb9ab4482d91bc9fc1a_name_01860b00_ee1f_11ea_bd08_1b10132b458f.jpg&w=1440',
    publishedAt: '2020-09-04T14:02:00Z',
    content:
      'Secretary of State Mike Pompeo warned Friday that there is a real risk associated with widespread mail-in balloting, echoing a talking point that the Trump campaign has repeatedly hammered as it seek… [+1737 chars]',
  },
  {
    source: {
      id: 'the-washington-post',
      name: 'The Washington Post',
    },
    author: 'John Wagner',
    title:
      'Election 2020 live updates: Biden to speak on economic fallout of pandemic; Trump hosting diplomatic talks - The Washington Post',
    description:
      'With less than two months remaining until Election Days, both campaigns are also reacting to a bombshell report in the Atlantic that Trump called U.S. soldiers injured or killed in war “losers."',
    url:
      'https://www.washingtonpost.com/elections/2020/09/04/trump-biden-live-updates/',
    urlToImage:
      'https://www.washingtonpost.com/wp-apps/imrs.php?src=https://d1i4t8bqe7zgj6.cloudfront.net/09-03-2020/t_2b8b3f42d7614bb9ab4482d91bc9fc1a_name_01860b00_ee1f_11ea_bd08_1b10132b458f.jpg&w=1440',
    publishedAt: '2020-09-04T14:02:00Z',
    content:
      'Secretary of State Mike Pompeo warned Friday that there is a real risk associated with widespread mail-in balloting, echoing a talking point that the Trump campaign has repeatedly hammered as it seek… [+1737 chars]',
  },
  {
    source: {
      id: 'the-washington-post',
      name: 'The Washington Post',
    },
    author: 'John Wagner',
    title:
      'Election 2020 live updates: Biden to speak on economic fallout of pandemic; Trump hosting diplomatic talks - The Washington Post',
    description:
      'With less than two months remaining until Election Days, both campaigns are also reacting to a bombshell report in the Atlantic that Trump called U.S. soldiers injured or killed in war “losers."',
    url:
      'https://www.washingtonpost.com/elections/2020/09/04/trump-biden-live-updates/',
    urlToImage:
      'https://www.washingtonpost.com/wp-apps/imrs.php?src=https://d1i4t8bqe7zgj6.cloudfront.net/09-03-2020/t_2b8b3f42d7614bb9ab4482d91bc9fc1a_name_01860b00_ee1f_11ea_bd08_1b10132b458f.jpg&w=1440',
    publishedAt: '2020-09-04T14:02:00Z',
    content:
      'Secretary of State Mike Pompeo warned Friday that there is a real risk associated with widespread mail-in balloting, echoing a talking point that the Trump campaign has repeatedly hammered as it seek… [+1737 chars]',
  },
  {
    source: {
      id: 'the-washington-post',
      name: 'The Washington Post',
    },
    author: 'John Wagner',
    title:
      'Election 2020 live updates: Biden to speak on economic fallout of pandemic; Trump hosting diplomatic talks - The Washington Post',
    description:
      'With less than two months remaining until Election Days, both campaigns are also reacting to a bombshell report in the Atlantic that Trump called U.S. soldiers injured or killed in war “losers."',
    url:
      'https://www.washingtonpost.com/elections/2020/09/04/trump-biden-live-updates/',
    urlToImage:
      'https://www.washingtonpost.com/wp-apps/imrs.php?src=https://d1i4t8bqe7zgj6.cloudfront.net/09-03-2020/t_2b8b3f42d7614bb9ab4482d91bc9fc1a_name_01860b00_ee1f_11ea_bd08_1b10132b458f.jpg&w=1440',
    publishedAt: '2020-09-04T14:02:00Z',
    content:
      'Secretary of State Mike Pompeo warned Friday that there is a real risk associated with widespread mail-in balloting, echoing a talking point that the Trump campaign has repeatedly hammered as it seek… [+1737 chars]',
  },
  {
    source: {
      id: 'the-washington-post',
      name: 'The Washington Post',
    },
    author: 'John Wagner',
    title:
      'Election 2020 live updates: Biden to speak on economic fallout of pandemic; Trump hosting diplomatic talks - The Washington Post',
    description:
      'With less than two months remaining until Election Days, both campaigns are also reacting to a bombshell report in the Atlantic that Trump called U.S. soldiers injured or killed in war “losers."',
    url:
      'https://www.washingtonpost.com/elections/2020/09/04/trump-biden-live-updates/',
    urlToImage:
      'https://www.washingtonpost.com/wp-apps/imrs.php?src=https://d1i4t8bqe7zgj6.cloudfront.net/09-03-2020/t_2b8b3f42d7614bb9ab4482d91bc9fc1a_name_01860b00_ee1f_11ea_bd08_1b10132b458f.jpg&w=1440',
    publishedAt: '2020-09-04T14:02:00Z',
    content:
      'Secretary of State Mike Pompeo warned Friday that there is a real risk associated with widespread mail-in balloting, echoing a talking point that the Trump campaign has repeatedly hammered as it seek… [+1737 chars]',
  },
  {
    source: {
      id: 'the-washington-post',
      name: 'The Washington Post',
    },
    author: 'John Wagner',
    title:
      'Election 2020 live updates: Biden to speak on economic fallout of pandemic; Trump hosting diplomatic talks - The Washington Post',
    description:
      'With less than two months remaining until Election Days, both campaigns are also reacting to a bombshell report in the Atlantic that Trump called U.S. soldiers injured or killed in war “losers."',
    url:
      'https://www.washingtonpost.com/elections/2020/09/04/trump-biden-live-updates/',
    urlToImage:
      'https://www.washingtonpost.com/wp-apps/imrs.php?src=https://d1i4t8bqe7zgj6.cloudfront.net/09-03-2020/t_2b8b3f42d7614bb9ab4482d91bc9fc1a_name_01860b00_ee1f_11ea_bd08_1b10132b458f.jpg&w=1440',
    publishedAt: '2020-09-04T14:02:00Z',
    content:
      'Secretary of State Mike Pompeo warned Friday that there is a real risk associated with widespread mail-in balloting, echoing a talking point that the Trump campaign has repeatedly hammered as it seek… [+1737 chars]',
  },
  {
    source: {
      id: 'the-washington-post',
      name: 'The Washington Post',
    },
    author: 'John Wagner',
    title:
      'Election 2020 live updates: Biden to speak on economic fallout of pandemic; Trump hosting diplomatic talks - The Washington Post',
    description:
      'With less than two months remaining until Election Days, both campaigns are also reacting to a bombshell report in the Atlantic that Trump called U.S. soldiers injured or killed in war “losers."',
    url:
      'https://www.washingtonpost.com/elections/2020/09/04/trump-biden-live-updates/',
    urlToImage:
      'https://www.washingtonpost.com/wp-apps/imrs.php?src=https://d1i4t8bqe7zgj6.cloudfront.net/09-03-2020/t_2b8b3f42d7614bb9ab4482d91bc9fc1a_name_01860b00_ee1f_11ea_bd08_1b10132b458f.jpg&w=1440',
    publishedAt: '2020-09-04T14:02:00Z',
    content:
      'Secretary of State Mike Pompeo warned Friday that there is a real risk associated with widespread mail-in balloting, echoing a talking point that the Trump campaign has repeatedly hammered as it seek… [+1737 chars]',
  },
  {
    source: {
      id: 'the-washington-post',
      name: 'The Washington Post',
    },
    author: 'John Wagner',
    title:
      'Election 2020 live updates: Biden to speak on economic fallout of pandemic; Trump hosting diplomatic talks - The Washington Post',
    description:
      'With less than two months remaining until Election Days, both campaigns are also reacting to a bombshell report in the Atlantic that Trump called U.S. soldiers injured or killed in war “losers."',
    url:
      'https://www.washingtonpost.com/elections/2020/09/04/trump-biden-live-updates/',
    urlToImage:
      'https://www.washingtonpost.com/wp-apps/imrs.php?src=https://d1i4t8bqe7zgj6.cloudfront.net/09-03-2020/t_2b8b3f42d7614bb9ab4482d91bc9fc1a_name_01860b00_ee1f_11ea_bd08_1b10132b458f.jpg&w=1440',
    publishedAt: '2020-09-04T14:02:00Z',
    content:
      'Secretary of State Mike Pompeo warned Friday that there is a real risk associated with widespread mail-in balloting, echoing a talking point that the Trump campaign has repeatedly hammered as it seek… [+1737 chars]',
  },
];

const LandingPage = () => {
  //const { newsList } = useContext(NewsContext);
  console.log(newsList);
  return (
    <div>
      <Row justify='center'>
        <Col xs={0} sm={0} md={20}>
          <Carousel items={newsList.slice(0, 5)} />
        </Col>
        <Col xs={24} sm={24} md={0}>
          <Carousel items={newsList.slice(0, 5)} small />
        </Col>
      </Row>
      <Row justify='center'>
        <Col xs={24} sm={24} md={20}>
          <NewsGrid items={newsList.slice(5)} />
        </Col>
      </Row>
    </div>
  );
};

export default LandingPage;
