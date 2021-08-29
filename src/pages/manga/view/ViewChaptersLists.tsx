import React from "react";
import {
  EpisodesCardsContainer,
  EpisodesCardsContent,
  EpisodeCard,
} from "components/Cards";
import { Card } from "react-bootstrap";
import { isEmpty } from "lodash";
import { FilterPagination } from "components/Filters";
import useGetSingleChapter from "./useGetSingleChapter";
import ViewChapterModal from "./ViewChapterModal";

interface ViewChaptersListProps {
  chapters: Array<Any>;
  isLoading: boolean;
  links: LINKS;
}

function ViewChaptersList({
  chapters,
  isLoading,
  links,
}: ViewChaptersListProps): JSX.Element {
  const {
    isOpen,
    toggle,
    chapter,
    isLoading: chapterLoading,
  } = useGetSingleChapter();

  return (
    <Card className="w-100 p-3 mt-3">
      <Card.Body>
        <Card.Title className="mb-2">Manga Chapters</Card.Title>

        <EpisodesCardsContainer loading={isLoading}>
          {!isEmpty(chapters) &&
            chapters.map((data: Any, index: number) => {
              const { id, attributes } = data;
              const {
                canonicalTitle,
                description,
                thumbnail,
                number,
                relativeNumber,
                created_at,
              } = attributes;
              const { original } = thumbnail || {};

              return (
                <EpisodesCardsContent key={index}>
                  <EpisodeCard
                    header="Chapter"
                    image={original || ""}
                    episodeNumber={relativeNumber || number}
                    title={canonicalTitle}
                    date={created_at}
                    description={description}
                    className="my-2 pe-auto"
                    styles={{ cursor: "pointer" }}
                    onClick={() => toggle(id)}
                  />
                </EpisodesCardsContent>
              );
            })}

          <FilterPagination
            links={links}
            isLoading={isLoading}
            idToScroll="scroll"
          />
        </EpisodesCardsContainer>
      </Card.Body>
      <ViewChapterModal
        isOpen={isOpen}
        toggle={toggle}
        isLoading={chapterLoading}
        chapter={chapter}
      />
    </Card>
  );
}

export default ViewChaptersList;
