import { useCart } from "../hooks/useCart";
import { useQuery } from "@tanstack/react-query";
import { getProductById } from "../services/productService";
// import type { CartItem } from "../types/cart";
import type { Product } from "../types/product";
import "../themes/CartPage.css"

export default function Cart()
{
    const { cart, removeFromCart, clearCart } = useCart();

    // Récupère les détails des produits dans le panier
    const productIds = cart.map((item) => item.productId);

    const { data: products = [] } = useQuery<Product[]>({
        queryKey: ["products", productIds],
        queryFn: async () =>
        {
            // Récupère tous les produits en une seule requête si possible
            // ou fait des requêtes individuelles avec gestion d'erreur
            try
            {
                const productPromises = productIds.map((id) => getProductById(id.toString()));
                return await Promise.all(productPromises);
            }
            catch (error)
            {
                console.error("Error fetching products:", error);
                return [];
            }
        },
        enabled: productIds.length > 0, // Ne pas exécuter si le panier est vide
    });

    // Calcul du total avec vérification de sécurité
    const total = products.reduce(
        (sum, product, index) =>
        {
            const cartItem = cart[index];
            return sum + (product?.price || 0) * (cartItem?.quantity || 0);
        },
        0,
    );

    // Fonction pour gérer la suppression d'un produit
    const handleRemoveFromCart = (productId: string) =>
    {
        try
        {
            removeFromCart(productId);
        }
        catch (error)
        {
            console.error("Error removing product from cart:", error);
        }
    };

    return (
        <div className="cartContainer">
            <h1>Mon Panier</h1>

            {cart.length === 0 ? (
                <div className="emptyCart">
                    <p>Votre panier est vide.</p>
                </div>
            ) : (
                <>
                    <div className="cartItems">
                        {products.map((product, index) =>
                        {
                            const cartItem = cart[index];
                            if (!product || !cartItem) return null;

                            return (
                                <div key={`${product.id}-${cartItem.quantity}`} className="cartItem">
                                    <div className="productInfo">
                                        <h3 className="productName">{product.name}</h3>
                                        {product.Images && product.Images.length > 0 && (
                                            <img
                                                src={product.Images[0].link}
                                                alt={product.name}
                                                className="productImage"
                                            />
                                        )}
                                    </div>
                                    <div className="productDetails">
                                        <p className="productPrice">
                                            Prix unitaire: {product.price.toFixed(2)} €
                                        </p>
                                        <p className="productQuantity">
                                            Quantité: {cartItem.quantity}
                                        </p>
                                        <p className="productSubtotal">
                                            Sous-total: {(product.price * cartItem.quantity).toFixed(2)} €
                                        </p>
                                    </div>
                                    <button
                                        className="removeButton"
                                        onClick={() => handleRemoveFromCart(product.id.toString())}
                                        aria-label={`Retirer ${product.name} du panier`}
                                    >
                                        Retirer
                                    </button>
                                </div>
                            );
                        })}
                    </div>

                    <div className="cartSummary">
                        <div className="totalAmount">
                            <p>Total: {total.toFixed(2)} €</p>
                        </div>
                        <div className="cartActions">
                            <button
                                className="clearCartButton"
                                onClick={clearCart}
                            >
                                Vider le panier
                            </button>
                            <button className="checkoutButton">
                                Passer à la caisse
                            </button>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
}
