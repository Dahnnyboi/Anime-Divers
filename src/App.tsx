import React from "react";
import "styles/styles.scss";

import { Provider } from "react-redux";
import { PageLayout } from "components/Layouts";
import { BrowserRouter as Router } from "react-router-dom";
import RenderRoutes from "utils/RenderRoutes";
import routes from "routes";
import { store } from "redux/store";

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <Router>
        <PageLayout>
          <RenderRoutes routes={routes} />
        </PageLayout>
      </Router>
    </Provider>
  );
}

export default App;
