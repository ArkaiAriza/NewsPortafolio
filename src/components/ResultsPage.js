import React, { useContext, useEffect, useState } from 'react';
import NewsGrid from './NewsGrid';

import { Row, Col } from 'antd';
import NewsContext from '../contexts/NewsContext';

const ResultsPage = ({ match }) => {
  const { newsList, searchNews } = useContext(NewsContext);
  const [term, setTerm] = useState('');

  useEffect(() => {
    if (
      window.location.pathname !== '/results' &&
      window.location.pathname !== '/results/'
    ) {
      searchNews(match.params.search);
    }
  }, []);

  return (
    <div>
      <Row justify="center">
        <Col xs={24} sm={24} md={20}>
          <NewsGrid items={newsList} />
        </Col>
      </Row>
    </div>
  );
};

export default ResultsPage;
