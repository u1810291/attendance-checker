import types from '../../../constants/action-types'

const defaultState = {
  data: []
}

const map = {
  [types.AUTH_LOGIN]: (state: any, { payload }: any) => ({
    ...state,
    data: payload
  })
}

export default (state: object, action: any) => (map[action.type] && map[action.type](state, action)) || state || defaultState