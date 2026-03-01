import type { AuthResponse, User } from "../types/user";
import { api } from "./api";

export const login = async (
    emailAddress: string,
    password: string,
): Promise<AuthResponse> =>
{
    const response = await api.post("/users/signin", {
        emailAddress,
        password,
    });
    return response.data;
};

export const register = async (
    user: Omit<User, "id">,
): Promise<AuthResponse> =>
{
    const response = await api.post("/users/signup", user);
    return response.data;
};
