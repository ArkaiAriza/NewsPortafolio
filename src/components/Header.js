import React from 'react';
import PopOverMenu from './PopOverMenu';
import SideMenu from './SideMenu';
import SearchBar from './SearchBar';

const Header = () => {
  return (
    <div>
      <SearchBar />
      <SideMenu />
      <PopOverMenu />
    </div>
  );
};

export default Header;
