import React from "react";
import { CenterLayout, Layout1 } from "components/Layouts";
import { FilterYear, FilterSelect, FilterRadio } from "components/Filters";
import { searchToQuery } from "utils/query";
import useGetAnimeList from "./useGetAnimeList";

interface IndexProps {
  location: Location;
}

function Index({ location }: IndexProps): JSX.Element {
  const { search } = location;
  const queryObject = searchToQuery(search);
  const { animes, isLoading } = useGetAnimeList(search);
  console.log(animes, isLoading);

  return (
    <CenterLayout className="my-4">
      <Layout1>
        <h5>Filters</h5>
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
      </Layout1>
    </CenterLayout>
  );
}

export default Index;
