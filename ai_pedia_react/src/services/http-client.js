import axios from "axios";
import { ACCESS_TOKEN_STORAGE_KEY } from "../utils/constants";

const axiosHttpClient = axios.create({
    withCredentials: true,
    baseURL: `${import.meta.env.VITE_SERVER_URL}/api`,
});

axiosHttpClient.interceptors.request.use(async (reqConfig) => {
    reqConfig.headers.Accept = "application/json";
    const accessToken = localStorage.getItem(ACCESS_TOKEN_STORAGE_KEY);
    if (accessToken) {
        reqConfig.headers.Authorization = `Bearer ${accessToken}`;
    }
    if (reqConfig.method.toUpperCase() !== "GET") {
        await axiosHttpClient.get(
            `${import.meta.env.VITE_SERVER_URL}/sanctum/csrf-cookie`
        );
    }
    return reqConfig;
});

axiosHttpClient.interceptors.response.use(
    (response) => {
        return {
            isError: false,
            ...response,
        };
    },
    (error) => {
        const { response } = error;
        // console.error("RESPONSE ERROR: ", error, response);
        switch (response.status) {
            //? users are unauthenticated
            case 401:
                localStorage.removeItem(ACCESS_TOKEN_STORAGE_KEY);
                return {
                    isError: true,
                    status: 401,
                    message: response.data.message ?? "error",
                    errors: response.data.errors,
                };
            case 419:
                throw Error("CSRF TOKENS DO NOT MATCH!");
            case 422:
                return {
                    isError: true,
                    status: 422,
                    message: response.data.message ?? "error",
                    errors: response.data.errors,
                };
            default:
                throw error;
        }
    }
);

export default axiosHttpClient;
