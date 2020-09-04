import React, { useContext } from 'react';
import NewsGrid from './NewsGrid';

import { Row, Col } from 'antd';
import NewsContext from '../contexts/NewsContext';

const ResultsPage = () => {
  const { newsList } = useContext(NewsContext);

  console.log(newsList);

  return (
    <div>
      <Row justify='center'>
        <Col xs={24} sm={24} md={20}>
          <NewsGrid items={newsList} />
        </Col>
      </Row>
    </div>
  );
};

export default ResultsPage;
