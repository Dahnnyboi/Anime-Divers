import * as types from "./mangas.types";

const initialState = {
  isLoading: false,
  data: {
    data: [],
    links: {},
    meta: {},
  },
};

function mangaReducer(
  state = initialState,
  action: ACTION
): Record<string, unknown> {
  switch (action.type) {
    case types.MANGA_CALL_REQUEST:
      return { ...state, isLoading: true };
    case types.MANGA_CALL_SUCCESS:
      return { ...state, isLoading: false, data: action.payload };
    case types.MANGA_CALL_FAILURE:
      return initialState;
    default:
      return state;
  }
}

export default mangaReducer;
