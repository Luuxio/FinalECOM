import { useContext } from "react";
import { CARTCONTEXT} from "../context/CartContext";

export function useCart()
{
    const context = useContext(CARTCONTEXT);
    if (!context) throw new Error("useCart must be used within a CartProvider");
    return context;
}
