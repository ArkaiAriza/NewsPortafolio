import React, { useState, useContext } from 'react';
import Modal from './Modal';

import { Input, Row, Col, Button } from 'antd';

import history from '../history';
import NewsContext from '../contexts/NewsContext';
import { queryAllByAltText } from '@testing-library/react';

const { Search } = Input;

const SearchBar = () => {
  const [text, setText] = useState('');
  const [modal, setModal] = useState(false);
  const [country, setCountry] = useState('');

  const handleSearch = () => {
    setModal(false);
    setQuery({ q: text, country });

    history.push('/results');
  };

  const handleCancel = () => {
    setModal(false);
  };

  const { setQuery } = useContext(NewsContext);

  return (
    <Row justify='center'>
      <Col xs={24} sm={24} md={12}>
        <div style={styles.SearchBox}>
          <Search
            style={styles.searchBar}
            enterButton
            placeholder='Search'
            value={text}
            onChange={(e) => setText(e.target.value)}
            onSearch={() => handleSearch()}
          />
          <Button
            onClick={(e) => {
              setModal(true);
            }}
            onMouseDown={(e) => e.preventDefault()}
          >
            Advanced Search
          </Button>
          <Modal
            visible={modal}
            handleCancel={handleCancel}
            handleOk={handleSearch}
          ></Modal>
        </div>
      </Col>
    </Row>
  );
};

export default SearchBar;

const styles = {
  SearchBox: {
    display: 'flex',
    justifyContent: 'space-between',
    margin: '1rem',
    padding: '1rem',
  },
  searchBar: { maxWidth: '80%', marginRight: '1rem' },
};
