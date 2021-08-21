import { useState } from "react";
import { getAnimeEpisode } from "api/anime";
import useAlerts from "utils/useAlerts";
import { useAppDispatch, useAppSelector } from "redux/hooks";
import { requestSingleEpisode } from "redux/root.actions";

interface EpisodeData {
  isOpen: boolean;
  toggle: Function;
  episode: Any;
  isLoading: boolean;
}

function useGetSingleEpisode(): EpisodeData {
  const { alertFailure } = useAlerts();
  const dispatch = useAppDispatch();
  const { data: dataEpisode, isLoading }: Any = useAppSelector(
    (state) => state.episode
  );
  const [isOpen, setIsOpen] = useState(false);

  function toggleEpisode(id: number): void {
    setIsOpen(!!id);
    if (id) {
      dispatch(requestSingleEpisode(() => getAnimeEpisode(id), alertFailure));
    }
  }
  const { data = {} } = dataEpisode;
  const { attributes = {} } = data;
  return { isOpen, toggle: toggleEpisode, episode: attributes, isLoading };
}

export default useGetSingleEpisode;
