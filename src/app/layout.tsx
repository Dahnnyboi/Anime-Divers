import React from "react";
import type { Metadata } from "next";
import { PageLayout } from "components/Layouts";
import Providers from "./providers";
import "styles/styles.scss";
import "styles/react-datetime.scss";

export const metadata: Metadata = {
  title: "Anime Divers",
  description: "Where you can discover the Anime World!",
  icons: { icon: "/anime-divers-logo.ico" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <PageLayout>{children}</PageLayout>
        </Providers>
      </body>
    </html>
  );
}
