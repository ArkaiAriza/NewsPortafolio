import { NEWS_DEV_KEY } from './devKeys';

let NEWS_KEY = '';

if (process.env.NODE_ENV === 'production') {
  NEWS_KEY = process.env.REACT_APP_NEXT_PUBLIC_NEWS_PROD_KEY;
} else {
  NEWS_DEV_KEY
    ? (NEWS_KEY = NEWS_DEV_KEY)
    : (NEWS_KEY = process.env.REACT_APP_NEXT_PUBLIC_NEWS_DEV_VERCEL_KEY);
}

export default NEWS_KEY;
