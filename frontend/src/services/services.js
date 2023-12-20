import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3001/api/v1/user/';

export const fetchToken = async (email, password) => {
  try {
    const { data } = await axios.post('login', { email, password });
    console.log(data);
    return data;
  } catch (error) {
    return error;
  }
};

export const fetchUserProfile = async (token) => {
  try {
    const { data } = await axios.post('profile', {}, { headers: { Authorization: `Bearer ${token}` } });
    console.log(data);
    return data;
  } catch (error) {
    return error;
  }
};