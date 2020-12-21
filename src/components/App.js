import React from 'react';

import { Router, Route } from 'react-router-dom';
import { NewsProvider } from '../contexts/NewsContext';
import Header from './Header';
import SearchBar from './SearchBar';
import LandingPage from './LandingPage';
import ResultsPage from './ResultsPage';
import TopHeadlines from './TopHeadlines';

import {
  ThemeSwitcherProvider,
  useThemeSwitcher,
} from 'react-css-theme-switcher';
import history from '../history';

import { LoadingOutlined } from '@ant-design/icons';

const themes = {
  dark: `${process.env.PUBLIC_URL}/dark-theme.css`,
  light: `${process.env.PUBLIC_URL}/light-theme.css`,
};

const App = () => {
  return (
    <ThemeSwitcherProvider
      themeMap={themes}
      defaultTheme='light'
      insertionPoint='styles-insertion-point'
    >
      <Container>
        <Router history={history}>
          <NewsProvider>
            <Header />
            <SearchBar />
            <Route path='/' exact component={LandingPage} />
            <Route path='/results/:search' exact component={ResultsPage} />
            <Route path='/topheadlines' exact component={TopHeadlines} />
          </NewsProvider>
        </Router>
      </Container>
    </ThemeSwitcherProvider>
  );
};

const Container = ({ children }) => {
  const { status } = useThemeSwitcher();
  if (status === 'loading')
    return (
      <LoadingOutlined
        style={{
          fontSize: 100,
          margin: '300px auto',
          width: '100%',
        }}
      />
    );

  return <div> {children}</div>;
};

export default App;
