import React from "react";
import { CenterLayout } from "components/Layouts";
import {
  SectionFilter,
  SectionContent,
  SectionContentHeader,
  SectionContentHeaderTitle,
  SectionContentBody,
  SectionContentFooter,
} from "components/Sections";
import { ModalFilter } from "components/Modals";
import { FilterPagination } from "components/Filters";
import ListFilter from "./ListFilter";
import ListCollection from "./ListCollection";
import useGetAnimeList from "./useGetAnimeList";

interface IndexProps {
  location: Location;
}

function Index({ location }: IndexProps): JSX.Element {
  const { search } = location;
  const { animes, isLoading } = useGetAnimeList(search);
  const { data, links } = animes;

  return (
    <CenterLayout className="my-2">
      <SectionFilter title="Filters">
        <ListFilter search={search} />
      </SectionFilter>
      <SectionContent>
        <SectionContentHeader>
          <SectionContentHeaderTitle>Animes</SectionContentHeaderTitle>

          <ModalFilter>
            <ListFilter search={search} />
          </ModalFilter>
        </SectionContentHeader>
        <SectionContentBody>
          <ListCollection loading={isLoading} data={data} />
        </SectionContentBody>
        <SectionContentFooter>
          <FilterPagination links={links} isLoading={isLoading} />
        </SectionContentFooter>
      </SectionContent>
    </CenterLayout>
  );
}

export default Index;
