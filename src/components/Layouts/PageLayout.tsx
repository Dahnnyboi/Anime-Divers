"use client";
import React from "react";
import dynamic from "next/dynamic";
import styles from "./styles.module.scss";

// PageNavbar and PageFooter use react-router-dom Link which requires a Router
// context and cannot SSR. Loaded client-only until Batch 3 migrates to next/link.
const PageNavbar = dynamic(() => import("components/Pages/PageNavbar"), {
  ssr: false,
});
const PageFooter = dynamic(() => import("components/Pages/PageFooter"), {
  ssr: false,
});

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
