import React, { useContext } from 'react';
import { Menu } from 'antd';
import NewsContext from '../contexts/NewsContext';
import history from '../history';

const { SubMenu } = Menu;

const items = [
  { label: 'Breaking News', key: 'breaking-news' },
  { label: 'World', key: 'world' },
  { label: 'Nation', key: 'nation' },
  { label: 'Business', key: 'business' },
  { label: 'Technology', key: 'technology' },
  { label: 'Entertainment', key: 'entertainment' },
  { label: 'Sports', key: 'sports' },
  { label: 'Science', key: 'science' },
  { label: 'Health', key: 'health' },
];

const PopOverMenu = ({ title, key, openKey }) => {
  const { setTopic, topic, topHeadlinesNews } = useContext(NewsContext);

  const handleSelectTopic = (topic) => {
    setTopic(topic);
    history.push('/topheadlines/');
  };

  const renderItems = () => {
    return items.map((item) => {
      return (
        <Menu.Item
          key={item.key}
          type='primary'
          style={{ display: 'block', width: '100%' }}
          onClick={() => handleSelectTopic(item.key)}
        >
          {item.label}
        </Menu.Item>
      );
    });
  };

  return (
    <Menu
      defaultOpenKeys={openKey ? [key] : [null]}
      defaultSelectedKeys={['Option']}
    >
      <SubMenu key={key}>
        <Menu.ItemGroup title={title}>{renderItems()}</Menu.ItemGroup>
      </SubMenu>
    </Menu>
  );
};

export default PopOverMenu;
