import { LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT } from '../reducers/loginReducer.js'
import { USER_PROFILE_SUCCESS, USER_PROFILE_FAIL, USER_PROFILE_RESET, USER_PROFILE_UPDATE } from '../reducers/userReducer.js'
import axios from 'axios'

export const login = (email, password) => async (dispatch) => {
  try {
    const { data } = await axios.post('http://localhost:3001/api/v1/user/login', { email, password })
    dispatch({ type: LOGIN_SUCCESS, payload: data })
    localStorage.setItem('token', data.body.token)
  } catch (error) {
    dispatch({ type: LOGIN_FAIL, payload: error })
  }
}

export const userProfile = (token) => async (dispatch) => {
  try {
    const { data } = await axios.get('http://localhost:3001/api/v1/user/profile', { headers: { Authorization: `Bearer ${token}` } })
    dispatch({ type: USER_PROFILE_SUCCESS, payload: data })
  }
  catch (error) {
    dispatch({ type: USER_PROFILE_FAIL, payload: error })
  }
}