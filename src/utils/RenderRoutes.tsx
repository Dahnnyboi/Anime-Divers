import React from "react";
import { Switch, Route, withRouter } from "react-router-dom";

interface renderRoutesProps {
  routes: Array<ROUTES>;
  match: Any;
  history: Any;
  location: Any;
}

function RenderRoutes({
  routes,
  match,
  history,
  location,
}: renderRoutesProps): JSX.Element {
  return (
    <Switch>
      {routes.map((route, index) => {
        const { path, Component, exact } = route;
        return (
          <Route
            key={index}
            exact={exact || false}
            path={path}
            render={(props) => {
              return (
                <Component
                  {...props}
                  match={match}
                  history={history}
                  location={location}
                />
              );
            }}
          />
        );
      })}
    </Switch>
  );
}

export default withRouter(RenderRoutes);
