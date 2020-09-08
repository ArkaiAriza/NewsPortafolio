import React from 'react';

import countries from '../resources/countries.json';
import { Button, Menu } from 'antd';

import styled from 'styled-components';

const StyledSide = styled.div`
  position: absolute;
  left: ${({ visible }) => (visible ? 0 : '-200px')};
  background-color: white;
  z-index: 2;
  display: flex;
  flex-direction: column;
  min-width: 200px;
  max-width: 200px;
  max-height: 100vh;
  overflow-y: auto;
  overflow-x: hidden;
  transition: left 0.5s ease 0s;
  ::-webkit-scrollbar {
    background-color: #eeeeee;
    width: 5px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: #00adb5;
    width: 5px;
  }
`;

const SideMenu = ({ visible }) => {
  const renderCountries = () => {
    return countries.map((country) => {
      return (
        <Menu.Item
          key={country.Code}
          type='primary'
          style={{ display: 'block', width: '100%' }}
        >
          {country.Country}
        </Menu.Item>
      );
    });
  };

  return (
    <StyledSide visible={visible}>
      <Menu mode='vertical'>{renderCountries()}</Menu>
    </StyledSide>
  );
};

export default SideMenu;

const styles = {
  sideHidden: {
    left: '-200px',
    zIndex: 2,
  },
  sideShow: {
    left: 0,
    zIndex: 2,
    boxShadow: '4px 5px 8px 0px rgba(0, 0, 0, 0.3)',
    scrollbarWidth: 'thin',
  },
  side: {
    WebkitScrollbarWidth: '5px',
    position: 'absolute',
    top: 50,
    display: 'flex',
    flexDirection: 'column',
    minWidth: '200px',
    maxWidth: '200px',
    maxHeight: '100vh',
    backgroundColor: 'white',
    overflowY: 'auto',
    overflowX: 'hidden',
    transition: 'left 0.5s ease 0s',
  },
};
