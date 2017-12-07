import * as React from 'react';
import * as ReactDOM from 'react-dom';
import createHistory from 'history/createBrowserHistory';

import configureStore from './store/configureStore';
import registerServiceWorker from './registerServiceWorker';

import App from './App';
import './index.css';

const history = createHistory();
const store = configureStore(history);

ReactDOM.render(
  <App store={store} history={history} />,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
