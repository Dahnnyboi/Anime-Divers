import React from "react";

interface SectionContentBodyProps {
  children: React.ReactNode;
}

function SectionContentBody({
  children,
}: SectionContentBodyProps): JSX.Element {
  return <div style={{ minHeight: "75vh" }}>{children}</div>;
}

export default SectionContentBody;
