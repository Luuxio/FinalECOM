import { useContext } from "react";
import { AUTHCONTEXT } from "../context/AuthContext";

export function useAuth()
{
    const context = useContext(AUTHCONTEXT);
    if (!context)
        throw new Error("useAuth must be used within an AuthProvider");
    return context;
}
