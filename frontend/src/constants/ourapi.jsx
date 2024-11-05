import axios from 'axios'
const ourApi=axios.create({
    baseURL:import.meta.env.VITE_SERVER,
    })
export default ourApi