import { createContext } from "react";
import type { CartItem } from "../types/cart";

type CartContextType = {
    cart: CartItem[];
    addToCart: (productId: string, quantity: number) => void;
    removeFromCart: (productId: string) => void;
    clearCart: () => void;
};

export const CARTCONTEXT = createContext<CartContextType | undefined>(
    undefined,
);
