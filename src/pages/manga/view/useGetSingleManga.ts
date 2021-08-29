import { useEffect } from "react";
import { getSingleManga, getMangaChaptersList } from "api/manga";
import useAlerts from "utils/useAlerts";
import { useAppDispatch, useAppSelector } from "redux/hooks";
import { requestSingleManga, requestListChapters } from "redux/root.actions";

interface MangaData {
  manga: Any;
  chapters: Any;
  links: LINKS;
  isLoading: boolean;
  chaptersLoading: boolean;
}

function useGetSingleManga(mangaId: string, search: string): MangaData {
  const { alertFailure } = useAlerts();
  const dispatch = useAppDispatch();
  const { data, isLoading } = useAppSelector((state) => state.manga);
  const { data: dataChapters, isLoading: chaptersLoading } = useAppSelector(
    (state) => state.chapters
  );

  useEffect(() => {
    dispatch(requestSingleManga(() => getSingleManga(mangaId), alertFailure));
  }, []);

  useEffect(() => {
    dispatch(
      requestListChapters(
        () => getMangaChaptersList({ mangaId }, search),
        alertFailure
      )
    );
  }, [search]);

  const { attributes = {} } = data;
  const { data: chapters = [], links = {} } = dataChapters;
  return { manga: attributes, chapters, links, isLoading, chaptersLoading };
}

export default useGetSingleManga;
