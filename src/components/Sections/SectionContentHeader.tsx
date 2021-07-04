import React from "react";

interface SectionContentHeaderProps {
  children: React.ReactNode;
}

function SectionContentHeader({
  children,
}: SectionContentHeaderProps): JSX.Element {
  return <div className="d-flex align-items-center mb-3">{children}</div>;
}

export default SectionContentHeader;
