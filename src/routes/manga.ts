import Loadable from "react-loadable";
import { LoadingPage } from "components/Loadings";

const MangaPage = Loadable({
  loader: () => import("pages/manga"),
  loading: LoadingPage,
});

const MangaPageList = Loadable({
  loader: () => import("pages/manga/list"),
  loading: LoadingPage,
});

const MangaIdPage = Loadable({
  loader: () => import("pages/manga/view"),
  loading: LoadingPage,
});

const manga = {
  path: "/manga",
  Component: MangaPage,
  routes: [
    {
      exact: true,
      path: "/manga",
      Component: MangaPageList,
    },
    {
      path: "/manga/:mangaId",
      Component: MangaIdPage,
    },
  ],
};

export default manga;
