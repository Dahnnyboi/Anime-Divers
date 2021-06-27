import landing from "./landing";
import anime from "./anime";
import notFound from "./not-found";

const routes: Array<ROUTES> = [
  {
    ...landing,
  },
  {
    ...anime,
  },
  {
    ...notFound,
  },
];

export default routes;
