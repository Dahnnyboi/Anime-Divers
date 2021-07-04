import React from "react";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa";
import { Button } from "react-bootstrap";

function FilterPagination(): JSX.Element {
  return (
    <div>
      <Button variant="primary" size="sm">
        <FaAngleLeft />
        Prev
      </Button>{" "}
      <Button variant="primary" size="sm">
        Next <FaAngleRight />
      </Button>
    </div>
  );
}

export default FilterPagination;
