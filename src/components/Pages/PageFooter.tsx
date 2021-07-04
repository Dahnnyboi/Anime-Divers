import React from "react";
import cx from "classnames";
import { CenterLayout } from "components/Layouts";

interface FooterProps {
  className?: string;
}

function Footer({ className }: FooterProps): JSX.Element {
  return (
    <div className={cx("py-3 bg-primary", className)}>
      <CenterLayout>
        <h6>Anime Divers - Dahn Registrado</h6>
        <small>
          All datas are provided by{" "}
          <a
            href="https://kitsu.docs.apiary.io/#"
            className="text-dark font-italic"
          >
            Kitsu API
          </a>
        </small>
      </CenterLayout>
    </div>
  );
}

Footer.defaultProps = {
  className: "",
};

export default Footer;
