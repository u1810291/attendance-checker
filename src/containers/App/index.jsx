/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import Home from '../Home';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Container } from './style'
import SignIn from '../../views/Auth'

export default ()=> {
  const publicRoutes = (
    <Container>
      <Switch>
        <Route exact path="/signin" component={SignIn} />
        <Redirect from="*" to="/signin" />
      </Switch>
    </Container>
  );

  const protectedRoutes = (
    <Container>
      <Switch>
        <Route path="/" component={Home} />
      </Switch>
    </Container>
  );

  return protectedRoutes;
}
