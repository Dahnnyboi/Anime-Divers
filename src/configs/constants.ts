// IMAGE TYPES
export const IMAGE_TYPE_POSTER = "poster";
export const IMAGE_TYPE_COVER = "cover";
export const IMAGE_TYPE_THUMBNAIL = "thumbnail";

// IMAGE SIZES
export const IMAGE_SIZE_LARGE = "large";
export const IMAGE_SIZE_MEDIUM = "medium";
export const IMAGE_SIZE_SMALL = "small";
export const IMAGE_SIZE_TINY = "tiny";
export const IMAGE_SIZE_ORIGINAL = "original";

export const IMAGE_POSTER: IMAGE_SIZES = {
  large: { width: 550, height: 780 },
  medium: { width: 390, height: 554 },
  small: { width: 284, height: 402 },
  tiny: { width: 110, height: 156 },
};

export const IMAGE_COVER: IMAGE_SIZES = {
  large: { width: 3360, height: 800 },
  small: { width: 1680, height: 400 },
  tiny: { width: 840, height: 220 },
};

export const IMAGE_THUMBNAIL: IMAGE_SIZES = {
  original: { width: 600, height: 400 },
};
