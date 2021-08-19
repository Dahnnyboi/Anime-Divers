import { useEffect } from "react";
import { getSingleAnime, getAnimeEpisodesList } from "api/anime";
import useAlerts from "utils/useAlerts";
import { useAppDispatch, useAppSelector } from "redux/hooks";
import { requestSingleAnime, requestListEpisodes } from "redux/root.actions";

interface AnimeData {
  anime: Any;
  episodes: Any;
  links: LINKS;
  isLoading: boolean;
  episodesLoading: boolean;
}

function useGetAnime(animeId: string, search: string): AnimeData {
  const { alertFailure } = useAlerts();
  const dispatch = useAppDispatch();
  const { data, isLoading } = useAppSelector((state) => state.anime);
  const { data: episodesData, isLoading: episodesLoading }: Any =
    useAppSelector((state) => state.episodes);

  useEffect(() => {
    dispatch(requestSingleAnime(() => getSingleAnime(animeId), alertFailure));
  }, []);

  useEffect(() => {
    dispatch(
      requestListEpisodes(
        () => getAnimeEpisodesList({ mediaId: animeId }, search),
        alertFailure
      )
    );
  }, [search]);

  const { data: episodes = [], links = {} } = episodesData;
  const { attributes = {} } = data;
  return {
    anime: attributes,
    episodes,
    links,
    isLoading,
    episodesLoading,
  };
}

export default useGetAnime;
