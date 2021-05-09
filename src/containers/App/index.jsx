/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import Home from '../Home';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Container } from './style'
import SignIn from '../../views/Auth/SignIn'
import Verify from '../../views/Auth/Verify'

export default ()=> {
  const token = sessionStorage.getItem('token')
  const publicRoutes = (
    <Container>
      <Switch>
        <Route exact path="/signin" component={SignIn} />
        <Route exact path="/verify" component={Verify} />
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

  return !token ? publicRoutes : protectedRoutes;
}
