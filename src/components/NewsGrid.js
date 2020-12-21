import React from 'react';
import Card from './Card';

import { Row, Col } from 'antd';

const NewsGrid = ({ items }) => {
  const renderNews = () => {
    return items.map((item, index) => {
      return (
        <Col xxl={8} lg={12} md={24} key={item.title + index}>
          <Card item={item}></Card>
        </Col>
      );
    });
  };

  return <Row>{renderNews()}</Row>;
};

export default NewsGrid;
