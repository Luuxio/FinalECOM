import { Box, Text, HStack, Button } from "@chakra-ui/react";

interface CartSummaryProps {
    total: number;
    onClearCart: () => void;
}

export default function CartSummary({ total, onClearCart }: CartSummaryProps)
{
    return (
        <Box p={5} bg="brand.50" borderRadius="lg" boxShadow="sm">
            <Text
                fontSize="xl"
                fontWeight="bold"
                textAlign="right"
                mb={5}
                color="gray.800"
                fontFamily="heading"
            >
                Total: {total.toFixed(2)} €
            </Text>
            <HStack gap={4} justify="space-between">
                <Button
                    variant="plain"
                    onClick={onClearCart}
                    flex={1}
                >
                    Vider le panier
                </Button>
                <Button variant="plain" flex={1}>
                    Passer à la caisse
                </Button>
            </HStack>
        </Box>
    );
}
