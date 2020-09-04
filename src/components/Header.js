import React from 'react';
import PopOverMenu from './PopOverMenu';
import SideMenu from './SideMenu';
import SearchBar from './SearchBar';

import { useThemeSwitcher } from 'react-css-theme-switcher';
import { Switch, Menu } from 'antd';

const { SubMenu } = Menu;

const Header = () => {
  const [isDarkMode, setIsDarkMode] = React.useState();
  const [current, setCurrent] = React.useState();
  const { switcher, currentTheme, status, themes } = useThemeSwitcher();

  const toggleTheme = (isChecked) => {
    setIsDarkMode(isChecked);
    switcher({ theme: isChecked ? themes.dark : themes.light });
  };

  // Avoid theme change flicker
  if (status === 'loading') {
    return null;
  }

  const handleClick = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
  };

  return (
    <div>
      <Menu onClick={handleClick} selectedKeys={[current]} mode='horizontal'>
        <Menu.Item key='sideMenu'>
          <SideMenu />
        </Menu.Item>
        <Menu.Item key='popOverMenu'>
          <PopOverMenu />
        </Menu.Item>
        <Menu.Item key='darkModeToggle'>
          <Switch checked={isDarkMode} onChange={toggleTheme} />
        </Menu.Item>
      </Menu>
    </div>
  );
};

export default Header;
