import { useCart } from "../hooks/useCart";
import { useQuery } from "@tanstack/react-query";
import { getProductById } from "../services/productService";

export default function Cart()
{
    const { cart, removeFromCart, clearCart } = useCart();

    // Récupère les détails des produits dans le panier
    const productIds = cart.map((item) => item.productId);
    const { data: products = [] } = useQuery({
        queryKey: ["products", productIds],
        queryFn: () => Promise.all(productIds.map((id) => getProductById(id))),
    });

    const total = products.reduce(
        (sum, product, index) => sum + product.price * cart[index].quantity,
        0,
    );

    return (
        <div>
            <h1>Mon Panier</h1>
            {cart.length === 0 ? (
                <p>Votre panier est vide.</p>
            ) : (
                <>
                    <ul>
                        {products.map((product, index) => (
                            <li key={product.id}>
                                <h3>{product.title}</h3>
                                <p>Prix: {product.price} €</p>
                                <p>Quantité: {cart[index].quantity}</p>
                                <button
                                    onClick={() => removeFromCart(product.id)}
                                >
                                    Retirer
                                </button>
                            </li>
                        ))}
                    </ul>
                    <p>Total: {total.toFixed(2)} €</p>
                    <button onClick={clearCart}>Vider le panier</button>
                </>
            )}
        </div>
    );
}
