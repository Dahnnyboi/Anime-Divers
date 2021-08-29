import React from "react";
import { CenterLayout, Layout3 } from "components/Layouts";
import { Loading } from "components/Loadings";
import { useParams } from "react-router-dom";
import useGetSingleManga from "./useGetSingleManga";
import ViewHeader from "./ViewHeader";
import ViewInformation from "./ViewInformation";
import ViewChaptersLists from "./ViewChaptersLists";

interface IndexProps {
  location: Location;
}

function Index({ location }: IndexProps): JSX.Element {
  const { search } = location;
  const { mangaId } = useParams<Any>();
  const { manga, isLoading, chapters, links, chaptersLoading } =
    useGetSingleManga(mangaId, search);
  const {
    coverImage = {},
    posterImage = {},
    titles = {},
    averageRating = "",
    favoritesCount = 0,
    status = "",
    synopsis = "",
  } = manga;

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
        <ViewChaptersLists
          chapters={chapters}
          links={links}
          isLoading={chaptersLoading}
        />
      </Layout3>
    </CenterLayout>
  );
}

export default Index;
