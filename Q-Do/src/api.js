import axios from "axios";

// Базовый URL бэкенда. Задаётся при сборке через REACT_APP_API_URL,
// по умолчанию — прод-домен.
export const API_URL = process.env.REACT_APP_API_URL || "https://qretex.site";

const api = axios.create({
    baseURL: API_URL,
});

// Автоматически подставляем Bearer-токен в каждый запрос.
api.interceptors.request.use((config) => {
    const token = localStorage.getItem("token");
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

export default api;
