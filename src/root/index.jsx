/* eslint-disable import/no-anonymous-default-export */
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from '../containers/App'
import store from '../redux/store';

export default()=> {
  return (
    <Provider store={store}>
      <Router>
        <App/>
      </Router>
    </Provider>
  );
}
