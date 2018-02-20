import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { Homepage, AboutPage, LoginPage, OopsPage } from './pages';

export default store => (
  <Switch>
    <Route exact path="/" component={Homepage} />
    <Route exact path="/about" component={AboutPage} />
    <Route exact path="/login" component={LoginPage} />
    <Route component={OopsPage} />
  </Switch>
);
