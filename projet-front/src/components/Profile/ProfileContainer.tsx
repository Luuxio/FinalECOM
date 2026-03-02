import { Box } from "@chakra-ui/react";
import { useLocation } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import UserGreeting from "./UserGreeting";
import type { ReactNode } from "react";
import type { User } from "../../types/user";

interface ProfileContainerProps {
  children: (user: Omit<User, "password"> | null) => ReactNode;
}

export default function ProfileContainer({ children }: ProfileContainerProps)
{
    const { user } = useAuth();
    const location = useLocation();
    const isNewUser = location.state?.isNewUser || false;

    return (
        <Box position="relative" minH="100vh">
            <UserGreeting user={user} isNewUser={isNewUser} />
            {children(user)}
        </Box>
    );
}
