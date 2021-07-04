import React from "react";
import { Col } from "react-bootstrap";

interface FilterSectionProps {
  title: string;
  children: React.ReactNode;
}

function FilterSection({ title, children }: FilterSectionProps): JSX.Element {
  return (
    <Col lg={3} className="d-none d-lg-block">
      <div className="d-sticky">
        <h5>{title}</h5>
        {children}
      </div>
    </Col>
  );
}

export default FilterSection;
