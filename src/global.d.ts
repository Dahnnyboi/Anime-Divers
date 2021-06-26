// eslint-disable-next-line @typescript-eslint/no-explicit-any
declare type Any = any;

declare type TYPE_IMAGE_DIMENSION = {
  width: number;
  height: number;
};

declare interface INTERFACE_IMAGE_TYPE {
  POSTER: "poster";
  COVER: "cover";
}

declare type TYPE_IMAGE_DIMENSION = {
  width: number;
  height: number;
};

declare interface IImageSizes {
  large?: TYPE_IMAGE_DIMENSION;
  medium?: TYPE_IMAGE_DIMENSION;
  small?: TYPE_IMAGE_DIMENSION;
  tiny?: TYPE_IMAGE_DIMENSION;
}

declare interface INTERFACE_IMAGE_TYPE {
  POSTER: "poster";
  COVER: "cover";
}

declare interface INTERFACE_IMAGE_SIZE {
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
  Component: FC<ROUTES_PROPS>;
  exact?: boolean;
  routes?: Array<ROUTES>;
}

declare interface ACTION {
  type: string;
  payload?: Record<string, unknown>;
}

declare interface ACTION_FETCH {
  type: string;
  payload?: Record<string, unknown>;
  fetch: Any;
  callback: Any;
}
