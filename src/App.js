import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header />
      <Router>
        <Switch>
          <Route path='/search'>Search Route</Route>
          <Route path='/'>Root Route</Route>
        </Switch>
      </Router>
      <Footer />
    </>
  );
}

export default App;
