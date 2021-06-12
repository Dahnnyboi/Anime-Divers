import Loadable from "react-loadable";
import { LoadingPage } from "components/Loadings";

const LandingComponent = Loadable({
  loader: () => import("pages/landing"),
  loading: LoadingPage,
});

const landing = {
  exact: true,
  path: "/",
  component: LandingComponent,
};

export default landing;
