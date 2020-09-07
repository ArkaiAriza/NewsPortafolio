import React, { useState, useEffect } from 'react';

import axios from '../apis/news';

const NewsContext = React.createContext({
  newsList: [],
  selectedNew: {},
  query: { q: '' },
  category: 'general',
  sources: [],
  country: 'us',
});

export const NewsProvider = ({ children }) => {
  const [newsList, setNewsList] = useState([]);
  const [selectedNew, setSelectedNew] = useState({});
  const [query, setQuery] = useState({ q: '' });
  const [category, setCategory] = useState('general');
  const [sources, setSources] = useState([]);
  const [country, setCountry] = useState('us');
  const [loading, setLoading] = useState(false);

  const getNewsList = async () => {
    setLoading(true);
    const response = await axios.get(`/v2/top-headlines`, {
      params: {
        country,
        category,
      },
    });
    setNewsList(response.data.articles);
    setLoading(false);
  };

  const searchNews = async (text) => {
    setLoading(true);
    setQuery({ ...query, q: text });
    const response = await axios.get(`/v2/everything`, {
      params: {
        q: text,
      },
    });
    setNewsList(response.data.articles);
    setLoading(false);
  };

  const advancedSearchNews = async (
    text,
    source,
    from,
    to,
    language,
    sortBy
  ) => {
    setLoading(true);
    setQuery({
      ...query,
      q: text,
      sources: source,
      from,
      to,
      language,
      sortBy,
    });
    const response = await axios.get(`/v2/everything`, {
      params: {
        q: text,
        sources: source,
        from,
        to,
        language,
        sortBy,
      },
    });
    setNewsList(response.data.articles);
    setLoading(false);
  };

  const sourcesOptions = async () => {
    setLoading(true);
    const response = await axios.get(`/v2/sources`);
    setSources(response.data.sources);
    setLoading(false);
  };

  useEffect(() => {
    const initNewsList = async () => {
      setLoading(true);
      const response = await axios.get(`/v2/top-headlines`, {
        params: {
          country: 'us',
          category: 'general',
          pageSize: 21,
        },
      });
      setNewsList(response.data.articles);
      setLoading(true);
    };
    //initNewsList();
  }, []);

  return (
    <NewsContext.Provider
      value={{
        newsList,
        selectedNew,
        query,
        category,
        sources,
        loading,
        getNewsList,
        searchNews,
        sourcesOptions,
        advancedSearchNews,
        setSelectedNew,
      }}
    >
      {children}
    </NewsContext.Provider>
  );
};

export default NewsContext;
