import React, { useContext } from 'react';
import history from '../history';

import { Card as ACard, Typography } from 'antd';
import NewsContext from '../contexts/NewsContext';

const { Meta } = ACard;
const { Paragraph, Title, Link } = Typography;

const Card = ({ item }) => {
  const { setSelectedNew } = useContext(NewsContext);
  return (
    <ACard
      onClick={() => window.open(item.url, '_blank')}
      hoverable
      style={{
        margin: '5%',
        minHeight: '90%',
        display: 'flex',
        flexDirection: 'column',
      }}
      cover={
        <img
          alt={item.title}
          src={item.urlToImage}
          onError={(ev) =>
            (ev.target.src =
              'https://www.ilac.com/wp-content/uploads/2019/06/placeholder-600x400.png')
          }
        />
      }
      /* actions={[
        <Link
          level={6}
          href={item.url}
          target="_blank"
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
      bodyStyle={{ flex: 1, paddingBottom: 0 }} */
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
