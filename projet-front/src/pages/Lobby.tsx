import { useLocation } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

export default function Home()
{
    const { user } = useAuth();
    const location = useLocation();
    const isNewUser = location.state?.isNewUser || true;

    // Détermine le nom à afficher
    let displayName = "User";
    if (user)
    {
        // Utilise firstName + lastName si disponibles, sinon username, sinon emailAddress
        displayName =
            user.firstName && user.lastName
                ? `${user.firstName} ${user.lastName}`
                : user.firstName ||
                  user.lastName ||
                  user.username ||
                  user.emailAddress;
    }

    return (
        <div>
            <h1>
                {isNewUser
                    ? `Welcome, ${displayName} !`
                    : `Welcome back, ${displayName} !`}
            </h1>
            {/* Le reste de ta page */}
        </div>
    );
}
