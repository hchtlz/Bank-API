export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_FAIL = 'LOGIN_FAIL'
export const LOGOUT = 'LOGOUT'

const INITIAL_STATE = {
  isLogged: false,
  token: '',
}

export const loginReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return { isLogged: true, token: action.payload.body.token }
    case LOGIN_FAIL:
      return { isLogged: false, token: null, error: action.payload }
    case LOGOUT:
      return { isLogged: false, token: null }
    default:
      return state
  }
}