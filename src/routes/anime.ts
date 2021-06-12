import Loadable from "react-loadable";
import { LoadingPage } from "components/Loadings";

const AnimePage = Loadable({
  loader: () => import("pages/anime"),
  loading: LoadingPage,
});

const anime = {
  path: "/anime",
  component: AnimePage,
};

export default anime;
