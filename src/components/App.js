import React from 'react';

import { BrowserRouter, Route } from 'react-router-dom';
import { NewsProvider } from '../contexts/NewsContext';
import Header from './Header';
import LandingPage from './LandingPage';
import NewsPage from './NewsPage';
import ResultsPage from './ResultsPage';

import { ThemeSwitcherProvider } from 'react-css-theme-switcher';

const themes = {
  dark: `${process.env.PUBLIC_URL}/dark-theme.css`,
  light: `${process.env.PUBLIC_URL}/light-theme.css`,
};

const App = () => {
  return (
    <ThemeSwitcherProvider
      themeMap={themes}
      defaultTheme="light"
      insertionPoint="styles-insertion-point"
    >
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
    </ThemeSwitcherProvider>
  );
};

export default App;
