import * as React from 'react';
import { Store } from 'redux';
import { Provider } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { ConnectedRouter } from 'react-router-redux';
import { Route, Switch } from 'react-router-dom';
import { History } from 'history';

import { Inventory, Login, NotFound } from './routes';
import { PrivateRoute } from './components';
import { AppState } from './reducers';
import { theme } from './theme';

interface Props {
  store: Store<AppState>;
  history: History;
}

class App extends React.Component<Props, {}> {
  render() {
    const { store, history } = this.props;
    return (
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
      </Provider>
    );
  }
}

export default App;
