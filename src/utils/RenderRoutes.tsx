import React from "react";
import { Switch, Route, withRouter, Redirect } from "react-router-dom";
import { Helmet } from "react-helmet";
import { capitalize } from "lodash";

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
              const { pathname } = location;
              const firstUrl = pathname.substring(1).split("/")[0];

              return (
                <>
                  <Helmet>
                    <meta charSet="utf-8" />
                    <title>
                      {firstUrl
                        ? "Anime Divers - ".concat(capitalize(firstUrl))
                        : "Anime Divers"}
                    </title>
                    <meta
                      name="description"
                      content="Where you can discover the Anime World!"
                    />
                  </Helmet>
                  <Component
                    {...props}
                    match={match}
                    history={history}
                    location={location}
                  />
                </>
              );
            }}
          />
        );
      })}

      <Route path="*">
        <Redirect to="/not-found" />
      </Route>
    </Switch>
  );
}

export default withRouter(RenderRoutes);
