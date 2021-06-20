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

interface LandingTrendingMangaProps {
  loading: boolean;
  data: Array<Record<string, unknown>>;
}

function LandingTrendingManga({
  loading,
  data,
}: LandingTrendingMangaProps): JSX.Element {
  return (
    <div className="bg-secondary py-4">
      <CenterLayout>
        <h4 className="text-white">Trending Manga</h4>
        <AnimeCardsContainer loading={loading}>
          {!isEmpty(data) &&
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            data.map((manga: any, index: number) => {
              const { id } = manga;
              const { titles, synopsis, posterImage } = manga.attributes;
              const { en_us, en_jp, ja_jp } = titles;
              const image = posterImage[IMAGE_SIZE_MEDIUM];

              return (
                <AnimeCardsContent key={index}>
                  <Link to={`manga/${id}`} className="text-decoration-none">
                    <AnimeCard
                      image={image}
                      imageType="poster"
                      border={false}
                      imageSize={IMAGE_SIZE_MEDIUM}
                      title={en_us || en_jp || ja_jp}
                      description={synopsis}
                    />
                  </Link>
                </AnimeCardsContent>
              );
            })}
        </AnimeCardsContainer>
      </CenterLayout>
    </div>
  );
}

export default LandingTrendingManga;
