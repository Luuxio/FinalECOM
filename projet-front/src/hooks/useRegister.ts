import { createContext, useContext } from "react";
import type { RegisterContextType } from "../types/user";

const AUTHCONTEXT = createContext<RegisterContextType | undefined>(undefined);

export const useRegister = (): RegisterContextType =>
{
    const context = useContext(AUTHCONTEXT);
    if (!context)
    {
        throw new Error("useRegister must be used within an AuthProvider");
    }
    return context;
};

export default AUTHCONTEXT;
