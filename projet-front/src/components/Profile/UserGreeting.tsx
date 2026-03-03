import { Box, Heading } from "@chakra-ui/react";
import type { User } from "../../types/user";

interface UserGreetingProps {
    user: Omit<User, "password"> | null;
    isNewUser: boolean;
}

export default function UserGreeting({ user, isNewUser }: UserGreetingProps)
{
    // Détermine le nom à afficher
    let displayName = "User";
    if (user)
    {
        displayName =
            user.firstName && user.lastName
                ? `${user.firstName} ${user.lastName}`
                : user.firstName || user.lastName || user.username || user.emailAddress || "User";
    }

    return (
        <Box position="absolute" top={4} right={4} p={4} bg="brand.50" borderRadius="md" boxShadow="md">
            <Heading as="h2" size="md" color="brand.700">
                {isNewUser ? `Welcome, ${displayName}!` : `Welcome back, ${displayName}!`}
            </Heading>
        </Box>
    );
}
