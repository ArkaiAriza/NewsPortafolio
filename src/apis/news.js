import axios from 'axios';

import NEWS_KEY from '../keys';

export default axios.create({
  baseURL: 'https://gnews.io/api/v4',
  params: { token: NEWS_KEY },
});
