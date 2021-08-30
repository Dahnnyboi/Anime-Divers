import React from "react";
import RenderRoutes from "utils/RenderRoutes";

interface indexProps {
  routes: Array<ROUTES>;
}

function Index({ routes }: indexProps): JSX.Element {
  return <RenderRoutes routes={routes} />;
}

export default Index;
