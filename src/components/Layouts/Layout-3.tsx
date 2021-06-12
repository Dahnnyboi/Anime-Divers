import React from "react";
import { Col } from "react-bootstrap";

interface Layout3Props {
  children: React.ReactNode;
}

function Layout3({ children }: Layout3Props): JSX.Element {
  return (
    <Col lg={8} md={12}>
      {children}
    </Col>
  );
}

export default Layout3;
