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
        country: country[0],
        mindate: from,
        maxdate: to,
        lang: language,
      },
    });
    setNewsList(response.data.articles);
    setLoading(false);
  };

  useEffect(() => {
    const initNewsList = async () => {
      const response = await axios.get('/search', {
        params: {
          q: 'covid',
          lang: 'en',
          image: 'required',
        },
      });
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
        country,
        loading,
        getNewsList,
        searchNews,
        setCountry,
        advancedSearchNews,
        setSelectedNew,
      }}
    >
      {children}
    </NewsContext.Provider>
  );
};

export default NewsContext;
