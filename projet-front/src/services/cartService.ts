import { api } from "./api"
import type { Cart } from "../types/cart"

export const getCart = async (userId: string): Promise<Cart> =>
{
    const response = await api.get(`/carts/user/${userId}`)
    return response.data
}

export const addToCart = async (userId: string, productId: string, quantity: number): Promise<Cart> =>
{
    const response = await api.post("/carts/add", { userId, productId, quantity })
    return response.data
}

export const removeFromCart = async (userId: string, productId: string): Promise<Cart> =>
{
    const response = await api.delete(`/carts/remove/${userId}/${productId}`)
    return response.data
}
