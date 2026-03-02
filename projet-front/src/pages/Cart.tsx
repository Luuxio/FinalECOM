import { Box, Heading, VStack } from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
// import "../../themes/CartPage.css";
import { useCart } from "../hooks/useCart";
import EmptyCart from "../components/Cart/EmptyCart";
import CartSummary from "../components/Cart/CartSummary";
import CartItem from "../components/Cart/CartItem";
import type { Product } from "../types/product";
import { getProductById } from "../services/productService";

export default function CartContainer()
{
    const { cart, removeFromCart, clearCart } = useCart();

    const productIds = cart.map((item) => item.productId);

    const { data: products = [] } = useQuery<Product[]>({
        queryKey: ["products", productIds],
        queryFn: async () =>
        {
            try
            {
                const productPromises = productIds.map((id) => getProductById(id.toString()));
                return await Promise.all(productPromises);
            }
            catch (error)
            {
                console.error("Error fetching products:", error);
                return [];
            }
        },
        enabled: productIds.length > 0,
    });

    const total = products.reduce((sum, product, index) =>
    {
        const cartItem = cart[index];
        return sum + (product?.price || 0) * (cartItem?.quantity || 0);
    }, 0);

    const handleRemoveFromCart = (productId: string) =>
    {
        try
        {
            removeFromCart(productId);
        }
        catch (error)
        {
            console.error("Error removing product from cart:", error);
        }
    };

    return (
        <Box maxW="1200px" mx="auto" p={5} fontFamily="body">
            <Heading as="h1" mb={6} fontFamily="heading">Mon Panier</Heading>
            {cart.length === 0 ? (
                <EmptyCart />
            ) : (
                <VStack gap={6} align="stretch">
                    <Box>
                        {products.map((product, index) =>
                        {
                            const cartItem = cart[index];
                            if (!product || !cartItem) return null;
                            return (
                                <CartItem
                                    key={`${product.id}-${cartItem.quantity}`}
                                    product={product}
                                    quantity={cartItem.quantity}
                                    onRemove={() => handleRemoveFromCart(product.id.toString())}
                                />
                            );
                        })}
                    </Box>
                    <CartSummary total={total} onClearCart={clearCart} />
                </VStack>
            )}
        </Box>
    );
}
