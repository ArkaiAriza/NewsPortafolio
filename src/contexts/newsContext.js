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
  const [selectedNew, setSelectedNew] = useState({});
  const [query, setQuery] = useState({ q: '', country: 'us' });
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
    const initNewsList = async () => {
      const response = await axios.get(`/v2/top-headlines`, {
        params: {
          country: 'us',
          category: 'general',
          pageSize: 21,
        },
      });
      setNewsList(response.data.articles);
    };
    //initNewsList();
  }, []);

  useEffect(() => {
    const searchNews = async () => {
      const response = await axios.get(`/v2/top-headlines`, {
        params: {
          q: query.q,
          country: query.country,
        },
      });
      setNewsList(response.data.articles);
    };
    searchNews();
  }, [query]);

  return (
    <NewsContext.Provider
      value={{
        newsList,
        selectedNew,
        query,
        setQuery,
        category,
        source,
        getNewsList,
      }}
    >
      {children}
    </NewsContext.Provider>
  );
};

export default NewsContext;
