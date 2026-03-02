import { Box, Text } from "@chakra-ui/react";

export default function EmptyCart()
{
    return (
        <Box textAlign="center" py={10} px={4} bg="brand.50" borderRadius="lg">
            <Text fontSize="xl" color="brand.700" fontFamily="heading">
                Votre panier est vide.
            </Text>
        </Box>
    );
}
