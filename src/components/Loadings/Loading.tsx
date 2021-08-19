import React from "react";
import { Spinner } from "react-bootstrap";
import styles from "./styles.module.scss";

function Loading(): JSX.Element {
  return (
    <div className={styles.loading}>
      <Spinner
        animation="border"
        variant="primary"
        className={styles["loading-spinner"]}
      />
    </div>
  );
}

export default Loading;
