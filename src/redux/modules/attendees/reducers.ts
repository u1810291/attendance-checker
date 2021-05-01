import types from '../../../constants/action-types'

const defaultState = {
  data: []
}

const map = {
  [types.GET_PERSON_FACE_IN]: (state: any, { payload }: any) => ({
    ...state,
    data: payload
  })
}

export default (state: any, action: any) => (map[action.type] && map[action.type](state, action)) || state || defaultState