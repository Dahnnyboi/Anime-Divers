"use client";
import React from "react";
import { Col } from "react-bootstrap";

interface AnimeCardsContentProps {
  children: React.ReactNode;
  onList?: true | false;
}

function AnimeCardsContent({
  children,
  onList = false,
}: AnimeCardsContentProps): JSX.Element {
  return (
    <Col
      lg={onList ? 4 : 3}
      md={onList ? 6 : 4}
      xs={onList ? 12 : 6}
      className="my-2"
    >
      {children}
    </Col>
  );
}

export default AnimeCardsContent;
