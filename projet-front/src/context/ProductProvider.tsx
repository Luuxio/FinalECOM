import { useState, useEffect, type ReactNode } from "react";
import { PRODUCTCONTEXT } from "./ProductContext";
import type { Product } from "../types/product";
import { getProducts, getProductById } from "../services/productService";

export function ProductProvider({ children }: { children: ReactNode })
{
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    const fetchProducts = async () =>
    {
        try
        {
            setLoading(true);
            const data = await getProducts();
            setProducts(data);
            setError(null);
        }
        catch (err)
        {
            console.error("Error fetching products:", err);
            setError(err instanceof Error ? err.message : "Failed to fetch products");
        }
        finally
        {
            setLoading(false);
        }
    };

    const fetchProductById = async (id: string): Promise<Product | undefined> =>
    {
        try
        {
            const product = await getProductById(id);
            return product;
        }
        catch (err)
        {
            console.error("Error fetching product by ID:", err);
            setError(err instanceof Error ? err.message : "Failed to fetch product");
            return undefined;
        }
    };

    // Charger tous les produits au montage
    useEffect(() =>
    {
        fetchProducts();
    }, []);

    return (
        <PRODUCTCONTEXT.Provider
            value={{
                products,
                loading,
                error,
                fetchProducts,
                fetchProductById,
            }}
        >
            {children}
        </PRODUCTCONTEXT.Provider>
    );
}
