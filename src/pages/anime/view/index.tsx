import React from "react";
import { CenterLayout, Layout3 } from "components/Layouts";
import { useParams } from "react-router-dom";
import { Loading } from "components/Loadings";
import useGetSingleAnime from "./useGetSingleAnime";
import ViewHeader from "./ViewHeader";
import ViewInformation from "./ViewInformation";
import ViewEpisodesLists from "./ViewEpisodesLists";

interface IndexProps {
  location: Location;
}

function Index({ location }: IndexProps): JSX.Element {
  const { search } = location;
  const { animeId } = useParams<Any>();
  const { anime, episodes, links, isLoading, episodesLoading } =
    useGetSingleAnime(animeId, search);
  const {
    coverImage = {},
    posterImage = {},
    titles = {},
    averageRating = "",
    favoritesCount = 0,
    status = "",
    synopsis = "",
  } = anime;

  if (isLoading) return <Loading />;

  return (
    <CenterLayout className="my-2">
      <ViewHeader
        coverImage={coverImage}
        posterImage={posterImage}
        titles={titles}
        averageRating={averageRating}
        favoritesCount={favoritesCount}
        status={status}
      />
      <Layout3>
        <ViewInformation synopsis={synopsis} />
        <ViewEpisodesLists
          episodes={episodes}
          isLoading={episodesLoading}
          links={links}
        />
      </Layout3>
    </CenterLayout>
  );
}

export default Index;
