import React from 'react';
import {
  RouteProps as ReactRouteProps,
  Route as ReactRoute,
  Redirect,
} from 'react-router-dom';

import { useAuth } from '../hooks/useAuth';

interface RouteProps extends ReactRouteProps {
  isPublic?: boolean;
  isPrivate?: boolean;
  component: React.ComponentType;
}

const Route: React.FC<RouteProps> = ({
  isPublic = false,
  isPrivate = false,
  component: Component,
  ...rest
}) => {
  const { user } = useAuth();

  return (
    <ReactRoute
      {...rest}
      render={() => {
        return isPrivate === !!user || isPublic === !user ? (
          <Component />
        ) : (
          <Redirect to={{ pathname: isPrivate ? '/signin' : '/home' }} />
        );
      }}
    />
  );
};

export default Route;
