import { useState } from "react";
import { getMangaChapter } from "api/manga";
import useAlerts from "utils/useAlerts";
import { useAppDispatch, useAppSelector } from "redux/hooks";
import { requestSingleChapter } from "redux/root.actions";

interface ChapterData {
  isOpen: boolean;
  toggle: Function;
  chapter: Any;
  isLoading: boolean;
}

function useGetSingleChapter(): ChapterData {
  const { alertFailure } = useAlerts();
  const dispatch = useAppDispatch();
  const { data: dataChapter, isLoading }: Any = useAppSelector(
    (state) => state.chapter
  );
  const [isOpen, setIsOpen] = useState(false);

  function toggleChapter(id: number): void {
    setIsOpen(!!id);
    if (id) {
      dispatch(requestSingleChapter(() => getMangaChapter(id), alertFailure));
    }
  }

  const { data = {} } = dataChapter;
  const { attributes = {} } = data;
  return { isOpen, toggle: toggleChapter, chapter: attributes, isLoading };
}

export default useGetSingleChapter;
