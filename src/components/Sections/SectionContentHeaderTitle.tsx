import React from "react";

interface SectionContentHeaderTitleProps {
  children: React.ReactNode;
}

function SectionContentHeaderTitle({
  children,
}: SectionContentHeaderTitleProps): JSX.Element {
  return <h5 className="flex-grow-1 m-0">{children}</h5>;
}

export default SectionContentHeaderTitle;
