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

export default function Login()
{
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState<string | null>(null);
    const { login } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = async (e: React.FormEvent) =>
    {
        e.preventDefault();
        setError(null);
        try
        {
            await login(email, password);
            navigate("/lobby", { state: { isNewUser: false } });
        }
        catch (err)
        {
            setError("Échec de la connexion. Vérifie tes identifiants.");
            console.error("Login error:", err);
        }
    };

    return (
        <Box maxW="400px" mx="auto" p={5}>
            <VStack gap={6}>
                <Heading as="h1" size="xl" textAlign="center">
                    Connexion
                </Heading>

                {error && (
                    <Box bg="red.100" borderRadius="md" p={3} w="100%">
                        <Text color="red.700" fontSize="sm">
                            {error}
                        </Text>
                    </Box>
                )}

                <Box as="form" onSubmit={handleSubmit} w="100%">
                    <VStack gap={4}>
                        <Box w="100%">
                            <Text mb={1} fontSize="sm" fontWeight="medium">Email</Text>
                            <Input
                                id="email"
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Entrez votre email"
                                required
                                borderColor="gray.300"
                                _focus={{ borderColor: "brand.500", boxShadow: "0 0 0 1px var(--chakra-colors-brand-500)" }}
                            />
                        </Box>

                        <Box w="100%">
                            <Text mb={1} fontSize="sm" fontWeight="medium">Mot de passe</Text>
                            <Input
                                id="password"
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Entrez votre mot de passe"
                                required
                                borderColor="gray.300"
                                _focus={{ borderColor: "brand.500", boxShadow: "0 0 0 1px var(--chakra-colors-brand-500)" }}
                            />
                        </Box>

                        <Button
                            type="submit"
                            bg="brand.500"
                            color="white"
                            width="100%"
                            mt={4}
                            _hover={{ bg: "brand.600" }}
                            _active={{ bg: "brand.700" }}
                        >
                            Se connecter
                        </Button>
                        <Button
                            type="button"
                            bg="brand.700"
                            color="white"
                            width="100%"
                            mt={4}
                            _hover={{ bg: "brand.800" }}
                            _active={{ bg: "brand.900" }}
                            onClick={() => {navigate("/signin")}}
                        >
                            S&apos;inscrire
                        </Button>
                    </VStack>
                </Box>
            </VStack>
        </Box>
    );
}
