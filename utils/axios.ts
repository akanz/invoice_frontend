import axios from "axios";

export const base_url = process.env.NEXT_PUBLIC_API_URL

export const Axios = axios.create({
    baseURL: base_url,
    timeout: 7000,
});

Axios.interceptors.response.use((res) => res.data, async (error) => {
    if (error) {
        return Promise.reject({
            message: error.response.data.message || error.response.data.error,
            status: error.response.status
        })
    }
    return Promise.reject('An Unknown error occurred')
})
export const instance = axios.create({
    baseURL: base_url,
    timeout: 7000,
});

instance.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('token');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        if (error) {
            return Promise.reject(error)
        }
        return 'An unknown error occurred'
    }
);

// Add a response interceptor
instance.interceptors.response.use(
    (response) => response,
    async (error) => {
        const originalRequest = error.config;

        // If the error status is 401 and there is no originalRequest._retry flag,
        // it means the token has expired and we need to refresh it
        if (error.response.status === 401 && !originalRequest._retry) {
            originalRequest._retry = true;

            try {
                const refreshToken = localStorage.getItem('refreshToken');
                const response = await axios.post('/api/refresh-token', { refreshToken });
                const { token } = response.data;

                localStorage.setItem('token', token);

                // Retry the original request with the new token
                originalRequest.headers.Authorization = `Bearer ${token}`;
                return axios(originalRequest);
            } catch (error) {
                // Handle refresh token error or redirect to login
            }
        }

        return Promise.reject(error);
    }
);
