import React from "react";
import { ROUTES } from "configs/constants";
import { Switch, Route } from "react-router-dom";

interface renderRoutesProps {
  routes: Array<ROUTES>;
}
function RenderRoutes({ routes }: renderRoutesProps): JSX.Element {
  return (
    <Switch>
      {routes.map((route, index) => {
        const { path, component, exact } = route;
        return (
          <Route
            key={index}
            exact={exact || false}
            path={path}
            component={component}
          />
        );
      })}
    </Switch>
  );
}

export default RenderRoutes;
