import React from 'react';
import { Menu } from 'antd';

const { SubMenu } = Menu;

const PopOverMenu = ({ children, title, key, openKey }) => {
  return (
    <Menu
      defaultOpenKeys={openKey ? [key] : [null]}
      defaultSelectedKeys={['Option']}
    >
      <SubMenu key={key}>
        <Menu.ItemGroup title={title}>{children}</Menu.ItemGroup>
      </SubMenu>
    </Menu>
  );
};

export default PopOverMenu;
