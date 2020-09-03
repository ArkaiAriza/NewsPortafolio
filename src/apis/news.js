import axios from 'axios';

import NEWS_KEY from '../keys';

export default axios.create({
  baseURL: 'https://newsapi.org',
  params: { apiKey: NEWS_KEY },
});
