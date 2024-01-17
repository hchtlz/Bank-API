import { LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT } from '../reducers/loginReducer.js'
import axios from 'axios'

export const login = (email, password) => async (dispatch) => {
  try {
    const { data } = await axios.post('http://localhost:3001/api/v1/user/login', { email, password })
    dispatch({ type: LOGIN_SUCCESS, payload: data })
  } catch (error) {
    dispatch({ type: LOGIN_FAIL, payload: error })
  }
}
