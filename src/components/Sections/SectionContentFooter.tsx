import React from "react";

interface SectionContentFooterProps {
  children: React.ReactNode;
}

function SectionContentFooter({
  children,
}: SectionContentFooterProps): JSX.Element {
  return <div>{children}</div>;
}

export default SectionContentFooter;
