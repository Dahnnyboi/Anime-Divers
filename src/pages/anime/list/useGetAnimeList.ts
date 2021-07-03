import { useEffect } from "react";
import { getAnimeList } from "api/anime";
import useAlerts from "utils/useAlerts";
import { useAppDispatch, useAppSelector } from "redux/hooks";
import { requestAnime } from "redux/root.actions";

interface AnimesData {
  animes: Array<Record<string, unknown>>;
  isLoading: boolean;
}

function useGetAnimeList(search: string): AnimesData {
  const { alertFailure } = useAlerts();
  const dispatch = useAppDispatch();
  const { data, isLoading } = useAppSelector((state) => state.animes);

  useEffect(() => {
    dispatch(requestAnime(() => getAnimeList(search), alertFailure));
  }, [search]);

  return { animes: data, isLoading };
}

export default useGetAnimeList;
