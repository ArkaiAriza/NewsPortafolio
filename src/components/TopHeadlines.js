import React, { useContext, useEffect, useState } from 'react';
import NewsGrid from './NewsGrid';

import { Row, Col } from 'antd';
import NewsContext from '../contexts/NewsContext';

const ResultsPage = () => {
  const { newsList, topHeadlinesNews, topic, country } = useContext(
    NewsContext
  );
  console.log(newsList);

  useEffect(() => {
    topHeadlinesNews();
  }, [topic, country]);

  return (
    <div>
      <Row justify='center'>
        <Col xs={24} sm={24} md={20}>
          <NewsGrid items={newsList.slice(0, 9)} />
        </Col>
      </Row>
    </div>
  );
};

export default ResultsPage;
