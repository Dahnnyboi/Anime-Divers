import React from "react";
import { Card } from "react-bootstrap";
import {
  IMAGE_TYPE_THUMBNAIL,
  IMAGE_SIZE_ORIGINAL,
  IMAGE_THUMBNAIL,
} from "configs/constants";
import { truncate } from "lodash";
import { ImageSuspense, Image } from "components/Image";
import { labelDate } from "utils/dates";

interface EpisodeCardProps {
  image?: string;
  title: string;
  episodeNumber: number;
  date: string;
  description: string;
  className?: string;
  border?: boolean;
  onClick?: Function;
  styles?: Record<string, string>;
  header?: string;
}

function EpisodesCard({
  image,
  title,
  episodeNumber,
  date,
  description,
  className,
  border,
  onClick,
  styles,
  header,
  ...rest
}: EpisodeCardProps): JSX.Element {
  return React.createElement(
    "div",
    { className, onClick, ...rest },
    <Card style={styles} className={border ? "" : "border-0"}>
      {image ? (
        <ImageSuspense
          imageType={IMAGE_TYPE_THUMBNAIL}
          imageSize={IMAGE_SIZE_ORIGINAL}
        >
          <Image source={image} />
        </ImageSuspense>
      ) : (
        <div
          className="w-100 rounded w-100 bg-primary"
          style={{ height: `${IMAGE_THUMBNAIL?.original?.height}px` }}
        />
      )}

      <Card.Body style={{ minHeight: "180px" }}>
        <Card.Title>{title}</Card.Title>
        <p className="text-dark mb-0">
          {header}: {episodeNumber}
        </p>
        <p className="text-dark">{labelDate(date)}</p>
        <Card.Text className="text-muted">
          <small>{truncate(description, { length: 120 })}</small>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

EpisodesCard.defaultProps = {
  image: false,
  className: "",
  border: true,
  styles: {},
  header: "Episode",
  onClick: () => {},
};

export default EpisodesCard;
