import React from 'react';
import Card from './Card';

import { Row, Col } from 'antd';

const NewsGrid = ({ items }) => {
  const renderNews = () => {
    return items.map((item, index) => {
      return (
        <Col lg={12} xs={24} key={item.title + index}>
          <Card item={item}></Card>
        </Col>
      );
    });
  };

  return <Row style={{ padding: '' }}>{renderNews()}</Row>;
};

export default NewsGrid;
