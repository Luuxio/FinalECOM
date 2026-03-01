import { useState } from "react";
import type { ReactNode } from "react";
import { CARTCONTEXT } from "./CartContext";
import type { CartItem } from "../types/cart";

export function CartProvider({ children }: { children: ReactNode })
{
    const [cart, setCart] = useState<CartItem[]>([]);

    const addToCart = (productId: string, quantity: number = 1) =>
    {
        setCart((prevCart) =>
        {
            // Vérifie si le produit est déjà dans le panier
            const existingItem = prevCart.find(
                (item) => item.productId === productId,
            );
            if (existingItem)
            {
                // Met à jour la quantité si le produit existe déjà
                return prevCart.map((item) =>
                    item.productId === productId
                        ? { ...item, quantity: item.quantity + quantity }
                        : item,
                );
            }
            else
            {
                // Ajoute le produit au panier
                return [...prevCart, { productId, quantity }];
            }
        });
    };

    const removeFromCart = (productId: string) =>
    {
        setCart((prevCart) =>
            prevCart.filter((item) => item.productId !== productId),
        );
    };

    const clearCart = () =>
    {
        setCart([]);
    };

    return (
        <CARTCONTEXT.Provider
            value={{ cart, addToCart, removeFromCart, clearCart }}
        >
            {children}
        </CARTCONTEXT.Provider>
    );
}
