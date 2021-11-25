import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:80/Projects/estagio/api'
})

export default api