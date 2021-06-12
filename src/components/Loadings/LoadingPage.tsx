import React from "react";
import { Spinner } from "react-bootstrap";

function LoadingPage(): JSX.Element {
  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ width: "100%", height: "96vh" }}
    >
      <Spinner animation="border" variant="primary" />
    </div>
  );
}

export default LoadingPage;
