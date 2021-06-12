import React from "react";
import { Col } from "react-bootstrap";

interface Layout1Props {
  children: React.ReactNode;
}

function Layout1({ children }: Layout1Props): JSX.Element {
  return (
    <Col lg={4} md={false}>
      {children}
    </Col>
  );
}

export default Layout1;
