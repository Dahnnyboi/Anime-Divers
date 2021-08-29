import * as types from "./chapter.types";

const initialState = {
  isLoading: false,
  data: {},
};

function chapterReducer(
  state = initialState,
  action: ACTION
): Record<string, unknown> {
  switch (action.type) {
    case types.CHAPTER_CALL_REQUEST:
      return { ...state, isLoading: true };
    case types.CHAPTER_CALL_SUCCESS:
      return { ...state, isLoading: false, data: action.payload };
    case types.CHAPTER_CALL_FAILURE:
      return { ...state, isLoading: false, data: action.payload };
    default:
      return state;
  }
}

export default chapterReducer;
