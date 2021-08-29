import React from "react";
import { ImageHeader } from "components/Image";
import { IoStarSharp } from "react-icons/io5";
import { MdFavorite } from "react-icons/md";

interface AnimeImageProps {
  coverImage: Record<string, string>;
  posterImage: Record<string, string>;
  titles: Record<string, string>;
  averageRating: string;
  favoritesCount: number;
  status: string;
}

function ViewHeader({
  coverImage,
  posterImage,
  titles,
  averageRating,
  favoritesCount,
  status,
}: AnimeImageProps): JSX.Element {
  const { small, medium } = coverImage || {};
  const { tiny } = posterImage;
  const { en_jp, en_us, ja_jp } = titles;

  return (
    <div className="text-center">
      <ImageHeader banner={small || medium} logo={tiny} />
      <h3>{en_us || en_jp || ja_jp}</h3>
      <ul className="p-0 d-block">
        <li className="d-inline">
          Rating: <span style={{ fontWeight: "bold" }}>{averageRating}</span>{" "}
          <IoStarSharp className="text-primary mb-2" />
        </li>
        <li className="d-inline p-2">
          Favorites:{" "}
          <span style={{ fontWeight: "bold" }}>{favoritesCount}</span>{" "}
          <MdFavorite className="text-primary mb-2" />
        </li>
        <li className="d-inline">
          Status:{" "}
          <span style={{ fontWeight: "bold", textTransform: "capitalize" }}>
            {status}
          </span>{" "}
        </li>
      </ul>
    </div>
  );
}

export default ViewHeader;
