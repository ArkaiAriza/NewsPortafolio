import React, { useState, useEffect, useContext } from 'react';
import PopOverMenu from './PopOverMenu';
import SideMenu from './SideMenu';
import SearchBar from './SearchBar';

import { useThemeSwitcher } from 'react-css-theme-switcher';
import { Switch, Menu } from 'antd';
import { CloseOutlined, CheckOutlined } from '@ant-design/icons';
import history from '../history';
import NewsContext from '../contexts/NewsContext';

const { SubMenu } = Menu;

const Header = () => {
  const { switcher, currentTheme, status, themes } = useThemeSwitcher();
  const { initNewsList } = useContext(NewsContext);

  const [isDarkMode, setIsDarkMode] = useState(
    currentTheme === 'dark' ? true : false
  );
  const [current, setCurrent] = useState();

  const [sideToggle, setSideToggle] = useState(false);

  const toggleTheme = (isChecked) => {
    switcher({ theme: isChecked ? themes.dark : themes.light });
  };

  const handleClick = (e) => {
    setCurrent(e.key);
  };

  return (
    <div>
      <Menu selectedKeys={[current]} mode='horizontal'>
        <Menu.Item
          key='home'
          onClick={() => {
            initNewsList();
            history.push('/');
          }}
        >
          <h1 style={{ margin: 0 }}>HOME</h1>
        </Menu.Item>
        <Menu.Item key='sideMenu' onClick={() => setSideToggle(!sideToggle)}>
          Countries
        </Menu.Item>
        <Menu.Item key='popOverMenu'>
          <PopOverMenu />
        </Menu.Item>
        <Menu.Item key='darkModeToggle'>
          <Switch
            checked={isDarkMode}
            onChange={toggleTheme}
            checkedChildren={'Dark'}
            unCheckedChildren={'Light'}
          />
        </Menu.Item>
      </Menu>

      <SideMenu visible={sideToggle} setSideToggle={setSideToggle} />
    </div>
  );
};

export default Header;
