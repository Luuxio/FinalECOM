// src/components/product/ProductContainer.tsx
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useProducts } from "../hooks/useProducts";
import { useCart } from "../hooks/useCart";
import { Box, Spinner, Text, VStack, Flex } from "@chakra-ui/react";
import ProductHeader from "../components/Product/ProductHeader";
import ProductDescription from "../components/Product/ProductDescription";
import AddToCartButton from "../components/Product/AddToCartButton";
import QuantitySelector from "../components/Product/QuantitySelector";
import type { Product } from "../types/product";

export default function ProductContainer()
{
    const { id } = useParams<{ id: string }>();
    const { fetchProductById } = useProducts();
    const { addToCart } = useCart();
    const [product, setProduct] = useState<Product | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const [quantity, setQuantity] = useState<number>(1);
    const [isAdded, setIsAdded] = useState<boolean>(false);

    useEffect(() =>
    {
        const loadProduct = async () =>
        {
            if (!id) return;

            try
            {
                setLoading(true);
                const productData = await fetchProductById(id);
                if (productData)
                {
                    setProduct(productData);
                }
            }
            catch (err)
            {
                setError(err instanceof Error ? err.message : "Failed to load product");
            }
            finally
            {
                setLoading(false);
            }
        };

        loadProduct();
    }, [id, fetchProductById]);

    const handleAddToCart = () =>
    {
        if (!product) return;

        addToCart(product.id.toString(), quantity);
        setIsAdded(true);
        setTimeout(() => setIsAdded(false), 2000);
    };

    if (loading)
    {
        return (
            <Box display="flex" justifyContent="center" alignItems="center" minHeight="50vh">
                <Spinner size="xl" />
            </Box>
        );
    }

    if (error)
    {
        return (
            <Box textAlign="center" py={10}>
                <Text color="red.500" fontSize="xl">{error}</Text>
            </Box>
        );
    }

    if (!product)
    {
        return (
            <Box textAlign="center" py={10}>
                <Text fontSize="xl">Product not found</Text>
            </Box>
        );
    }

    return (
        <Box maxW="1200px" mx="auto" p={5}>
            <Flex
                direction={{ base: "column", md: "row" }}
                gap={8}
                alignItems="flex-start"
            >
                {/* Section gauche - Image du produit */}
                <Box flex={1} minW="300px">
                    <Box
                        borderRadius="lg"
                        overflow="hidden"
                        boxShadow="lg"
                        bg="white"
                        position="relative"
                    >
                        <Box
                            bg="gray.100"
                            height="400px"
                            display="flex"
                            alignItems="center"
                            justifyContent="center"
                        >
                            <Text fontSize="xl" color="gray.500">
                Image du produit
                            </Text>
                        </Box>
                    </Box>
                </Box>

                {/* Section droite - Détails du produit */}
                <Box flex={1}>
                    <VStack align="stretch" gap={6}>
                        {/* En-tête du produit */}
                        <ProductHeader product={product} />

                        {/* Description du produit */}
                        <ProductDescription description={product.description} />

                        {/* Sélecteur de quantité */}
                        <QuantitySelector
                            quantity={quantity}
                            setQuantity={setQuantity}
                        />

                        {/* Bouton Ajouter au panier */}
                        <AddToCartButton
                            quantity={quantity}
                            isAdded={isAdded}
                            onAdd={handleAddToCart}
                        />
                    </VStack>
                </Box>
            </Flex>
        </Box>
    );
}
