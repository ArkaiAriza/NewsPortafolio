import React, { useState, useEffect } from 'react';
import axios from '../apis/news';

const NewsContext = React.createContext({
  newsList: [],
  selectedNew: {},
  query: { q: '' },
  category: 'general',
  country: 'us',
});

export const NewsProvider = ({ children }) => {
  const [newsList, setNewsList] = useState([]);
  const [selectedNew, setSelectedNew] = useState({});
  const [query, setQuery] = useState({ q: '' });
  const [category, setCategory] = useState('general');
  const [topic, setTopic] = useState('breaking-news');
  const [country, setCountry] = useState('us');
  const [loading, setLoading] = useState(false);

  const getNewsList = async () => {
    setLoading(true);
    const response = await axios.get(`/topics/world`, {});

    setNewsList(response.data.articles);
    setLoading(false);
  };

  const searchNews = async (text) => {
    setLoading(true);
    setQuery({ ...query, q: text });
    const response = await axios.get(`/search`, {
      params: {
        q: text,
        country: country,
      },
    });
    setNewsList(response.data.articles);
    setLoading(false);
  };

  const topHeadlinesNews = async (text) => {
    setLoading(true);
    const response = await axios.get(`/top-headlines`, {
      params: {
        country: country,
        topic: topic,
      },
    });
    setNewsList(response.data.articles);
    setLoading(false);
  };

  const advancedSearchNews = async (text, country, from, to, language) => {
    setLoading(true);
    setQuery({
      ...query,
      q: text,
      country,
      mindate: from,
      maxdate: to,
      lang: language,
    });

    const response = await axios.get(`/search`, {
      params: {
        q: text,
        country: country,
        mindate: from,
        maxdate: to,
        lang: language,
      },
    });
    setNewsList(response.data.articles);
    setLoading(false);
  };

  const initNewsList = async () => {
    const response = await axios.get('/top-headlines', {
      params: {
        lang: 'en',
      },
    });
    setNewsList(response.data.articles);
  };

  useEffect(() => {
    initNewsList();
  }, []);

  return (
    <NewsContext.Provider
      value={{
        newsList,
        selectedNew,
        query,
        category,
        country,
        loading,
        topic,
        setCountry,
        setSelectedNew,
        setTopic,
        getNewsList,
        searchNews,
        advancedSearchNews,
        topHeadlinesNews,
        initNewsList,
      }}
    >
      {children}
    </NewsContext.Provider>
  );
};

export default NewsContext;
