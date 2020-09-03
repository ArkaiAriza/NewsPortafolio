import React, { useState, useEffect } from 'react';

import axios from '../apis/news';

const NewsContext = React.createContext({
  newsList: [],
  selectedNew: {},
  query: {},
  category: 'general',
  source: '',
  country: 'us',
});

export const NewsProvider = ({ children }) => {
  const [newsList, setNewsList] = useState([]);
  const [selectedNew, setselectedNew] = useState({});
  const [query, setQuery] = useState({});
  const [category, setCategory] = useState('general');
  const [source, setSource] = useState('');
  const [country, setCountry] = useState('us');

  const getNewsList = async () => {
    const response = await axios.get(`/v2/top-headlines`, {
      params: {
        country,
        category,
      },
    });
    setNewsList(response.data.articles);
  };

  useEffect(() => {
    //getNewsList();
  }, []);

  return (
    <NewsContext.Provider
      value={{ newsList, selectedNew, query, category, source, getNewsList }}
    >
      {children}
    </NewsContext.Provider>
  );
};

export default NewsContext;
