
import { Container } from './style';
import { Route, Switch, Redirect } from 'react-router-dom';
import SignIn from '../../views/Auth/SignIn';
import Home from '../Home';
import Cookies from 'universal-cookie';

export default () => {
  const cookies = new Cookies();
  const token = cookies.get('token');
  const publicRouter = (
    <Container>
      <Switch>
        <Route exact path="/signin" component={SignIn} />
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
  return !token ? publicRouter : protectedRoutes

