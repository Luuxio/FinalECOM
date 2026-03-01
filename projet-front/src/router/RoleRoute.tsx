import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

interface RoleRouteProps {
    allowedRoles: string[]; // Liste des rôles autorisés
    redirectTo?: string; // Page de redirection (par défaut "/")
}

export default function RoleRoute({
    allowedRoles,
    redirectTo = "/",
}: RoleRouteProps)
{
    const { token, user, isLoading } = useAuth();

    if (isLoading) return <div>Chargement...</div>;

    if (!token || !user)
    {
        return <Navigate to={redirectTo} replace />;
    }

    const role = user.Roles?.[0]?.name;

    if (!allowedRoles.includes(role))
    {
        return <Navigate to="/" replace />;
    }

    return <Outlet />;
}
