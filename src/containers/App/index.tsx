import { useEffect, useState } from 'react'
import { Container } from './style';
import { Route, Switch, Redirect } from 'react-router-dom';
import SignIn from '../../views/Auth/SignIn';
import Verify from '../../views/Auth/Verify';
import Home from '../Home';

export default () => {
  const token = window.localStorage.getItem('token');
  console.log(token);
  const publicRouter = (
    <Container>
      <Switch>
        <Route exact path="/signin" component={SignIn} />
        <Route exact path="/verify" component={Verify} />
        <Redirect from="*" to="/signin" />
      </Switch>
    </Container>
  )
  const protectedRoutes = (
    <Container>
      <Switch>
        <Route path="/" component={Home} />
      </Switch>
    </Container>
  )
  return !token ? publicRouter : protectedRoutes;
}
