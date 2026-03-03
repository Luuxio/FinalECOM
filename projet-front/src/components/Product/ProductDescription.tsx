import { Box, Text } from "@chakra-ui/react";

interface ProductDescriptionProps {
    description: string;
}

export default function ProductDescription({ description }: ProductDescriptionProps)
{
    return (
        <Box p={4} bg="brand.50" borderRadius="lg">
            <Text>{description}</Text>
        </Box>
    );
}
