import React from "react";
import { searchToQuery } from "utils/query";
import { FilterYear, FilterSelect, FilterRadio } from "components/Filters";

interface ListFilterProps {
  search: string;
}

function ListFilter({ search }: ListFilterProps): JSX.Element {
  const queryObject = searchToQuery(search);

  return (
    <>
      <FilterYear defaultValue={queryObject.seasonYear} name="seasonYear" />
      <FilterSelect
        title="Filter By Season"
        defaultValue={queryObject.season}
        name="season"
        source={{
          winter: "Winter",
          spring: "Spring",
          summer: "Summer",
          fall: "Fall",
        }}
      />
      <FilterRadio
        title="Filter By Age Rating"
        name="ageRating"
        source={{ G: "G", PG: "PG", R: "R", R18: "R18" }}
      />
    </>
  );
}

export default ListFilter;
