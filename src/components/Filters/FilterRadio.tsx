import React, { useState } from "react";
import { useLocation, useHistory } from "react-router-dom";
import { searchToQuery, queryToSearch } from "utils/query";

import { Form, Button } from "react-bootstrap";

interface FilterRadioProps {
  defaultValue?: string;
  source: Record<string, string>;
  title: string;
  name: string;
}

function FilterRadio({
  defaultValue,
  name,
  title,
  source,
}: FilterRadioProps): JSX.Element {
  const [selected, setSelected] = useState(defaultValue || "");

  const history = useHistory();
  const { pathname, search } = useLocation();
  const searchQuery = searchToQuery(search);

  return (
    <div>
      <div className="d-flex align-items-center">
        <small className="flex-grow-1">{title}</small>
        <Button
          size="sm"
          disabled={selected === ""}
          onClick={() => {
            setSelected("");

            delete searchQuery[name];

            if (searchQuery.limit && searchQuery.offset) {
              delete searchQuery.limit;
              delete searchQuery.offset;
            }

            history.push({
              pathname,
              search: queryToSearch(searchQuery),
            });
          }}
        >
          Clear
        </Button>
      </div>
      {Object.keys(source).map((key, index) => {
        return (
          <Form.Check
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
            name={name}
            key={index}
            type="radio"
            checked={selected === source[key]}
            value={key}
            label={source[key]}
          />
        );
      })}
    </div>
  );
}

FilterRadio.defaultProps = {
  defaultValue: "",
};

export default FilterRadio;
