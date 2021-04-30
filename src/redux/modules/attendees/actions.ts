import types from '../../../constants/action-types'

export const fetchData = () => ({ type: types.GET_PERSON_FACE_IN })
export const setData = (payload: any) => ({ type: types.GET_PERSON_FACE_SET_DATA, payload })
