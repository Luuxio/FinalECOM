import { api } from "./api";
import type { Category } from "../types/category";

export const getAllCategories = async (): Promise<Category[]> =>
{
    const response = await api.get("/categories");
    return response.data;
};
