import React from "react";
import { Container, Row } from "react-bootstrap";

interface CenterLayoutProps {
  children: React.ReactNode;
}

function CenterLayout({ children }: CenterLayoutProps): JSX.Element {
  return (
    <Container fluid="md">
      <Row>{children}</Row>
    </Container>
  );
}

export default CenterLayout;
