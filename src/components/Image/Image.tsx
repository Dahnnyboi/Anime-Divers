import React from "react";
import { useImage } from "react-image";

interface imageProps {
  source: string;
  className?: string;
}

function Image({ source, className = "w-100" }: imageProps): JSX.Element {
  const { src } = useImage({
    srcList: source,
  });

  if (source === undefined) {
    return <div className="w-100 bg-primary" style={{ width: "320px" }} />;
  }

  return <img src={src || ""} alt={source} className={className || ""} />;
}

export default Image;
