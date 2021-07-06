import React from "react";
import { InputGroup, FormControl, Button } from "react-bootstrap";
import { useLocation, useHistory } from "react-router-dom";
import Datetime from "react-datetime";
import moment from "moment";
import { searchToQuery, queryToSearch } from "utils/query";

interface FilterYearProps {
  defaultValue?: string;
  name: string;
}

function FilterYear({ defaultValue, name }: FilterYearProps): JSX.Element {
  const history = useHistory();
  const { pathname, search } = useLocation();
  const searchQuery = searchToQuery(search);

  function renderInput(props: Any) {
    return (
      <div className="mb-2">
        <small className="d-block">Filter By Year</small>
        <InputGroup>
          <FormControl placeholder="Year" aria-label="Year" {...props} />
          <InputGroup.Append>
            <Button
              variant="primary"
              onClick={() => {
                delete searchQuery[name];

                if (searchQuery.limit && searchQuery.offset) {
                  delete searchQuery.limit;
                  delete searchQuery.offset;
                }

                props.onChange({ target: { value: "" } });
              }}
              disabled={!props.value}
            >
              Clear
            </Button>
          </InputGroup.Append>
        </InputGroup>
      </div>
    );
  }

  return (
    <Datetime
      onChange={(value) => {
        if (value) {
          const year = moment(value).format("YYYY");

          searchQuery[name] = year;

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
      initialValue={moment(defaultValue) || ""}
      dateFormat="YYYY"
      timeFormat={false}
      closeOnSelect
      renderInput={renderInput}
    />
  );
}

FilterYear.defaultProps = {
  defaultValue: "",
};

export default FilterYear;
