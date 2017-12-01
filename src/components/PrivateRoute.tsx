import * as React from 'react';
import {
  Route,
  RouteComponentProps,
  RouteProps,
  Redirect
} from 'react-router-dom';
import { connect } from 'react-redux';

import { State } from '../reducers';

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

export default PrivateRoute;
