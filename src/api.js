import axios from "axios";

const api = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
    timeout: 1000,
});

api.interceptors.request.use((config)=>{
    console.log('Request Interceptor:', config);
    config.headers.Authorization = "Bearer token123";
    return config;
})

api.interceptors.response.use((response)=>{
    console.log('Response Interceptor:', response);
    return response;
})

export default api;