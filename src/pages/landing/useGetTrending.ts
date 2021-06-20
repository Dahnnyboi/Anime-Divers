import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "redux/hooks";
import { requestAnime, requestManga } from "redux/root.actions";

interface AnimesData {
  animes: Array<Record<string, unknown>>;
  mangas: Array<Record<string, unknown>>;
  links?: Record<string, unknown>;
  meta?: Record<string, unknown>;
  loadingAnime: boolean;
  loadingManga: boolean;
}

function useGetTrending(): AnimesData {
  const dispatch = useAppDispatch();
  const { data: dataAnime, isLoading: loadingAnime } = useAppSelector(
    (state) => state.anime
  );
  const { data: dataManga, isLoading: loadingManga } = useAppSelector(
    (state) => state.manga
  );

  // TODO: api request for params, error callback
  useEffect(() => {
    dispatch(requestAnime());
    dispatch(requestManga());
  }, [dispatch]);

  const { data: animes } = dataAnime;
  const { data: mangas } = dataManga;
  return { animes, mangas, loadingAnime, loadingManga };
}

export default useGetTrending;
