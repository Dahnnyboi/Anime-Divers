// eslint-disable-next-line @typescript-eslint/no-explicit-any
declare type Any = any;

declare type IMAGE_DIMENSION = {
  width: number;
  height: number;
};

declare interface IMAGE_SIZES {
  large?: IMAGE_DIMENSION;
  medium?: IMAGE_DIMENSION;
  small?: IMAGE_DIMENSION;
  tiny?: IMAGE_DIMENSION;
}

declare interface IMAGE_TYPE {
  POSTER: "poster";
  COVER: "cover";
}

declare interface IMAGE_SIZE {
  LARGE: "large";
  MEDIUM: "medium";
  SMALL: "small";
  TINY: "tiny";
}

interface ROUTES_PROPS {
  match?: Any;
  history?: Any;
  location?: Any;
}

declare interface ROUTES {
  path: string;
  Component?: FC<ROUTES_PROPS>;
  exact?: boolean;
  routes?: Array<ROUTES>;
}

declare interface ACTION {
  type: string;
  payload?: Record<string, unknown> | unknown;
}

declare interface ACTION_FETCH {
  type: string;
  payload?: Record<string, unknown>;
  fetch: Any;
  callback: Any;
}

declare interface LINKS {
  first?: string;
  next?: string;
  prev: string;
  last?: string;
}
