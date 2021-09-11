import axios from "axios";
import {url} from "./const";

export const profile = axios.create({
    baseURL: `${url}/`,
    headers: { "Content-Type": "application/json" },
});

profile.interceptors.request.use(
    (config) => {
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default profile;
