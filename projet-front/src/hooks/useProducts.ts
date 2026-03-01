import { useContext } from "react";
import { PRODUCTCONTEXT } from "../context/ProductContext";

export function useProducts()
{
    const context = useContext(PRODUCTCONTEXT);
    if (!context)
    {
        throw new Error("useProducts must be used within a ProductProvider");
    }
    return context;
}
