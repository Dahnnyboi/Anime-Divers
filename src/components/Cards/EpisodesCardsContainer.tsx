import React from "react";
import { Row, Spinner } from "react-bootstrap";

interface EpisodesCardsContainerProps {
  children: React.ReactNode;
  loading: boolean;
}

function EpisodesCardsContainer({
  children,
  loading,
}: EpisodesCardsContainerProps): JSX.Element {
  return (
    <div>
      {loading ? (
        <div
          className="d-flex justify-content-center align-items-center w-100 "
          style={{ height: "420px" }}
        >
          <Spinner animation="border" variant="primary" />
        </div>
      ) : (
        <Row>{children}</Row>
      )}
    </div>
  );
}

export default EpisodesCardsContainer;
