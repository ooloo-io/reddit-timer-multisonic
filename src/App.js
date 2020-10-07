import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './globalStyles';

import Header from './components/Header';
import Search from './pages/Search';
import Home from './pages/Home';
import Footer from './components/Footer';
import theme from './config/theme';

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Header />
        <Router>
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
    </>
  );
}

export default App;
