import { api } from "./api"
import type { Product } from "../types/product"

export const getProducts = async (signal?: AbortSignal): Promise<Product[]> =>
{
    const response = await api.get("/products", { signal })
    return response.data
}

export const getProductById = async (id: string): Promise<Product> =>
{
    const response = await api.get(`/products/${id}`)
    return response.data
}
