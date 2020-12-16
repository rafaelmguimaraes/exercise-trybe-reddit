import redditTypes from "./types";
import initialState from "../initialState";

const INITIAL_STATE = initialState.reddit;

function redditReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case redditTypes.REQUEST:
      return { ...state, isLoading: true };
    case redditTypes.RECEIVE:
      const time = new Date().toLocaleTimeString();
      return { ...state, posts: action.payload, isLoading: false, lastUpdate: time };
    case redditTypes.FAILED_REQUEST:
      return { ...state, error: action.payload, isLoading: false };
    default:
      return state;
  }
}

export default redditReducer;
