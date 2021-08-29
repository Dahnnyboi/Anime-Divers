import * as types from "./manga.types";

const initialState = {
  isLoading: false,
  data: {},
};

function animeReducer(
  state = initialState,
  action: ACTION
): Record<string, unknown> {
  switch (action.type) {
    case types.SINGLE_MANGA_CALL_REQUEST:
      return { ...state, isLoading: true };
    case types.SINGLE_MANGA_CALL_SUCCESS:
      return { ...state, isLoading: false, data: action.payload };
    case types.SINGLE_MANGA_CALL_FAILURE:
      return initialState;
    default:
      return state;
  }
}

export default animeReducer;
