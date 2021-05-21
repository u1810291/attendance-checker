import types from '../../../constants/action-types';

export const setLoading = (payload) => ({ type: types.TABLE_SET_LOADING, payload });
export const setData = (payload) => ({ type: types.TABLE_SET_DATA, payload });
export const setTotal = (payload) => ({ type: types.TABLE_SET_TOTAL, payload });
export const setError = (payload) => ({ type: types.TABLE_ERROR, payload });

export const fetchData = (payload) => ({
  type: types.TABLE_FETCH_DATA,
  payload
});











export const getMatchedFaces = (payload) => ({
  type: types.TABLE_MATCHED_FACES_DATA,
  payload
});
export const setFaceData = (payload) => ({ type: types.TABLE_SET_FACE_DATA, payload });

export const getFullListData = (payload) => ({
  type: types.TABLE_FULL_LIST_DATA,
  payload
});
export const setFullListData = (payload) => ({ type: types.TABLE_SET_FULL_LIST_DATA, payload });
