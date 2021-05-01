
import ReactDOM from 'react-dom';
import Root from './root';
import reportWebVitals from './reportWebVitals';
import registerServiceWorker from './registerServiceWorker'

ReactDOM.render(
  <Root />,
  document.getElementById('root')
);

reportWebVitals();

registerServiceWorker()