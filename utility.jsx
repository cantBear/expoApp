import axios from "axios";
export const tokenAxios = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
    headers: {
        Accept: "application/json",
        "Content-Type": "multipart/form-data",
    }
});
tokenAxios.defaults.xsrfCookieName = 'csrftoken'
tokenAxios.defaults.xsrfHeaderName = 'X-CSRFToken'