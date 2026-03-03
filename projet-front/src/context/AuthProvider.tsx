import { useState, useEffect } from "react";
import { AUTHCONTEXT } from "./AuthContext";
import type { ReactNode } from "react";
import { login as loginService } from "../services/authService";
import type { User } from "../types/user";

export function AuthProvider({ children }: { children: ReactNode })
{
    const [user, setUser] = useState<Omit<User, "password"> | null>(() =>
    {
        const storedUser = localStorage.getItem("user");
        return storedUser ? JSON.parse(storedUser) : null;
    });

    const [token, setToken] = useState<string | null>(() =>
        localStorage.getItem("token"),
    );

    const [isLoading, setIsLoading] = useState(true);

    // Permet d'éviter le flash "visiteur" au premier render
    useEffect(() =>
    {
        setIsLoading(false);
    }, []);

    const login = async (emailAddress: string, password: string) =>
    {
        const { token, user: loggedInUser } = await loginService(
            emailAddress,
            password,
        );

        setUser(loggedInUser);
        setToken(token);
        localStorage.setItem("token", token);
        localStorage.setItem("user", JSON.stringify(loggedInUser));
    };

    const logout = () =>
    {
        setUser(null);
        setToken(null);
        localStorage.removeItem("token");
        localStorage.removeItem("user");
    };

    return (
        <AUTHCONTEXT.Provider value={{ user, token, login, logout, isLoading }}>
            {children}
        </AUTHCONTEXT.Provider>
    );
}

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setError(null);
//     setIsSubmitting(true);
//     try {
//       await signUp({ firstName, lastName, email, password });
//       navigate("/lobby", { state: { isNewUser: true } });
//     } catch (err) {
//       setError("Échec de l'inscription. Vérifie tes informations.");
//       console.error("SignIn error:", err);
//     } finally {
//       setIsSubmitting(false);
//     }
//   };
