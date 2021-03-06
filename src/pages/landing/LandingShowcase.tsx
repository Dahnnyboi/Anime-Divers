import React from "react";
import { Link } from "react-router-dom";
import { Image, ImageSuspense } from "components/Image";
import wallpaper from "assets/images/anime-wallpaper.jpg";
import styles from "./landing.module.scss";

function LandingShowcase(): JSX.Element {
  return (
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
        <Link className="btn btn-primary" to="/anime">
          Go to Anime
        </Link>{" "}
        <Link className="btn btn-primary" to="/manga">
          Go to Manga
        </Link>
      </div>
    </div>
  );
}

export default LandingShowcase;
