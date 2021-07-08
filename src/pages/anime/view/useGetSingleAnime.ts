import { useEffect } from "react";
import { getSingleAnime } from "api/anime";
import useAlerts from "utils/useAlerts";
import { useAppDispatch, useAppSelector } from "redux/hooks";
import { requestSingleAnime } from "redux/root.actions";

interface AnimeData {
  anime: Any;
  isLoading: boolean;
}

function useGetAnime(animeId: string): AnimeData {
  const { alertFailure } = useAlerts();
  const dispatch = useAppDispatch();
  const { data, isLoading } = useAppSelector((state) => state.anime);

  useEffect(() => {
    dispatch(requestSingleAnime(() => getSingleAnime(animeId), alertFailure));
  }, [animeId]);

  return { anime: data, isLoading };
}

export default useGetAnime;
