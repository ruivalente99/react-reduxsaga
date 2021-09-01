import * as type from "../types";

export function getIssues() {
    return {
      type: type.GET_ISSUES_REQUESTED,
    }
  }