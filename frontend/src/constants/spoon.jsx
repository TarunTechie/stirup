import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://api.spoonacular.com/',
  headers: {
    'x-api-key': '9285ed5ac3734555ace89246806efe2f',
    'Content-Type': 'application/json',
  },
});

export default axiosInstance;
