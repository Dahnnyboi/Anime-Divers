import React from "react";
import { Spinner } from "react-bootstrap";

function LoadingPage(): JSX.Element {
  return (
    <div className="flex-grow-1 d-flex justify-content-center align-items-center">
      <Spinner animation="border" variant="primary" />
    </div>
  );
}

export default LoadingPage;
