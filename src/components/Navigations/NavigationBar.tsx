import React from "react";
import cx from "classnames";
import { Navbar, Nav, Container } from "react-bootstrap";
import { FaAngleDoubleDown } from "react-icons/fa";

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
          Anime Divers
        </Navbar.Brand>
        <Navbar.Toggle
          bsPrefix="navbar-toggler border-0"
          aria-controls="responsive-navbar-nav"
        >
          <FaAngleDoubleDown />
        </Navbar.Toggle>
        <Navbar.Collapse>
          <Nav.Link className="ml-auto text-secondary p-0 py-2">
            Animes
          </Nav.Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

NavigationBar.defaultProps = {
  className: "",
};

export default NavigationBar;
