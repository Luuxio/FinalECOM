import axios from "axios";

export const api = axios.create({
    baseURL: "http://localhost:8080/api", // URL de ton API locale (à adapter si déployée)
    headers: {
        "Content-Type": "application/json",
    },
});
