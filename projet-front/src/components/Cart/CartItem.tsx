import { Box, HStack, Image, Text, VStack, Button } from "@chakra-ui/react";
import type { Product } from "../../types/product";

interface CartItemProps {
    product: Product;
    quantity: number;
    onRemove: () => void;
}

export default function CartItem({ product, quantity, onRemove }: CartItemProps)
{
    return (
        <Box
            p={5}
            mb={5}
            bg="brand.50"
            borderRadius="lg"
            boxShadow="sm"
            display="flex"
            alignItems="center"
            justifyContent="space-between"
        >
            <HStack gap={5} flex={1}>
                {product.Images && product.Images.length > 0 && (
                    <Image
                        src={product.Images[0].link}
                        alt={product.name}
                        boxSize="80px"
                        objectFit="contain"
                        borderRadius="md"
                    />
                )}
                <Text fontSize="lg" fontWeight="medium" color="gray.800" fontFamily="heading">
                    {product.name}
                </Text>
            </HStack>

            <VStack gap={1} flex={1} align="flex-end">
                <Text fontWeight="bold" color="gray.800" fontFamily="body">
                    Prix unitaire: {product.price.toFixed(2)} €
                </Text>
                <Text color="gray.600" fontFamily="body">Quantité: {quantity}</Text>
                <Text color="gray.600" fontFamily="body">
                    Sous-total: {(product.price * quantity).toFixed(2)} €
                </Text>
            </VStack>

            <Button
                variant="plain"
                onClick={onRemove}
                aria-label={`Retirer ${product.name} du panier`}
            >
                Retirer
            </Button>
        </Box>
    );
}
