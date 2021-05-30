import React from 'react';
import { Route, Switch } from 'react-router-dom';
import About from './pages/About';
import Detect from './pages/Detect';
import NotFound from './pages/NotFound';
import Contact from './pages/Contact';
<<<<<<< HEAD
import Database from './pages/Database';
=======
import database from './pages/database';
>>>>>>> cc5574e0f4098e69db19f8be0cb7465e9ab68df7

const routing = ({ childProps }) =>
  <Switch>
    <Route path="/" exact component={Detect} props={childProps} />
    <Route path="/about" exact component={About} props={childProps} />
    <Route path="/contact" exact component={Contact} props={childProps} />
    <Route path="/database" exact component={Database} props={childProps} />
    <Route component={NotFound} />
  </Switch>;
export default routing;
