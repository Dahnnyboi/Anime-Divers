import React, { useState, useEffect } from "react";
import { useLocation } from "react-router";
import { Button, Modal } from "react-bootstrap";
import { FaFilter } from "react-icons/fa";

interface ModalFilterProps {
  children: React.ReactNode;
}

function ModalFilter({ children }: ModalFilterProps): JSX.Element {
  const { search } = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  function handleOpen(): void {
    setIsOpen(true);
  }

  function handleClose(): void {
    setIsOpen(false);
  }

  useEffect(() => {
    handleClose();
  }, [search]);

  return (
    <div className="d-lg-none">
      <Button size="sm" variant="primary" onClick={handleOpen}>
        <FaFilter />
      </Button>

      <Modal show={isOpen} onHide={handleClose} centered>
        <Modal.Header>
          <Modal.Title>Filter Aime</Modal.Title>
        </Modal.Header>
        <Modal.Body>{children}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default ModalFilter;
