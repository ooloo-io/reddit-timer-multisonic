import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle, theme } from '../style';

import Header from '../common/header';
import Footer from '../common/footer';
import Home from '../pages/Home';
import Search from '../pages/Search';
import Terms from '../pages/Terms';

import { ContentContainer } from './App.style';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header />
      <ContentContainer>
        <Switch>
          <Route path="/search">
            <Search />
          </Route>
          <Route path="/terms">
            <Terms />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </ContentContainer>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
