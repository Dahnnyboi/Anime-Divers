import React from "react";
import { searchToQuery } from "utils/query";
import { FilterInput } from "components/Filters";

interface ListFilterProps {
  search: string;
}

function ListFilter({ search }: ListFilterProps): JSX.Element {
  const queryObject = searchToQuery(search);

  return (
    <>
      <FilterInput
        title="Filter By Chapter Count"
        type="number"
        name="chapterCount"
        defaultValue={queryObject.chapterCount}
      />
    </>
  );
}

export default ListFilter;
