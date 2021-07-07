import React, { useRef } from "react";
import { useLocation, useHistory } from "react-router-dom";
import { searchToQuery, queryToSearch } from "utils/query";
import { Form, InputGroup, Button } from "react-bootstrap";

interface FilterInputProps {
  defaultValue?: string;
  name: string;
  title: string;
  type: string;
}

function FilterInput({
  defaultValue,
  title,
  name,
  type,
  ...rest
}: FilterInputProps): JSX.Element {
  const inputRef: Any = useRef(null);

  const history = useHistory();
  const { pathname, search } = useLocation();
  const searchQuery = searchToQuery(search);

  return (
    <div className="mb-2">
      <small>{title}</small>
      <InputGroup>
        <Form.Control
          ref={inputRef}
          type={type}
          name={name}
          min={1}
          defaultValue={defaultValue}
          onChange={(e) => {
            const { value } = e.target;

            if (value) {
              searchQuery[name] = value;

              if (searchQuery.limit && searchQuery.offset) {
                delete searchQuery.limit;
                delete searchQuery.offset;
              }
            } else {
              delete searchQuery[name];
            }
            history.push({
              pathname,
              search: queryToSearch(searchQuery),
            });
          }}
          {...rest}
        />
        <InputGroup.Append>
          <Button
            variant="primary"
            onClick={() => {
              if (inputRef.current) {
                inputRef.current.value = "";
                delete searchQuery[name];

                if (searchQuery.limit && searchQuery.offset) {
                  delete searchQuery.limit;
                  delete searchQuery.offset;
                }

                history.push({
                  pathname,
                  search: queryToSearch(searchQuery),
                });
              }
            }}
          >
            Clear
          </Button>
        </InputGroup.Append>
      </InputGroup>
    </div>
  );
}

FilterInput.defaultProps = {
  defaultValue: "",
};

export default FilterInput;
