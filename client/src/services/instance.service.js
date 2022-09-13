import axios from 'axios'

const instance = axios.create({
    baseURL: 'http://localhost:8000/api'
});

instance.interceptors.request.use(function (config) {

    const token = window.localStorage.getItem('token');

    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    console.log(config)
    return config;
    }, function (error) {
        return Promise.reject(error);
    }
)

export default instance

