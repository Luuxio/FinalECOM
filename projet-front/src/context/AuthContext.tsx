import { createContext } from "react";
import type { User } from "../types/user";

type AuthContextType = {
    user: Omit<User, "password"> | null;
    token: string | null;
    login: (emailAddress: string, password: string) => Promise<void>;
    logout: () => void;
    isLoading: boolean;
};

export const AUTHCONTEXT = createContext<AuthContextType | undefined>(
    undefined,
);
