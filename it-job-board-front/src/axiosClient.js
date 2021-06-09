import axios from "axios";

const axiosClient = axios.create({
    headers: {
        'Content-Type': 'application/json'
    },
});

axiosClient.interceptors.request.use(async (config) => {
    const customHeaders = {};

    const accessToken = localStorage.getItem('token_type') + ' ' + localStorage.getItem('access_token');
    if (accessToken) {
        customHeaders.Authorization = accessToken;
    }

    return {
        ...config,
        headers: {
            ...customHeaders,
            ...config.headers,
        }
    };
});

export default axiosClient;
