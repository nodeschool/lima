import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import About from './components/About';
import Events from './components/Events';
import Sponsors from './components/Sponsors';
import Mentors from './components/Mentors';
import Footer from './components/Footer';


const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path='/'>
        <Header />
        <About />
        <Events />
        <Mentors />
        <Sponsors />
        <Footer />
      </Route>
    </Switch>
  </BrowserRouter>
);

export default App;
