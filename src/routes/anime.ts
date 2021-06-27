import Loadable from "react-loadable";
import { LoadingPage } from "components/Loadings";

const AnimePage = Loadable({
  loader: () => import("pages/anime"),
  loading: LoadingPage,
});

const AnimePageList = Loadable({
  loader: () => import("pages/anime/list"),
  loading: LoadingPage,
});

const AnimeIdPage = Loadable({
  loader: () => import("pages/anime/view"),
  loading: LoadingPage,
});

const anime = {
  path: "/anime",
  Component: AnimePage,
  routes: [
    {
      exact: true,
      path: "/anime",
      Component: AnimePageList,
    },
    {
      path: "/anime/:animeId",
      Component: AnimeIdPage,
    },
  ],
};

export default anime;
