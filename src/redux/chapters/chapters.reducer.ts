import * as types from "./chapters.types";

const initialState = {
  isLoading: false,
  data: {},
};

function chaptersReducer(
  state = initialState,
  action: ACTION
): Record<string, unknown> {
  switch (action.type) {
    case types.CHAPTERS_CALL_REQUEST:
      return { ...state, isLoading: true };
    case types.CHAPTERS_CALL_SUCCESS:
      return { ...state, isLoading: false, data: action.payload };
    case types.CHAPTERS_CALL_FAILURE:
      return { ...state, isLoading: false, data: action.payload };
    default:
      return state;
  }
}

export default chaptersReducer;
