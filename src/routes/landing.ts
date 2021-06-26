import Loadable from "react-loadable";
import { LoadingPage } from "components/Loadings";

const LandingComponent = Loadable({
  loader: () => import("pages/landing"),
  loading: LoadingPage,
});

const landing = {
  exact: true,
  path: "/",
  Component: LandingComponent,
};

export default landing;
