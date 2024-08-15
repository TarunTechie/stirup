import axios from 'axios';

const spoon = axios.create({
  baseURL: 'https://api.spoonacular.com/',
  headers: {
    'x-api-key':import.meta.env.VITE_APIKEY ,
    'Content-Type': 'application/json',
  },
});

export default spoon;
