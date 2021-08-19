import React from "react";
import { Col } from "react-bootstrap";

interface EpisodesCardsContentProps {
  children: React.ReactNode;
}

function EpisodesCardsContent({
  children,
}: EpisodesCardsContentProps): JSX.Element {
  return (
    <Col sm={12} md={6}>
      {children}
    </Col>
  );
}

export default EpisodesCardsContent;
