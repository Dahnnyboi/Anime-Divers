import React from "react";
import {
  FaAngleDoubleLeft,
  FaAngleRight,
  FaAngleLeft,
  FaAngleDoubleRight,
} from "react-icons/fa";
import { useLocation, useHistory } from "react-router-dom";
import {
  searchToQuery,
  queryToSearch,
  getQueryStringFromURL,
  getParameterByName,
} from "utils/query";

import { Button } from "react-bootstrap";

interface FilterPaginationProps {
  links: LINKS;
  isLoading: boolean;
}

function FilterPagination({
  links,
  isLoading,
}: FilterPaginationProps): JSX.Element {
  const { first, prev, next, last } = links || {};
  const history = useHistory();
  const { pathname, search } = useLocation();
  const searchQuery = searchToQuery(search);

  function handleFirst(): void {
    if (first && searchQuery.limit && searchQuery.offset) {
      delete searchQuery.limit;
      delete searchQuery.offset;

      history.push({
        pathname,
        search: queryToSearch(searchQuery),
      });
    }
  }

  function handlePrev(): void {
    if (prev) {
      const prevLink = getQueryStringFromURL(prev);
      const prevLimit = getParameterByName("page[limit]", prevLink);
      const prevOffset = getParameterByName("page[offset]", prevLink);

      searchQuery.limit = prevLimit;
      searchQuery.offset = prevOffset;

      history.push({
        pathname,
        search: queryToSearch(searchQuery),
      });
    }
  }

  function handleNext(): void {
    if (next) {
      const nextLink = getQueryStringFromURL(next);
      const nextLimit = getParameterByName("page[limit]", nextLink);
      const nextOffset = getParameterByName("page[offset]", nextLink);

      searchQuery.limit = nextLimit;
      searchQuery.offset = nextOffset;

      history.push({
        pathname,
        search: queryToSearch(searchQuery),
      });
    }
  }

  function handleLast(): void {
    if (last) {
      const lastLink = getQueryStringFromURL(last);
      const lastLimit = getParameterByName("page[limit]", lastLink);
      const lastOffset = getParameterByName("page[offset]", lastLink);

      searchQuery.limit = lastLimit;
      searchQuery.offset = lastOffset;

      history.push({
        pathname,
        search: queryToSearch(searchQuery),
      });
    }
  }

  return (
    <div>
      <Button
        variant="primary"
        size="sm"
        disabled={isLoading || !prev}
        onClick={handleFirst}
      >
        <FaAngleDoubleLeft /> First
      </Button>{" "}
      <Button
        variant="primary"
        size="sm"
        disabled={isLoading || !prev}
        onClick={handlePrev}
      >
        <FaAngleLeft />
        Prev
      </Button>{" "}
      <Button
        variant="primary"
        size="sm"
        disabled={isLoading || !next}
        onClick={handleNext}
      >
        Next <FaAngleRight />
      </Button>{" "}
      <Button
        variant="primary"
        size="sm"
        disabled={isLoading || !next}
        onClick={handleLast}
      >
        <FaAngleDoubleRight /> Last
      </Button>
    </div>
  );
}

export default FilterPagination;
