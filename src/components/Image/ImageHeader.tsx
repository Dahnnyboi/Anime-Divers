import React from "react";
import {
  IMAGE_SIZE_SMALL,
  IMAGE_SIZE_TINY,
  IMAGE_TYPE_COVER,
  IMAGE_TYPE_POSTER,
} from "configs/constants";
import cx from "classnames";
import ImageSuspense from "./ImageSuspense";
import Image from "./Image";
import styles from "./styles.module.scss";

interface ImageHeaderProps {
  banner: string;
  logo: string;
}

function ImageHeader({ banner, logo }: ImageHeaderProps): JSX.Element {
  return (
    <div className={styles["image-header"]}>
      <div className={styles["image-header__container"]}>
        <ImageSuspense
          imageType={IMAGE_TYPE_COVER}
          imageSize={IMAGE_SIZE_SMALL}
        >
          {banner ? (
            <Image source={banner} className="rounded w-100" />
          ) : (
            <div
              className="w-100 rounded w-100 bg-primary"
              style={{ height: "164px" }}
            />
          )}
        </ImageSuspense>

        <div className={cx(styles["image-header__logo"])}>
          <ImageSuspense
            imageType={IMAGE_TYPE_POSTER}
            imageSize={IMAGE_SIZE_TINY}
          >
            <Image
              source={logo}
              className={cx(styles["image-header__logo__image"], "w-100 h-100")}
            />
          </ImageSuspense>
        </div>
      </div>
    </div>
  );
}

export default ImageHeader;
