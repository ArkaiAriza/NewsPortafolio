import React, { useState } from 'react';
import PopOverMenu from './PopOverMenu';
import SideMenu from './SideMenu';
import SearchBar from './SearchBar';

import { useThemeSwitcher } from 'react-css-theme-switcher';
import { Switch, Menu } from 'antd';

const { SubMenu } = Menu;

const Header = () => {
  const [isDarkMode, setIsDarkMode] = useState();
  const [current, setCurrent] = useState();
  const { switcher, currentTheme, status, themes } = useThemeSwitcher();

  const [sideToggle, setSideToggle] = useState(false);

  const toggleTheme = (isChecked) => {
    setIsDarkMode(isChecked);
    switcher({ theme: isChecked ? themes.dark : themes.light });
  };

  // Avoid theme change flicker
  if (status === 'loading') {
    return null;
  }

  const handleClick = (e) => {
    setCurrent(e.key);
  };

  console.log(sideToggle);

  return (
    <div>
      <Menu onClick={handleClick} selectedKeys={[current]} mode='horizontal'>
        <Menu.Item key='sideMenu' onClick={() => setSideToggle(!sideToggle)}>
          Countries
        </Menu.Item>
        <Menu.Item key='popOverMenu'>
          <PopOverMenu />
        </Menu.Item>
        <Menu.Item key='darkModeToggle'>
          <Switch checked={isDarkMode} onChange={toggleTheme} />
        </Menu.Item>
      </Menu>

      <SideMenu visible={sideToggle} />
    </div>
  );
};

export default Header;
