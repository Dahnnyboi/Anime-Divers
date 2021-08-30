import React from "react";
import { Link } from "react-router-dom";
import cx from "classnames";
import { Navbar, Container } from "react-bootstrap";
import { FaAngleDoubleDown } from "react-icons/fa";
import styles from "./styles.module.scss";

interface NavigationBarProps {
  className?: string;
}

function NavigationBar({
  className,
  ...rest
}: NavigationBarProps): JSX.Element {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="primary"
      sticky="top"
      className={cx("border-bottom border-secondary", className)}
      {...rest}
    >
      <Container className="px-4">
        <Navbar.Brand
          className="text-secondary"
          style={{ fontWeight: "bold", letterSpacing: "1px" }}
        >
          <Link to="/">Anime Divers</Link>
        </Navbar.Brand>
        <Navbar.Toggle
          bsPrefix="navbar-toggler border-0"
          aria-controls="responsive-navbar-nav"
        >
          <FaAngleDoubleDown />
        </Navbar.Toggle>
        <Navbar.Collapse>
          <Link
            to="/anime"
            className={cx(
              "ml-auto text-secondary p-2 py-2",
              styles["navigation-item"]
            )}
          >
            Animes
          </Link>
          <Link
            to="/manga"
            className={cx(
              "ml-auto text-secondary p-2 py-2",
              styles["navigation-item"]
            )}
          >
            Mangas
          </Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

NavigationBar.defaultProps = {
  className: "",
};

export default NavigationBar;
