import App from '../containers/App'
import { BrowserRouter as Router } from 'react-router-dom';

import { Provider } from 'react-redux'
import store from '../redux/store'

export default () => (
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>
)

