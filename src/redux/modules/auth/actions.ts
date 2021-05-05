import types from '../../../constants/action-types'

export const login = (payload: any, success: any) => ({ type: types.AUTH_LOGIN, payload, success })
