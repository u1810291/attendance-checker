import App from '../containers/App'
import Wrapper from '../components/Wrapper'

import { Provider } from 'react-redux'
import store from '../redux/store'

export default () => (
  <Provider store={store}>
    <Wrapper>
      <App />
    </Wrapper>
  </Provider>
)

