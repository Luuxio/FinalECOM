import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import type { Product } from "../../types/product";

interface ProductHeaderProps {
    product: Product;
}

export default function ProductHeader({ product }: ProductHeaderProps)
{
    return (
        <Flex
            direction={{ base: "column", md: "row" }}
            align="center"
            justify="center"
            gap={8}
            minH="350px"
        >
            <Box>
                <Heading as="h1" size="2xl" color="brand.700">
                    {product.name.split(" ").map((word, idx) => <Box key={idx}>{word}</Box>)}
                </Heading>
                <Heading as="h2" size="lg" color="brand.500" mt={4}>
                    €{product.price.toFixed(2)}
                </Heading>
                <Text fontSize="sm" color={product.stock > 0 ? "green.500" : "red.500"} mt={1}>
                    {product.stock > 0 ? `${product.stock} en stock` : "Rupture de stock"}
                </Text>
            </Box>
        </Flex>
    );
}
