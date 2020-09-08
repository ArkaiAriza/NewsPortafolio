import React, { useState, useEffect, useContext } from 'react';
import { Modal as AModal, Input, Menu, Cascader, DatePicker } from 'antd';
import NewsContext from '../contexts/NewsContext';
import history from '../history';
import countries from '../resources/countries.json';
import languages from '../resources/languages.json';

const { Search } = Input;

const Modal = ({ visible, handleOk, handleCancel }) => {
  const [text, setText] = useState('');
  const [country, setCountry] = useState('');
  const [fromDate, setFromDate] = useState('');
  const [toDate, setToDate] = useState('');
  const [language, setLanguage] = useState('');
  //const { sourcesOptions, sources } = useContext(NewsContext);
  const { advancedSearchNews } = useContext(NewsContext); //Testing NO Request

  const filter = (inputValue, path) => {
    return path.some(
      (option) =>
        option.label.toLowerCase().indexOf(inputValue.toLowerCase()) > -1
    );
  };

  useEffect(() => {
    //sourcesOptions();
  }, []);

  const renderCountriesOptions = () => {
    return countries.map((country) => {
      return { value: country.Code, label: country.Country };
    });
  };

  const renderLanguageOptions = () => {
    return languages.map((language) => {
      return { value: language.Code, label: language.Language };
    });
  };

  const onSearchHandle = () => {
    advancedSearchNews(text, country, fromDate, toDate, language);
    history.push(`/results/${text}`);
    handleOk();
  };

  return (
    <AModal visible={visible} onCancel={() => handleCancel()} footer={null}>
      <Search
        style={{ marginTop: '25px' }}
        enterButton
        placeholder='Search'
        value={text}
        onChange={(e) => setText(e.target.value)}
        onSearch={onSearchHandle}
      />
      <div style={styles.searchOptionsGrid}>
        <div style={styles.searchOption}>
          Country:
          <Cascader
            options={renderCountriesOptions()}
            style={styles.searchField}
            onChange={(value, selectedOptions) => setCountry(value)}
            placeholder='Select Country'
            showSearch={{ filter }}
          />
        </div>
        <div style={styles.searchOption}>
          Language:
          <Cascader
            options={renderLanguageOptions()}
            style={styles.searchField}
            onChange={(value, selectedOptions) => setLanguage(value[0])}
            placeholder='Select Language'
            showSearch={{ filter }}
          />
        </div>
        <div style={styles.searchOption}>
          From:
          <DatePicker
            style={styles.searchField}
            onChange={(date, dateString) => setFromDate(dateString)}
          />
        </div>
        <div style={styles.searchOption}>
          To:
          <DatePicker
            style={styles.searchField}
            onChange={(date, dateString) => setToDate(dateString)}
          />
        </div>
      </div>
    </AModal>
  );
};

export default Modal;

const styles = {
  searchOptionsGrid: {
    padding: '5% 0 0 0',
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    columnGap: '1rem',
  },
  searchOption: {
    padding: '5px',
    display: 'flex',
    justifyContent: 'space-between',
  },
  searchField: {
    marginLeft: '5px',
    maxWidth: '60%',
  },
};
