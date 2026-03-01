import { useState, useEffect, type ReactNode } from "react";
import { CATEGORYCONTEXT } from "./CategoryContext";
import type { Category } from "../types/category";
import { getAllCategories } from "../services/categoryService";

export function CategoryProvider({ children }: { children: ReactNode })
{
    const [categories, setCategories] = useState<Category[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    const fetchCategories = async () =>
    {
        try
        {
            setLoading(true);
            const data = await getAllCategories();
            setCategories(data);
            setError(null);
        }
        catch (err)
        {
            console.error("Error fetching categories:", err);
            setError(err instanceof Error ? err.message : "Failed to fetch categories");
        }
        finally
        {
            setLoading(false);
        }
    };

    useEffect(() =>
    {
        fetchCategories();
    }, []);

    return (
        <CATEGORYCONTEXT.Provider
            value={{
                categories,
                loading,
                error,
                fetchCategories,
            }}
        >
            {children}
        </CATEGORYCONTEXT.Provider>
    );
}
