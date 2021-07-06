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
import useGetAnimeList from "./useGetAnimeList";

interface IndexProps {
  location: Location;
}

function Index({ location }: IndexProps): JSX.Element {
  const { search } = location;
  const { animes, isLoading } = useGetAnimeList(search);
  const { links } = animes;

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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
          doloribus, odio pariatur natus aliquid dolore dicta nesciunt officia
          ea, cum explicabo saepe culpa eligendi laboriosam corrupti provident
          alias perferendis. Esse fugiat aspernatur unde, reprehenderit magni,
          praesentium officiis cupiditate distinctio inventore totam libero
          repellendus incidunt dolor porro enim. Dolor est itaque, ad esse,
          illum animi totam expedita vel cum odio in deleniti maiores sit!
          Dolorem reiciendis deleniti enim nam quisquam facere dolor quaerat
          incidunt. Nam vel, molestias officia placeat tenetur impedit omnis
          quasi inventore tempora beatae distinctio deserunt sint error, qui
          perferendis voluptatem maxime voluptatibus corrupti assumenda! Nulla
          unde tempora eveniet consequuntur ab vitae, assumenda ullam
          dignissimos perferendis maiores nobis temporibus ipsum quod fugit non
          nostrum. Commodi harum sunt labore possimus.
        </SectionContentBody>
        <SectionContentFooter>
          <FilterPagination links={links} isLoading={isLoading} />
        </SectionContentFooter>
      </SectionContent>
    </CenterLayout>
  );
}

export default Index;
