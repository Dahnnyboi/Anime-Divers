import React from "react";
import { Container, Row } from "react-bootstrap";

interface CenterLayoutProps {
  children: React.ReactNode;
  className?: string;
}

function CenterLayout({ children, className }: CenterLayoutProps): JSX.Element {
  return (
    <Container fluid="md" className={className}>
      <Row>{children}</Row>
    </Container>
  );
}

CenterLayout.defaultProps = {
  className: "",
};

export default CenterLayout;
