import React from "react";
import { Link } from "react-router-dom";
import { Image, ImageSuspense } from "components/Image";
import wallpaper from "assets/images/not-found-wallpaper.png";
import { Button } from "react-bootstrap";
import styles from "./not-found.module.scss";

function Index(): JSX.Element {
  return (
    <div className={styles["image-container"]}>
      <ImageSuspense>
        <Image
          source={wallpaper}
          className={styles["image-container__image"]}
        />
      </ImageSuspense>
      <div className={styles["image-container__text"]}>
        <h1 className="display-1">404</h1>
        <h4 className="mb-4">Page Not Found</h4>

        <Link to="/">
          <Button variant="primary">Back to Home Page</Button>
        </Link>
      </div>
    </div>
  );
}

export default Index;
