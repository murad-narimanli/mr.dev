import axios from "axios";
import siteUrl from "./url";

export const profile = axios.create({
    baseURL: `${siteUrl}api`,
    headers: { "Content-Type": "application/json" },
});

profile.interceptors.request.use(
    (config) => {
        config.headers["accept-language"] = localStorage.getItem("locale")
            ? localStorage.getItem("locale")
            : "az";
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default profile;
