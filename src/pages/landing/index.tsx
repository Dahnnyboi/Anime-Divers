import React from "react";
import { Image, ImageSuspense } from "components/Image";
import wallpaper from "assets/images/anime-wallpaper.jpg";
import { Button } from "react-bootstrap";
import { CenterLayout } from "components/Layouts";
import styles from "./landing.module.scss";

function Index(): JSX.Element {
  return (
    <div>
      <div className={styles["image-container"]}>
        <ImageSuspense>
          <Image
            source={wallpaper}
            className={styles["image-container__image"]}
          />
        </ImageSuspense>
        <div className={styles["image-container__text"]}>
          <h1>Anime Divers</h1>
          <hr className="border border-white" />
          <p>
            Modern anime discovery platform that helps you track the anime
            you&apos;re watching, discover new anime and socialize with other
            fans.
          </p>
          <Button variant="primary">Go to Anime</Button>{" "}
          <Button variant="outline-primary">Go to Anime</Button>
        </div>
      </div>

      <CenterLayout className="py-4">
        <h4>Trending Anime</h4>
      </CenterLayout>
    </div>
  );
}

export default Index;
