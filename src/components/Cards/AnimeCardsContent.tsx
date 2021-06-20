import React from "react";
import { Col } from "react-bootstrap";

interface AnimeCardsContentProps {
  children: React.ReactNode;
}

function AnimeCardsContent({ children }: AnimeCardsContentProps): JSX.Element {
  return (
    <Col lg={3} md={4} xs={6} className="my-2">
      {children}
    </Col>
  );
}

export default AnimeCardsContent;
