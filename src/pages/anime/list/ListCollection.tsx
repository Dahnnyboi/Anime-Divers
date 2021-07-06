import React from "react";
import { isEmpty } from "lodash";
import { Link } from "react-router-dom";
import {
  AnimeCard,
  AnimeCardsContainer,
  AnimeCardsContent,
} from "components/Cards";
import { IMAGE_SIZE_MEDIUM } from "configs/constants";

interface ListCollectionProps {
  loading: boolean;
  data: Array<Record<string, unknown>>;
}

function ListCollection({ loading, data }: ListCollectionProps): JSX.Element {
  return (
    <div className="pb-4">
      <AnimeCardsContainer loading={loading}>
        {!isEmpty(data) &&
          data.map((item: Any, index: number) => {
            const { id } = item;
            const { titles, synopsis, posterImage } = item.attributes;
            const { en_us, en_jp } = titles;
            const image = posterImage[IMAGE_SIZE_MEDIUM];

            return (
              <AnimeCardsContent key={index} onList>
                <Link to={`anime/${id}`} className="text-decoration-none">
                  <AnimeCard
                    image={image}
                    imageType="poster"
                    imageSize={IMAGE_SIZE_MEDIUM}
                    title={en_us || en_jp}
                    description={synopsis}
                  />
                </Link>
              </AnimeCardsContent>
            );
          })}
      </AnimeCardsContainer>
    </div>
  );
}

export default ListCollection;
