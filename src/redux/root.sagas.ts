import { all } from "redux-saga/effects";
import watcherAnime from "./animes/animes.saga";
import watcherManga from "./mangas/mangas.saga";
import watcherSingleAnime from "./anime/anime.saga";
import watcherSingleManga from "./manga/manga.saga";
import watcherListEpisodes from "./episodes/episodes.saga";
import wactherSingleEpisode from "./episode/episode.saga";
import watcherListChapters from "./chapters/chapters.saga";
import watcherSingleChapter from "./chapter/chapter.saga";

export default function* rootSaga(): Any {
  yield all([
    watcherAnime(),
    watcherManga(),
    watcherSingleAnime(),
    watcherSingleManga(),
    watcherListEpisodes(),
    wactherSingleEpisode(),
    watcherListChapters(),
    watcherSingleChapter(),
  ]);
}
