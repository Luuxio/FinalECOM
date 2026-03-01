import { createContext } from "react";
import type { Category } from "../types/category";

type CategoryContextType = {
    categories: Category[];
    loading: boolean;
    error: string | null;
    fetchCategories: () => Promise<void>;
};

export const CATEGORYCONTEXT = createContext<CategoryContextType | undefined>(undefined);
