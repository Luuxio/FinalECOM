export interface CartItem
{
    productId: string
    quantity: number
}

export interface Cart
{
    userId: string
    products: CartItem[]
}
