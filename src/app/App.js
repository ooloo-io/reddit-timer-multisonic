import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle, theme } from '../style';

import Header from '../common/header';
import Footer from '../common/footer';
import Home from '../pages/Home';
import Search from '../pages/Search';

import Wrapper from './App.style';

function App() {
  return (
    <Wrapper>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Header />
        <Switch>
          <Route path="/search">
            <Search />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        <Footer />
      </ThemeProvider>
    </Wrapper>
  );
}

export default App;
