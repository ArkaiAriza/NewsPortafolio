import React from 'react';
import Card from './Card';
import { Carousel as ACarousel, Typography, Row, Col } from 'antd';

const { Title } = Typography;

const contentStyle = {
  position: 'relative',
  maxHeight: '600px',
  color: 'white',
  textAlign: 'center',
  background: '#222',
};

const Carousel = ({ items, small }) => {
  const renderItems = () => {
    return items.map((item, index) => {
      return (
        <React.Fragment key={item.title + index}>
          <div style={contentStyle}>
            <img
              style={{
                width: '100%',
                maxWidth: '1200px',
                margin: 'auto',
                maxHeight: '800px',
                height: 'auto',
              }}
              key={item.title}
              src={item.urlToImage}
              alt={item.title}
            />
            <div
              style={{
                position: 'absolute',
                padding: '5%',
                bottom: 0,
                right: 0,
                left: 0,
                color: 'white',
                backgroundColor: '#0008',
              }}
            >
              <Title
                level={small ? 3 : 1}
                ellipsis={{ rows: 2 }}
                style={{
                  margin: 0,
                  color: 'white',
                  textAlign: 'left',
                }}
              >
                {item.title}
              </Title>
            </div>
          </div>
        </React.Fragment>
      );
    });
  };

  return (
    <ACarousel autoplay style={{ padding: '' }} dots={!small}>
      {renderItems()}
    </ACarousel>
  );
};

export default Carousel;
