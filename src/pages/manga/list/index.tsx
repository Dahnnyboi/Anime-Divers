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
import useGetMangaList from "./useGetMangaList";
import ListFilter from "./ListFilter";
import ListCollection from "./ListCollection";

interface IndexProps {
  location: Location;
}

function Index({ location }: IndexProps): JSX.Element {
  const { search } = location;
  const { mangas, isLoading } = useGetMangaList(search);
  const { data, links } = mangas;

  return (
    <CenterLayout className="my-2">
      <SectionFilter title="Filters">
        <ListFilter search={search} />
      </SectionFilter>
      <SectionContent>
        <SectionContentHeader>
          <SectionContentHeaderTitle>Mangas</SectionContentHeaderTitle>

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
