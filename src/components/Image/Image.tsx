import React from "react";
import { useImage } from "react-image";

interface imageProps {
  source: string;
  className?: string;
}

function Image({ source, className }: imageProps): JSX.Element {
  const { src } = useImage({
    srcList: source,
  });

  return <img src={src} alt={source} className={className} />;
}

Image.defaultProps = {
  className: "w-100",
};

export default Image;
