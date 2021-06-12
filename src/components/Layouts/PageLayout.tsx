import React from "react";
import { NavigationBar } from "components/Navigations";
import styles from "./styles.module.scss";

interface PageLayoutProps {
  children: React.ReactNode;
}

function PageLayout({ children }: PageLayoutProps): JSX.Element {
  return (
    <div className={styles.page}>
      <NavigationBar className={styles["page-header"]} />
      <div className={styles["page-content"]}>{children}</div>
    </div>
  );
}

export default PageLayout;
