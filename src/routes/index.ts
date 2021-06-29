import landing from "./landing";
import anime from "./anime";
import manga from "./manga";
import notFound from "./not-found";

const routes: Array<ROUTES> = [
  {
    ...landing,
  },
  {
    ...anime,
  },
  {
    ...manga,
  },
  {
    ...notFound,
  },
];

export default routes;
