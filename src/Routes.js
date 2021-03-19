import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Detect from './pages/Detect';


export default ({ childProps }) =>
  <Switch>
    <Route path="/" exact component={Detect} props={childProps} />
  </Switch>;
