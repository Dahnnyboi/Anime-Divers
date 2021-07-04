import React from "react";
import { PageNavbar, PageFooter } from "components/Pages";
import styles from "./styles.module.scss";

interface PageLayoutProps {
  children: React.ReactNode;
}

function PageLayout({ children }: PageLayoutProps): JSX.Element {
  return (
    <div className={styles.page}>
      <PageNavbar />
      <div className={styles["page-content"]}>{children}</div>
      <PageFooter className={styles["page-footer"]} />
    </div>
  );
}

export default PageLayout;
