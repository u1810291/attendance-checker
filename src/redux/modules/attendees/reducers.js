/* eslint-disable import/no-anonymous-default-export */
import types from '../../../constants/action-types';

const defaultState = {
  data: [],
  loading: false,
  total: 0,
  error: '',
  faces:[],
  fullList:[]
};

const map = {
  [types.TABLE_SET_LOADING]: (state, { payload }) => ({
    ...state,
    loading: payload
  }),
  [types.TABLE_SET_DATA]: (state, { payload }) => ({
    ...state,
    data: payload
  }),
  [types.TABLE_SET_TOTAL]: (state, { payload }) => ({
    ...state,
    total: payload
  }),
  [types.TABLE_SET_FACE_DATA]: (state, { payload }) => ({
    ...state,
    faces: payload
  }),
  [types.TABLE_SET_FULL_LIST_DATA]: (state, { payload }) => ({
    ...state,
    fullList: payload
  }),
  [types.TABLE_ERROR]: (state, { payload }) => ({
    ...state,
    error: payload
  })

};

export default (state, action) => (map[action.type] && map[action.type](state, action)) || state || defaultState;
