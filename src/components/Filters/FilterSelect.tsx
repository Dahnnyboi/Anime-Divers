import React, { useState } from "react";
import { useLocation, useHistory } from "react-router-dom";
import { searchToQuery, queryToSearch } from "utils/query";
import { Form, InputGroup, Button } from "react-bootstrap";

interface FilterSelectProps {
  defaultValue?: string;
  name: string;
  title: string;
  source: Record<string, string>;
}

function FilterSelect({
  defaultValue,
  title,
  source,
  name,
}: FilterSelectProps): JSX.Element {
  const [selected, setSelected] = useState(defaultValue || "");

  const history = useHistory();
  const { pathname, search } = useLocation();
  const searchQuery = searchToQuery(search);

  return (
    <div className="mb-2">
      <small>{title}</small>
      <InputGroup>
        <Form.Control
          as="select"
          onChange={(e) => {
            const { value } = e.target;

            setSelected(value);

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
          style={{ backgroundColor: "#fff" }}
          value={selected}
        >
          {Object.keys(source).map((key, index) => {
            return (
              <option key={index} value={key}>
                {source[key]}
              </option>
            );
          })}
          {/* eslint-disable-next-line react/self-closing-comp */}
          <option value=""> </option>
        </Form.Control>
        <InputGroup.Append>
          <Button
            variant="primary"
            onClick={() => {
              delete searchQuery[name];
              setSelected("");

              if (searchQuery.limit && searchQuery.offset) {
                delete searchQuery.limit;
                delete searchQuery.offset;
              }

              history.push({
                pathname,
                search: queryToSearch(searchQuery),
              });
            }}
            disabled={!selected}
          >
            Clear
          </Button>
        </InputGroup.Append>
      </InputGroup>
    </div>
  );
}

FilterSelect.defaultProps = {
  defaultValue: "",
};

export default FilterSelect;
