import Loadable from "react-loadable";
import { LoadingPage } from "components/Loadings";

const LandingComponent = Loadable({
  loader: () => import("pages/not-found"),
  loading: LoadingPage,
});

const notFound = {
  exact: true,
  path: "/not-found",
  Component: LandingComponent,
};

export default notFound;
