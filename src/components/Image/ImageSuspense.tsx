import React, { Suspense } from "react";
import {
  IMAGE_TYPE_POSTER,
  IMAGE_POSTER,
  IMAGE_COVER,
} from "configs/constants";

interface ImageSuspenseProps {
  children: React.ReactNode;
  imageType?: IMAGE_TYPE["POSTER"] | IMAGE_TYPE["COVER"] | null;
  imageSize?:
    | IMAGE_SIZE["LARGE"]
    | IMAGE_SIZE["MEDIUM"]
    | IMAGE_SIZE["SMALL"]
    | IMAGE_SIZE["TINY"]
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
    const data =
      imageType === IMAGE_TYPE_POSTER
        ? IMAGE_POSTER[imageSize]
        : IMAGE_COVER[imageSize];
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
