import React from "react";
import "styles/styles.scss";
import { PageLayout } from "components/Layouts";
import { BrowserRouter as Router } from "react-router-dom";
import RenderRoutes from "utils/RenderRoutes";
import routes from "routes";

function App(): JSX.Element {
  return (
    <Router>
      <PageLayout>
        <RenderRoutes routes={routes} />
      </PageLayout>
    </Router>
  );
}

export default App;
