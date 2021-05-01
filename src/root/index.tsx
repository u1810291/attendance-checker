import App from '../containers/App'
import Wrapper from '../components/Wrapper'
import { BrowserRouter as Router } from 'react-router-dom';

import { Provider } from 'react-redux'
import store from '../redux/store'

export default () => (
  <Provider store={store}>
    <Router>
      <Wrapper>
        <App />
      </Wrapper>
    </Router>
  </Provider>
)

