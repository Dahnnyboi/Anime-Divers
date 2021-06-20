import React from "react";
import { NavigationBar, Footer } from "components/Pages";
import styles from "./styles.module.scss";

interface PageLayoutProps {
  children: React.ReactNode;
}

function PageLayout({ children }: PageLayoutProps): JSX.Element {
  return (
    <div className={styles.page}>
      <NavigationBar />
      <div className={styles["page-content"]}>{children}</div>
      <Footer className={styles["page-footer"]} />
    </div>
  );
}

export default PageLayout;
