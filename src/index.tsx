import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { connect, Provider } from 'react-redux';
import createHistory from 'history/createBrowserHistory';
import { ConnectedRouter, push } from 'react-router-redux';
import { Route, Switch, RouteComponentProps, RouteProps } from 'react-router';
import { Redirect } from 'react-router-dom';

// import App from './App';
import configureStore from './store/configureStore';
import registerServiceWorker from './registerServiceWorker';
import { State } from './types';

import './index.css';

const history = createHistory();
const store = configureStore(history);

const authSuccess = () => ({
  type: 'AUTH_SUCCESS'
});

const authFail = () => ({
  type: 'AUTH_FAIL'
});

interface PrivateRouteProps {
  isAuthenticated: boolean;
  component:
    | React.ComponentType<RouteComponentProps<any>> //tslint:disable-line
    | React.ComponentType<any>; //tslint:disable-line
}

class PrivateRouteContainer extends React.Component<
  PrivateRouteProps & RouteProps,
  {}
> {
  render() {
    const { isAuthenticated, component: Component, ...props } = this.props;

    return (
      <Route
        {...props}
        render={routeProps =>
          isAuthenticated ? (
            <Component {...routeProps} />
          ) : (
            <Redirect
              to={{
                pathname: '/login',
                state: { from: routeProps.location }
              }}
            />
          )
        }
      />
    );
  }
}

const PrivateRoute = connect((state: State) => ({
  isAuthenticated: state.auth.isAuthenticated
}))(PrivateRouteContainer);

interface LoginProps extends RouteComponentProps<void> {
  login: () => void;
}

class LoginContainer extends React.Component<LoginProps, {}> {
  render() {
    return <button onClick={this.props.login}>Login Here!</button>;
  }
}

const Login = connect(null, dispatch => ({
  login: () => {
    dispatch(authSuccess());
    dispatch(push('/'));
  }
}))(LoginContainer);

interface HomeProps extends RouteComponentProps<void> {
  logout: () => void;
}

class HomeContainer extends React.Component<HomeProps, {}> {
  componentWillMount() {
    alert('Private home is at: ' + this.props.location.pathname);
  }

  render() {
    return <button onClick={this.props.logout}>Logout Here!</button>;
  }
}

const Home = connect(null, dispatch => ({
  logout: () => {
    dispatch(authFail());
    dispatch(push('/login'));
  }
}))(HomeContainer);

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Switch>
        <Route path="/login" component={Login} />
        <PrivateRoute exact path="/" component={Home} />
      </Switch>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
