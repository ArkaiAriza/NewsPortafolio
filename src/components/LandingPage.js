import React, { useContext } from 'react';
import Carousel from './Carousel';
import NewsGrid from './NewsGrid';

import NewsContext from '../contexts/NewsContext';

import { Col, Row } from 'antd';

const newsList = [
  {
    description:
      'Michigan health officials reported 441 new coronavirus cases and one new COVID-19 death on Tuesday, Sept. 8. The 24-hour case addition is the fewest since Aug. 21, though case data tends to be lower ...',
    image: 'https://images.gnews.io/787e0aca6f6b3d373af31e9aecd976df',
    publishedAt: '2020-09-08 13:09:00 UTC',
    source: { name: 'MLive', url: 'https://www.mlive.com' },
    title:
      'Michigan reports 441 new coronavirus cases, 1 new death following holiday weekend',
    url:
      'https://www.mlive.com/public-interest/2020/09/michigan-reports-441-new-coronavirus-cases-1-new-death-following-holiday-weekend.html',
  },
  {
    description:
      'Michigan health officials reported 441 new coronavirus cases and one new COVID-19 death on Tuesday, Sept. 8. The 24-hour case addition is the fewest since Aug. 21, though case data tends to be lower ...',
    image: 'https://images.gnews.io/787e0aca6f6b3d373af31e9aecd976df',
    publishedAt: '2020-09-08 13:09:00 UTC',
    source: { name: 'MLive', url: 'https://www.mlive.com' },
    title:
      'Michigan reports 441 new coronavirus cases, 1 new death following holiday weekend',
    url:
      'https://www.mlive.com/public-interest/2020/09/michigan-reports-441-new-coronavirus-cases-1-new-death-following-holiday-weekend.html',
  },
  {
    description:
      'Michigan health officials reported 441 new coronavirus cases and one new COVID-19 death on Tuesday, Sept. 8. The 24-hour case addition is the fewest since Aug. 21, though case data tends to be lower ...',
    image: 'https://images.gnews.io/787e0aca6f6b3d373af31e9aecd976df',
    publishedAt: '2020-09-08 13:09:00 UTC',
    source: { name: 'MLive', url: 'https://www.mlive.com' },
    title:
      'Michigan reports 441 new coronavirus cases, 1 new death following holiday weekend',
    url:
      'https://www.mlive.com/public-interest/2020/09/michigan-reports-441-new-coronavirus-cases-1-new-death-following-holiday-weekend.html',
  },
  {
    description:
      'Michigan health officials reported 441 new coronavirus cases and one new COVID-19 death on Tuesday, Sept. 8. The 24-hour case addition is the fewest since Aug. 21, though case data tends to be lower ...',
    image: 'https://images.gnews.io/787e0aca6f6b3d373af31e9aecd976df',
    publishedAt: '2020-09-08 13:09:00 UTC',
    source: { name: 'MLive', url: 'https://www.mlive.com' },
    title:
      'Michigan reports 441 new coronavirus cases, 1 new death following holiday weekend',
    url:
      'https://www.mlive.com/public-interest/2020/09/michigan-reports-441-new-coronavirus-cases-1-new-death-following-holiday-weekend.html',
  },
  {
    description:
      'Michigan health officials reported 441 new coronavirus cases and one new COVID-19 death on Tuesday, Sept. 8. The 24-hour case addition is the fewest since Aug. 21, though case data tends to be lower ...',
    image: 'https://images.gnews.io/787e0aca6f6b3d373af31e9aecd976df',
    publishedAt: '2020-09-08 13:09:00 UTC',
    source: { name: 'MLive', url: 'https://www.mlive.com' },
    title:
      'Michigan reports 441 new coronavirus cases, 1 new death following holiday weekend',
    url:
      'https://www.mlive.com/public-interest/2020/09/michigan-reports-441-new-coronavirus-cases-1-new-death-following-holiday-weekend.html',
  },
  {
    description:
      'Michigan health officials reported 441 new coronavirus cases and one new COVID-19 death on Tuesday, Sept. 8. The 24-hour case addition is the fewest since Aug. 21, though case data tends to be lower ...',
    image: 'https://images.gnews.io/787e0aca6f6b3d373af31e9aecd976df',
    publishedAt: '2020-09-08 13:09:00 UTC',
    source: { name: 'MLive', url: 'https://www.mlive.com' },
    title:
      'Michigan reports 441 new coronavirus cases, 1 new death following holiday weekend',
    url:
      'https://www.mlive.com/public-interest/2020/09/michigan-reports-441-new-coronavirus-cases-1-new-death-following-holiday-weekend.html',
  },
  {
    description:
      'Michigan health officials reported 441 new coronavirus cases and one new COVID-19 death on Tuesday, Sept. 8. The 24-hour case addition is the fewest since Aug. 21, though case data tends to be lower ...',
    image: 'https://images.gnews.io/787e0aca6f6b3d373af31e9aecd976df',
    publishedAt: '2020-09-08 13:09:00 UTC',
    source: { name: 'MLive', url: 'https://www.mlive.com' },
    title:
      'Michigan reports 441 new coronavirus cases, 1 new death following holiday weekend',
    url:
      'https://www.mlive.com/public-interest/2020/09/michigan-reports-441-new-coronavirus-cases-1-new-death-following-holiday-weekend.html',
  },
  {
    description:
      'Michigan health officials reported 441 new coronavirus cases and one new COVID-19 death on Tuesday, Sept. 8. The 24-hour case addition is the fewest since Aug. 21, though case data tends to be lower ...',
    image: 'https://images.gnews.io/787e0aca6f6b3d373af31e9aecd976df',
    publishedAt: '2020-09-08 13:09:00 UTC',
    source: { name: 'MLive', url: 'https://www.mlive.com' },
    title:
      'Michigan reports 441 new coronavirus cases, 1 new death following holiday weekend',
    url:
      'https://www.mlive.com/public-interest/2020/09/michigan-reports-441-new-coronavirus-cases-1-new-death-following-holiday-weekend.html',
  },
  {
    description:
      'Michigan health officials reported 441 new coronavirus cases and one new COVID-19 death on Tuesday, Sept. 8. The 24-hour case addition is the fewest since Aug. 21, though case data tends to be lower ...',
    image: 'https://images.gnews.io/787e0aca6f6b3d373af31e9aecd976df',
    publishedAt: '2020-09-08 13:09:00 UTC',
    source: { name: 'MLive', url: 'https://www.mlive.com' },
    title:
      'Michigan reports 441 new coronavirus cases, 1 new death following holiday weekend',
    url:
      'https://www.mlive.com/public-interest/2020/09/michigan-reports-441-new-coronavirus-cases-1-new-death-following-holiday-weekend.html',
  },
  {
    description:
      'Michigan health officials reported 441 new coronavirus cases and one new COVID-19 death on Tuesday, Sept. 8. The 24-hour case addition is the fewest since Aug. 21, though case data tends to be lower ...',
    image: 'https://images.gnews.io/787e0aca6f6b3d373af31e9aecd976df',
    publishedAt: '2020-09-08 13:09:00 UTC',
    source: { name: 'MLive', url: 'https://www.mlive.com' },
    title:
      'Michigan reports 441 new coronavirus cases, 1 new death following holiday weekend',
    url:
      'https://www.mlive.com/public-interest/2020/09/michigan-reports-441-new-coronavirus-cases-1-new-death-following-holiday-weekend.html',
  },
];

const LandingPage = () => {
  //const { newsList } = useContext(NewsContext);
  return (
    <div>
      <Row justify='center'>
        <Col xs={0} sm={0} md={20}>
          <Carousel items={newsList.slice(0, 4)} />
        </Col>
        <Col xs={24} sm={24} md={0}>
          <Carousel items={newsList.slice(0, 4)} small />
        </Col>
      </Row>
      <Row justify='center'>
        <Col xs={24} sm={24} md={20}>
          <NewsGrid items={newsList.slice(4)} />
        </Col>
      </Row>
    </div>
  );
};

export default LandingPage;
