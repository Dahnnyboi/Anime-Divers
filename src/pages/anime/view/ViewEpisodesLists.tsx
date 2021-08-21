import React from "react";
import {
  EpisodesCardsContainer,
  EpisodesCardsContent,
  EpisodeCard,
} from "components/Cards";
import { Card } from "react-bootstrap";
import { isEmpty } from "lodash";
import { FilterPagination } from "components/Filters";
import useGetSingleEpisode from "./useGetSingleEpisode";
import ViewEpisodeModal from "./ViewEpisodeModal";

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
  const {
    isOpen,
    toggle,
    episode,
    isLoading: episodeLoading,
  } = useGetSingleEpisode();

  return (
    <Card className="w-100 p-3 mt-3">
      <Card.Body>
        <Card.Title className="mb-2">Anime Episodes</Card.Title>

        <EpisodesCardsContainer loading={isLoading}>
          {!isEmpty(episodes) &&
            episodes.map((data: Any, index: number) => {
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

      <ViewEpisodeModal
        isOpen={isOpen}
        toggle={toggle}
        isLoading={episodeLoading}
        episode={episode}
      />
    </Card>
  );
}

export default ViewEpisodesLists;
