import { Heading, Text, Box } from "@chakra-ui/react";

export default function GalleryHeader()
{
    return (
        <Box textAlign="center" mb={8}>
            <Heading as="h1" size="2xl" mb={2}>
                Gallery
            </Heading>
            <Text fontSize="lg">Découvrez nos produits :</Text>
        </Box>
    );
}
