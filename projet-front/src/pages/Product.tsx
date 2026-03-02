import { useState } from "react";
import { useParams } from "react-router-dom";
import { useProducts } from "../hooks/useProducts";
import { useCart } from "../hooks/useCart";
import "../themes/ProductPage.css"
import type { Product } from "../types/product";

export default function ProductPage()
{
    const { id } = useParams<{ id: string }>();
    const { fetchProductById } = useProducts();
    const { addToCart } = useCart();
    const [product, setProduct] = useState<Product | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const [quantity, setQuantity] = useState<number>(1);
    const [isAdded, setIsAdded] = useState<boolean>(false);
    const [activeTab] = useState<string>("description");

    useState(() =>
    {
        const loadProduct = async () =>
        {
            if (!id) return;

            try
            {
                setLoading(true);
                const productData = await fetchProductById(id);
                if (productData)
                {
                    setProduct(productData);
                }
            }
            catch (err)
            {
                setError(err instanceof Error ? err.message : "Failed to load product");
            }
            finally
            {
                setLoading(false);
            }
        };

        loadProduct();
    });

    const handleAddToCart = () =>
    {
        if (!product) return;

        addToCart(product.id.toString(), quantity);
        setIsAdded(true);
        setTimeout(() => setIsAdded(false), 2000);
    };

    const incrementQuantity = () =>
    {
        setQuantity((prev) => prev + 1);
    };

    const decrementQuantity = () =>
    {
        setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
    };

    if (loading) return <div className="loading">Loading...</div>;
    if (error) return <div className="error">{error}</div>;
    if (!product) return <div className="notFound">Product not found</div>;

    return (
        <div className="productPage">
            <div className="productContainer">
                {/* Section gauche avec l'image du produit */}
                <div className="productImageSection">
                    <div className="mainImageContainer">
                        <img
                            src={product.Images[0]?.link}
                            alt={product.name}
                            className="mainProductImage"
                        />
                    </div>

                </div>

                {/* Section droite avec les détails */}
                <div className="productDetailsSection">
                    <div className="productHeader">
                        <h1 className="productTitle">
                            <span className="organicLabel">Organic</span>
                            <br />
                            {product.name.split(" ").map((word, index) => (
                                <span key={index} className="titleWord">
                                    {word}
                                    {index < product.name.split(" ").length - 1 && <br />}
                                </span>
                            ))}
                        </h1>
                        <div className="productPrice">€{product.price.toFixed(2)}</div>
                    </div>

                    <div className="productDescriptionShort">
                        {product.description}
                    </div>

                    <div className="quantitySelector">
                        <button
                            className="quantityButton"
                            onClick={decrementQuantity}
                            aria-label="Decrease quantity"
                        >
                            -
                        </button>
                        <span className="quantityValue">{quantity}</span>
                        <button
                            className="quantityButton"
                            onClick={incrementQuantity}
                            aria-label="Increase quantity"
                        >
                            +
                        </button>
                    </div>

                    <button
                        className={`addToCartButton ${isAdded ? "added" : ""}`}
                        onClick={handleAddToCart}
                        aria-label="Add to cart"
                    >
                        {isAdded ? (
                            <>
                                ✓ Added to cart <span className="heartSymbol">❤️</span>
                            </>
                        ) : (
                            "Add to cart"
                        )}
                    </button>

                    {/* <div className="productTabs">
                        <div
                            className={`tab ${activeTab === "description" ? "active" : ""}`}
                            onClick={() => setActiveTab("description")}
                        >
                            Description
                            <span className="tabIcon">{activeTab === "description" ? "−" : "+"}</span>
                        </div>

                        <div
                            className={`tab ${activeTab === "nutrition" ? "active" : ""}`}
                            onClick={() => setActiveTab("nutrition")}
                        >
                            Nutrition
                            <span className="tabIcon">{activeTab === "nutrition" ? "−" : "+"}</span>
                        </div>

                        <div
                            className={`tab ${activeTab === "ingredients" ? "active" : ""}`}
                            onClick={() => setActiveTab("ingredients")}
                        >
                            Ingredients
                            <span className="tabIcon">{activeTab === "ingredients" ? "−" : "+"}</span>
                        </div>
                    </div> */}

                    {activeTab === "description" && (
                        <div className="tabContent">
                            <p>{product.description}</p>
                        </div>
                    )}

                    {activeTab === "nutrition" && (
                        <div className="tabContent">
                            <p>Nutritional information would be displayed here.</p>
                        </div>
                    )}

                    {activeTab === "ingredients" && (
                        <div className="tabContent">
                            <p>{product.description} (Ingredients details)</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
