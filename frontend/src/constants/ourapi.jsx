import axios from 'axios'
const ourApi=axios.create({
    baseURL:`http://localhost:5000/`,
    })
export default ourApi