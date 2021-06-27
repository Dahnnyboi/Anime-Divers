import React from "react";
import RenderRoutes from "utils/RenderRoutes";

interface indexProps {
  routes: Array<ROUTES>;
}

function Index({ routes }: indexProps): JSX.Element {
  return (
    <div>
      <RenderRoutes routes={routes} />
    </div>
  );
}

export default Index;
