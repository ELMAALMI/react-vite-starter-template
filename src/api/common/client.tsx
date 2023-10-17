import { API_URL } from '@/core';
import axios from 'axios';

axios.interceptors.request.use(
    (config) => {
        console.log(config);
        return config;
    },
    (err) => {
        console.log(err);
    }
);
axios.interceptors.response.use(
    (config) => {
        console.log(config);
        return config;
    },
    (err) => {
        console.log(err);
    }
);

export const client = axios.create({
    baseURL: API_URL,
    withCredentials: true
});
