import axios from 'axios'

const instance = axios.create({
    baseURL: `URL`,
})

// Set the AUTH token for any request
instance.interceptors.request.use(function (config) {
    const token = localStorage.getItem(AUTH_TOKEN_KEY)
    config.headers.Authorization = token ? `Bearer ${token}` : "";
    return config;
});

export default instance;
