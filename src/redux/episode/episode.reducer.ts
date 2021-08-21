import * as types from "./episode.types";

const initialState = {
  isLoading: false,
  data: {},
};

function episodesReducer(
  state = initialState,
  action: ACTION
): Record<string, unknown> {
  switch (action.type) {
    case types.EPISODE_CALL_REQUEST:
      return { ...state, isLoading: true };
    case types.EPISODE_CALL_SUCCESS:
      return { ...state, isLoading: false, data: action.payload };
    case types.EPISODE_CALL_FAILURE:
      return { ...state, isLoading: false, data: action.payload };
    default:
      return state;
  }
}

export default episodesReducer;
