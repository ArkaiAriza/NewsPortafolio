import React, { useState, useContext } from 'react';
import Modal from './Modal';

import { Input, Row, Col, Button } from 'antd';

import history from '../history';
import NewsContext from '../contexts/NewsContext';

const { Search } = Input;

const SearchBar = () => {
  const [text, setText] = useState('');
  const [modal, setModal] = useState(false);

  const handleSearch = () => {
    searchNews(text);
    history.push(`/results/${text}`);
  };

  const handleOk = () => {
    setModal(false);
  };

  const handleCancel = () => {
    setModal(false);
  };

  const { searchNews } = useContext(NewsContext);

  return (
    <Row justify='center'>
      <Col xs={24} sm={24} md={16} lg={14}>
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
            handleOk={handleOk}
          />
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
