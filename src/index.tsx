import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import createHistory from 'history/createBrowserHistory';
import { ConnectedRouter } from 'react-router-redux';
import { Route, Switch } from 'react-router';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import { Inventory, Login, NotFound } from './routes';
import configureStore from './store/configureStore';
import registerServiceWorker from './registerServiceWorker';
import { PrivateRoute } from './components';
import { theme } from './theme';

import './index.css';

const history = createHistory();
const store = configureStore(history);

ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider muiTheme={theme}>
      <ConnectedRouter history={history}>
        <Switch>
          <Route path="/login" component={Login} />
          <PrivateRoute exact path="/" component={Inventory} />
          <Route component={NotFound} />
        </Switch>
      </ConnectedRouter>
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
