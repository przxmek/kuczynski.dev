import React from 'react';
import { Route, RouteComponentProps } from 'react-router-dom';

interface Props {
  exact?: boolean;
  component: React.ComponentType<RouteComponentProps<any>> | React.ComponentType<any>;
  layout: React.ComponentType;
  path: string;
}

const RouteWithLayout = (props: Props) => {
  const {
    layout: Layout,
    component: Component,
    ...rest
  } = props;

  return (
    <Route
      {...rest}
      render={matchProps => (
        <Layout>
          <Component {...matchProps} />
        </Layout>
      )}
    />
  );
};

export default RouteWithLayout;
