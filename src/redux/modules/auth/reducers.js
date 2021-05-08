/* eslint-disable import/no-anonymous-default-export */
/* eslint-disable camelcase */
import types from '../../../constants/action-types';

const defaultState = {
  access_token: sessionStorage.getItem('access_token'),
};

const map = {
  [types.AUTH_LOGOUT]: (state) => {
    sessionStorage.removeItem('access_token');
    return {
      ...state, access_token: '', refresh_token: ''
    };
  },
  [types.AUTH_ERROR]: (state, { payload }) => ({ ...state, error: payload }),
  [types.AUTH_SET_ACCESS_TOKEN]: (state, { payload }) => {
    sessionStorage.setItem('access_token', payload);
    return {
      ...state, access_token: payload
    };
  }
};

export default (state = defaultState, action) => (map[action.type] && map[action.type](state, action)) || state;
