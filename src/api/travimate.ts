import axios from 'axios';
import { BASE_API_URL } from '../utils/endpoint';

const travimate = axios.create({
    baseURL: BASE_API_URL,
    headers: {
        Authorization: '',
    }
});

travimate.interceptors.request.use(
    (config) => {
        const access_token = localStorage.getItem("access_token");
        if (access_token) {
            config.headers.Authorization = `Bearer ${access_token}`;
        }
        return config;
    },
    (error) => {
        if (error.response && error.response.status === 401) {
            window.location.href = '/signin';
        }
        return Promise.reject(error);
    }
);

travimate.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default travimate;