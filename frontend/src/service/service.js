import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3001/api/v1/user/';

export const fetchToken = async (email, password) => {
  try {
    const { data } = await axios.post('login', { email, password });
    return data;
  } catch (error) {
    return error;
  }
};

export const fetchUserProfile = async (token) => {
  try {
    const { data } = await axios.post('profile', {}, { headers: { Authorization: `Bearer ${token}` } });
    return data;
  } catch (error) {
    return error;
  }
};