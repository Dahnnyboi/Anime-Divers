import React from "react";
import {
  EpisodesCardsContainer,
  EpisodesCardsContent,
  EpisodeCard,
} from "components/Cards";
import { Card } from "react-bootstrap";
import { isEmpty } from "lodash";
import { FilterPagination } from "components/Filters";

interface ViewEpisodesListsProps {
  episodes: Array<Any>;
  isLoading: boolean;
  links: LINKS;
}

function ViewEpisodesLists({
  episodes,
  isLoading,
  links,
}: ViewEpisodesListsProps): JSX.Element {
  return (
    <Card className="w-100 p-3 mt-3">
      <Card.Body>
        <Card.Title className="mb-2">Anime Episodes</Card.Title>

        <EpisodesCardsContainer loading={isLoading}>
          {!isEmpty(episodes) &&
            episodes.map(({ attributes }: Any, index: number) => {
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
                    image={original || ""}
                    episodeNumber={relativeNumber || number}
                    title={canonicalTitle}
                    date={created_at}
                    description={description}
                    border={false}
                    className="my-2 "
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
    </Card>
  );
}

export default ViewEpisodesLists;
