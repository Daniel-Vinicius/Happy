import axios from 'axios'

const api = axios.create({
    baseURL: 'http://192.168.1.109:3333', // pegar em devtools expo lan 
})

export default api;