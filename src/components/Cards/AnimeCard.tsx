import React, { FunctionComponent, ComponentClass } from "react";
import { truncate } from "lodash";
import { Card } from "react-bootstrap";
import { ImageSuspense, Image } from "components/Image";

interface AnimeCardsProps {
  tag?:
    | string
    | FunctionComponent<{ className: string | undefined }>
    | ComponentClass<{ className: string | undefined }, Any>;
  imageType?:
    | INTERFACE_IMAGE_TYPE["POSTER"]
    | INTERFACE_IMAGE_TYPE["COVER"]
    | null;
  imageSize?:
    | INTERFACE_IMAGE_SIZE["LARGE"]
    | INTERFACE_IMAGE_SIZE["MEDIUM"]
    | INTERFACE_IMAGE_SIZE["SMALL"]
    | INTERFACE_IMAGE_SIZE["TINY"]
    | null;
  image?: string;
  title: string;
  description: string;
  className?: string;
  border?: boolean;
}

function AnimeCards({
  tag,
  image,
  imageType,
  imageSize,
  title,
  description,
  className,
  border,
  ...rest
}: AnimeCardsProps): JSX.Element {
  return React.createElement(
    tag || "div",
    { className, ...rest },
    <Card className={border ? "" : "border-0"}>
      {!!image && (
        <ImageSuspense
          imageType={imageType || null}
          imageSize={imageSize || null}
        >
          <Image source={image} />
        </ImageSuspense>
      )}
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text className="text-muted">
          <small>{truncate(description, { length: 120 })}</small>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

AnimeCards.defaultProps = {
  tag: "div",
  image: false,
  imageType: null,
  imageSize: null,
  className: "",
  border: true,
};

export default AnimeCards;
