const fetch = (PREFIX) => (state = {}, action) => {
  let date = Date.now();
  let {error} = action;
  switch (action.type) {
    case `${PREFIX}_REQUEST`:
      return { ...state, status: "FETCHING", lastRequest: date, error }
    case `${PREFIX}_SUCCESS`:
      return { ...state, status: "SUCCESS", lastUpdate: date, error }
    case `${PREFIX}_ERROR`:
      return { ...state, status: "ERROR", lastUpdate: date, error }
    default:
      return state;
  }
}

export default fetch;

export const selectors = {
  status: (state) => state.status,
  isFetching: (state) => state.status === "FETCHING",
  isUpToDate: (state) => state.status === "SUCCESS",
  needsRefresh: (state, timeout) => {
    return (
      state.status !== "FETCHING" && (              // is not fetching and
        !state.lastUpdate ||                        // either has never been fetched
        (Date.now() - state.lastUpdate > timeout)   // or the last update was too far ago
      )
    )
  },
  requestTime: (state) => (state.lastUpdate - state.lastRequest),
};
