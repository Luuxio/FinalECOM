import { Button, Text, HStack } from "@chakra-ui/react";

interface AddToCartButtonProps {
    quantity: number;
    isAdded: boolean;
    onAdd: () => void;
}

export default function AddToCartButton({ isAdded, onAdd }: AddToCartButtonProps)
{
    return (
        <Button
            colorScheme={isAdded ? "green" : "brand"}
            size="lg"
            px={8}
            borderRadius="full"
            onClick={onAdd}
            transition="all 0.2s"
        >
            {isAdded ? (
                <HStack>
                    <Text>✓ Ajouté au panier</Text>
                    <Text>❤️</Text>
                </HStack>
            ) : "Ajouter au panier"}
        </Button>    );
}
