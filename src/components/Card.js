import React from 'react';

import { Card as ACard, Typography } from 'antd';

const { Meta } = ACard;
const { Paragraph, Title, Link } = Typography;

const Card = ({ item }) => {
  return (
    <ACard
      hoverable
      style={{
        margin: '5%',
        minHeight: '90%',
        display: 'flex',
        flexDirection: 'column',
      }}
      cover={<img alt={item.title} src={item.urlToImage} />}
      actions={[
        <Link
          level={6}
          href={item.url}
          target='_blank'
          style={{
            maxHeight: '10%',
            margin: '0',
            padding: '0 2rem',
            fontSize: '12px',
          }}
          ellipsis={true}
        >
          {item.url}
        </Link>,
      ]}
      bodyStyle={{ flex: 1, paddingBottom: 0 }}
    >
      <Meta
        title={
          <Title level={3} ellipsis>
            {item.title}
          </Title>
        }
        description={
          <Paragraph
            ellipsis={{
              rows: 3,
              expandable: false,
            }}
            style={{ textAlign: 'justify' }}
          >
            {item.description}
          </Paragraph>
        }
      />
    </ACard>
  );
};

export default Card;
