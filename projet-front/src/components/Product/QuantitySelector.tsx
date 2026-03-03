import { HStack, Button, Text } from "@chakra-ui/react";

interface QuantitySelectorProps {
    quantity: number;
    setQuantity: (qty: number) => void;
}

export default function QuantitySelector({ quantity, setQuantity }: QuantitySelectorProps)
{
    return (
        <HStack gap={4}>
            <Button onClick={() => setQuantity(Math.max(1, quantity - 1))}>-</Button>
            <Text>{quantity}</Text>
            <Button onClick={() => setQuantity(quantity + 1)}>+</Button>
        </HStack>
    );
}
