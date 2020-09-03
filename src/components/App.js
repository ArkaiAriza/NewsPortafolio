import React from 'react';
import { ThemeProvider } from '@material-ui/styles';

import { BrowserRouter, Route } from 'react-router-dom';
import { theme } from '../theme';
import { NewsProvider } from '../contexts/NewsContext';
import Header from './Header';
import LandingPage from './LandingPage';
import NewsPage from './NewsPage';
import ResultsPage from './ResultsPage';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <BrowserRouter>
          <NewsProvider>
            <Header />
            <Route path="/" exact component={LandingPage} />
            <Route path="/results" exact component={ResultsPage} />
            <Route path="/new" exact component={NewsPage} />
          </NewsProvider>
        </BrowserRouter>
      </div>
    </ThemeProvider>
  );
};

export default App;
