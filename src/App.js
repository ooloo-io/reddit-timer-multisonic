import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';
import GlobalStyle from './globalStyles';

import Header from './components/Header';
import Search from './pages/Search';
import Home from './pages/Home';
import Footer from './components/Footer';
import theme from './config/theme';

const Wrapper = styled.div`
  margin: auto;
  max-width: 1440px;
`;

function App() {
  return (
    <Wrapper>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Router>
          <Header />
          <Switch>
            <Route path="/search">
              <Search />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </Router>
        <Footer />
      </ThemeProvider>
    </Wrapper>
  );
}

export default App;
