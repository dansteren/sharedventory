import * as React from 'react';
import {
  Route,
  RouteComponentProps,
  RouteProps,
  Redirect
} from 'react-router-dom';
import { connect } from 'react-redux';

import { AppState } from '../reducers';

interface StateProps {
  isAuthenticated: boolean;
}

interface PrivateRouteProps {
  component:
    | React.ComponentType<RouteComponentProps<any>> //tslint:disable-line
    | React.ComponentType<any>; //tslint:disable-line
}

type Props = StateProps & PrivateRouteProps & RouteProps;

class PrivateRouteContainer extends React.Component<Props, {}> {
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

const mapStateToProps = (state: AppState): StateProps => ({
  isAuthenticated: state.auth.id ? true : false
});

const PrivateRoute = connect(mapStateToProps)(PrivateRouteContainer);

export default PrivateRoute;
