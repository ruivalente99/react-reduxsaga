import * as type from "../types";

const initialState = {
  issues: {},
  loading: false,
  error: null,
};

export default function issues(state = initialState, action) {
  switch (action.type) {
    case type.GET_ISSUES_REQUESTED:
      return {
        ...state,
        loading: true,
      };
    case type.GET_ISSUES_SUCCESS:
      return {
        ...state,
        loading: false,
        issues: action.issues,
      };
    case type.GET_ISSUES_FAILED:
      return {
        ...state,
        loading: false,
        error: action.message,
      };

      
    case type.POST_ISSUES_REQUESTED:
      return {
        ...state,
        loading: true,
      };
    case type.POST_ISSUES_SUCCESS:
      return {
        ...state,
        loading: false,
        issues: action.issues,
      };
    case type.POST_ISSUES_FAILED:
      return {
        ...state,
        loading: false,
        error: action.message,
      };

    default:
      return state;
  }
}
