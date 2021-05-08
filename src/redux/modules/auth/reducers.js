/* eslint-disable import/no-anonymous-default-export */
/* eslint-disable camelcase */
import types from '../../../constants/action-types';

const defaultState = {
  token: sessionStorage.getItem('token'),
};

const map = {
  [types.AUTH_LOGOUT]: (state) => {
    sessionStorage.removeItem('token');
    return {
      ...state, token: '', refresh_token: ''
    };
  },
  [types.AUTH_ERROR]: (state, { payload }) => ({ ...state, error: payload }),
  [types.AUTH_SET_token]: (state, { payload }) => {
    sessionStorage.setItem('token', payload);
    return {
      ...state, token: payload
    };
  }
};

export default (state = defaultState, action) => (map[action.type] && map[action.type](state, action)) || state;
