import React, { Suspense } from "react";
import {
  IMAGE_TYPE_POSTER,
  IMAGE_POSTER,
  IMAGE_COVER,
  IMAGE_TYPE_COVER,
  IMAGE_THUMBNAIL,
} from "configs/constants";

interface ImageSuspenseProps {
  children: React.ReactNode;
  imageType?:
    | IMAGE_TYPE["POSTER"]
    | IMAGE_TYPE["COVER"]
    | IMAGE_TYPE["THUMBNAIL"]
    | null;
  imageSize?:
    | IMAGE_SIZE["LARGE"]
    | IMAGE_SIZE["MEDIUM"]
    | IMAGE_SIZE["SMALL"]
    | IMAGE_SIZE["TINY"]
    | IMAGE_SIZE["ORIGINAL"]
    | null;
  defaultHeight?: number;
}

function ImageSuspense({
  children,
  imageType,
  imageSize,
  defaultHeight,
}: ImageSuspenseProps): JSX.Element {
  let height: number | undefined;

  if (imageType && imageSize) {
    let data;
    switch (imageType) {
      case IMAGE_TYPE_POSTER:
        data = IMAGE_POSTER[imageSize];
        break;
      case IMAGE_TYPE_COVER:
        data = IMAGE_COVER[imageSize];
        break;
      default:
        data = IMAGE_THUMBNAIL[imageSize];
    }
    height = data?.height;
  } else {
    height = defaultHeight;
  }

  return (
    <Suspense
      fallback={
        <div className="bg-primary w-100" style={{ height: `${height}px` }} />
      }
    >
      {children}
    </Suspense>
  );
}

ImageSuspense.defaultProps = {
  imageType: null,
  imageSize: null,
  defaultHeight: 320,
};

export default ImageSuspense;
