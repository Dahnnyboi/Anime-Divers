import React from "react";
import { Link } from "react-router-dom";
import {
  AnimeCard,
  AnimeCardsContainer,
  AnimeCardsContent,
} from "components/Cards";
import { isEmpty } from "lodash";
import { IMAGE_SIZE_MEDIUM } from "configs/constants";
import { CenterLayout } from "components/Layouts";

interface LandingTrendingAnimeProps {
  loading: boolean;
  data: Array<Record<string, unknown>>;
}

function LandingTrendingAnime({
  loading,
  data,
}: LandingTrendingAnimeProps): JSX.Element {
  return (
    <CenterLayout className="py-4">
      <h4>Trending Anime</h4>

      <AnimeCardsContainer loading={loading}>
        {!isEmpty(data) &&
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          data.map((anime: any, index: number) => {
            const { id } = anime;
            const { titles, synopsis, posterImage } = anime.attributes;
            const { en_us, en_jp } = titles;
            const image = posterImage[IMAGE_SIZE_MEDIUM];

            return (
              <AnimeCardsContent key={index}>
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
    </CenterLayout>
  );
}

export default LandingTrendingAnime;
