export type TYPE_IMAGE_DIMENSION = {
  width: number;
  height: number;
};

interface IImageSizes {
  large?: TYPE_IMAGE_DIMENSION;
  medium?: TYPE_IMAGE_DIMENSION;
  small?: TYPE_IMAGE_DIMENSION;
  tiny?: TYPE_IMAGE_DIMENSION;
}

// IMAGE TYPES
export const IMAGE_TYPE_POSTER = "poster";
export const IMAGE_TYPE_COVER = "cover";
export interface INTERFACE_IMAGE_TYPE {
  POSTER: "poster";
  COVER: "cover";
}

// IMAGE SIZES
export const IMAGE_SIZE_LARGE = "large";
export const IMAGE_SIZE_MEDIUM = "medium";
export const IMAGE_SIZE_SMALL = "small";
export const IMAGE_SIZE_TINY = "tiny";

export interface INTERFACE_IMAGE_SIZE {
  LARGE: "large";
  MEDIUM: "medium";
  SMALL: "small";
  TINY: "tiny";
}

export const IMAGE_POSTER: IImageSizes = {
  large: { width: 550, height: 780 },
  medium: { width: 390, height: 554 },
  small: { width: 284, height: 402 },
  tiny: { width: 110, height: 156 },
};

export const IMAGE_COVER: IImageSizes = {
  large: { width: 3360, height: 800 },
  small: { width: 1680, height: 400 },
  tiny: { width: 840, height: 220 },
};

// Routes type checking
export interface ROUTES {
  path: string;
  component: React.ComponentType;
  exact?: boolean;
  routes?: Array<ROUTES>;
}

// Action redux type checking
export interface ACTION {
  type: string;
  payload?: Record<string, unknown>;
}
