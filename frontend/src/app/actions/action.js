import { LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT } from '../reducers/loginReducer.js'
import { GET_USERPROFILE, EDIT_USERNAME } from '../reducers/userReducer.js'
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

/* Get user profile action */
export const userProfile = () => async (dispatch) => {
  try {
    const token = localStorage.getItem('token');
    const { data } = await axios.post(
      'http://localhost:3001/api/v1/user/profile',
      {},
      {
        headers: {
          Accept: 'application/json',
          Authorization: `Bearer ${token}`
        }
      }
    );
    dispatch({ type: GET_USERPROFILE, payload: data });
  } catch (error) {
    console.error('Erreur lors de la récupération du profil', error);
  }
};

/* Username update action */
export const updateUsername = (username) => {
  return {
      type: EDIT_USERNAME,
      payload: username,
  }
}