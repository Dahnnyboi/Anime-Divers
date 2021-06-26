import Loadable from "react-loadable";
import { LoadingPage } from "components/Loadings";

const AnimePage = Loadable({
  loader: () => import("pages/anime"),
  loading: LoadingPage,
});

const anime = {
  path: "/anime",
  Component: AnimePage,
};

export default anime;
