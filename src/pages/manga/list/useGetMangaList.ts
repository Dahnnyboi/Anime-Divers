import { useEffect } from "react";
import { getMangaList } from "api/manga";
import useAlerts from "utils/useAlerts";
import { useAppDispatch, useAppSelector } from "redux/hooks";
import { requestManga } from "redux/root.actions";

interface MangasData {
  mangas: Any;
  isLoading: boolean;
}

function useGetMangaList(search: string): MangasData {
  const { alertFailure } = useAlerts();
  const dispatch = useAppDispatch();
  const { data, isLoading } = useAppSelector((state) => state.mangas);

  useEffect(() => {
    dispatch(requestManga(() => getMangaList(search), alertFailure));
  }, [search]);

  return { mangas: data, isLoading };
}

export default useGetMangaList;
