import {
    Box,
    Heading,
    Text,
    VStack,
    Card,
    HStack,
    Button,
    SimpleGrid,
} from "@chakra-ui/react";
import ProfileContainer from "../components/Profile/ProfileContainer";

export default function ProfilePage()
{
    return (
        <ProfileContainer>
            {(user) => (
                <Box p={8} maxW="1200px" mx="auto">
                    {!user ? (
                        <Box p={8} textAlign="center">
                            <Text>Utilisateur non connecté</Text>
                        </Box>
                    ) : (
                        <VStack gap={8} align="stretch">
                            <Heading
                                as="h1"
                                size="2xl"
                                textAlign="center"
                                color="brand.700"
                            >
                                Mon Profil
                            </Heading>

                            {/* INFOS PERSONNELLES */}
                            <Card.Root shadow="md" borderRadius="xl">
                                <Card.Header>
                                    <Heading as="h2" size="lg" color="brand.700">
                                        Informations Personnelles
                                    </Heading>
                                </Card.Header>

                                <Card.Body>
                                    <VStack align="stretch" gap={6}>
                                        <SimpleGrid columns={{ base: 1, md: 2 }} gap={6}>
                                            <Box>
                                                <Text>Prénom</Text>
                                                <Text fontWeight="bold">{user.firstName}</Text>
                                            </Box>

                                            <Box>
                                                <Text>Nom</Text>
                                                <Text fontWeight="bold">{user.lastName}</Text>
                                            </Box>

                                            <Box>
                                                <Text>Email</Text>
                                                <Text fontWeight="bold">{user.emailAddress}</Text>
                                            </Box>

                                            <Box>
                                                <Text>Nom d&apos;utilisateur</Text>
                                                <Text fontWeight="bold">
                                                    {user.username ?? "Non renseigné"}
                                                </Text>
                                            </Box>
                                        </SimpleGrid>

                                        <HStack justify="flex-end">
                                            <Button variant="plain">
                                                Modifier mes informations
                                            </Button>
                                        </HStack>
                                    </VStack>
                                </Card.Body>
                            </Card.Root>

                            {/* HISTORIQUE COMMANDES */}
                            <Card.Root shadow="md" borderRadius="xl">
                                <Card.Header>
                                    <Heading as="h2" size="lg" color="brand.700">
                                        Historique des Commandes
                                    </Heading>
                                </Card.Header>

                                <Card.Body>
                                    <Text>
                                        Ici, tu pourras afficher la liste des commandes passées.
                                    </Text>

                                    <Box
                                        mt={4}
                                        p={6}
                                        bg="brand.50"
                                        borderRadius="lg"
                                        textAlign="center"
                                    >
                                        <Text>Aucune commande pour le moment.</Text>
                                    </Box>
                                </Card.Body>
                            </Card.Root>
                        </VStack>
                    )}
                </Box>
            )}
        </ProfileContainer>
    );
}
