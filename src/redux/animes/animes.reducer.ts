import * as types from "./animes.types";

const initialState = {
  isLoading: false,
  data: {
    data: [],
    links: {},
    meta: {},
  },
};

function animeReducer(
  state = initialState,
  action: ACTION
): Record<string, unknown> {
  switch (action.type) {
    case types.ANIME_CALL_REQUEST:
      return { ...state, isLoading: true };
    case types.ANIME_CALL_SUCCESS:
      return { ...state, isLoading: false, data: action.payload };
    case types.ANIME_CALL_FAILURE:
      return initialState;
    default:
      return state;
  }
}

export default animeReducer;
