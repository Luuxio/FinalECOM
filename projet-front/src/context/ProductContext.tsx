import { createContext } from "react";
import type { Product } from "../types/product";

type ProductContextType =
{
    products: Product[];
    loading: boolean;
    error: string | null;
    fetchProducts: () => Promise<void>;
    fetchProductById: (id: string) => Promise<Product | undefined>;
}
export const PRODUCTCONTEXT = createContext<ProductContextType | undefined>(undefined);
