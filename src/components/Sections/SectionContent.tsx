import React from "react";
import { Col } from "react-bootstrap";

interface ContentSectionProps {
  children: React.ReactNode;
}

function ContentSection({ children }: ContentSectionProps): JSX.Element {
  return (
    <Col lg={9} md={12}>
      <div className="d-flex flex-column">{children}</div>
    </Col>
  );
}

export default ContentSection;
