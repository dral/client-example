export const fetchRequest = (PREFIX, id) => ({
  type: `${PREFIX}_REQUEST`,
  id,
});
export const fetchSuccess = (PREFIX, id) => ({
  type: `${PREFIX}_SUCCESS`,
  id,
});
export const fetchError = (PREFIX, id, error) => ({
  type: `${PREFIX}_ERROR`,
  id,
  error,
});

const fetcher = (dispatch) => (PREFIX, apiCall, id, ...params) => {
  dispatch(fetchRequest(PREFIX, id));
  return apiCall(id, ...params)
    .then(result => {
      dispatch(fetchSuccess(PREFIX, id))
      return result;
    })
    .catch(error => {
      dispatch(fetchError(PREFIX, id, error));
      throw error;
    });
}
export default fetcher;
