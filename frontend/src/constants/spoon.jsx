import axios from 'axios';

const apiKey = '9285ed5ac3734555ace89246806efe2f';

const axiosInstance = axios.create({
  baseURL: 'https://api.spoonacular.com',
  headers: {
    'Content-Type': 'application/json',
  },
  params:{
    apiKey: apiKey
}
});

export default axiosInstance;
