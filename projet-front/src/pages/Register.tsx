import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import {
    Box,
    Heading,
    Input,
    Button,
    Text,
    VStack,
} from "@chakra-ui/react";

export default function Register()
{
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState<string | null>(null);
    const navigate = useNavigate();

    const handleSubmit = async (e: React.FormEvent) =>
    {
        e.preventDefault();
        setError(null);
        try
        {
            // await signIn({ firstName, lastName, email, password });
            navigate("/lobby", { state: { isNewUser: true } });
        }
        catch (err)
        {
            setError("Échec de l'inscription. Vérifie tes informations.");
            console.error("SignIn error:", err);
        }
    };

    return (
        <Box maxW="400px" mx="auto" p={5}>
            <VStack gap={6}>
                <Heading as="h1" size="xl" textAlign="center" fontFamily="heading">
                    Inscription
                </Heading>

                {error && (
                    <Text color="red.500" textAlign="center" fontFamily="body">
                        {error}
                    </Text>
                )}

                <Box as="form" onSubmit={handleSubmit} w="100%">
                    <VStack gap={4}>
                        <Box w="100%">
                            <Text mb={1} fontSize="sm" fontWeight="medium" fontFamily="body">
                                Nom
                            </Text>
                            <Input
                                type="text"
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)}
                                placeholder="Entrez votre nom"
                                required
                                borderColor="gray.300"
                                _focus={{
                                    borderColor: "brand.500",
                                    boxShadow: "0 0 0 1px var(--chakra-colors-brand-500)",
                                }}
                                fontFamily="body"
                            />
                        </Box>

                        <Box w="100%">
                            <Text mb={1} fontSize="sm" fontWeight="medium" fontFamily="body">
                                Prénom
                            </Text>
                            <Input
                                type="text"
                                value={lastName}
                                onChange={(e) => setLastName(e.target.value)}
                                placeholder="Entrez votre prénom"
                                required
                                borderColor="gray.300"
                                _focus={{
                                    borderColor: "brand.500",
                                    boxShadow: "0 0 0 1px var(--chakra-colors-brand-500)",
                                }}
                                fontFamily="body"
                            />
                        </Box>

                        <Box w="100%">
                            <Text mb={1} fontSize="sm" fontWeight="medium" fontFamily="body">
                                Email
                            </Text>
                            <Input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Entrez votre email"
                                required
                                borderColor="gray.300"
                                _focus={{
                                    borderColor: "brand.500",
                                    boxShadow: "0 0 0 1px var(--chakra-colors-brand-500)",
                                }}
                                fontFamily="body"
                            />
                        </Box>

                        <Box w="100%">
                            <Text mb={1} fontSize="sm" fontWeight="medium" fontFamily="body">
                                Mot de passe
                            </Text>
                            <Input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Entrez votre mot de passe"
                                required
                                borderColor="gray.300"
                                _focus={{
                                    borderColor: "brand.500",
                                    boxShadow: "0 0 0 1px var(--chakra-colors-brand-500)",
                                }}
                                fontFamily="body"
                            />
                        </Box>

                        <Button
                            type="submit"
                            variant="plain"
                            width="100%"
                            mt={4}
                            fontFamily="body"
                        >
                            S&apos;inscrire
                        </Button>
                    </VStack>
                </Box>
            </VStack>
        </Box>
    );
}
