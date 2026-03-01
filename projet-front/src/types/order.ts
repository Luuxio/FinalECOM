import type { CartItem } from "./cart"

export interface Order
{
    id: string
    userId: string
    products: CartItem[]
    total: number
    status: "pending" | "completed" | "cancelled"
    createdAt: string
}
