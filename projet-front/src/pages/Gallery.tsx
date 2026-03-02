import { useState } from "react";
import { useProducts } from "../hooks/useProducts";
import { useNavigate } from "react-router-dom";
import "../themes/GalleryPage.css";

export default function Gallery()
{
    const { products, loading, error } = useProducts();
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const navigate = useNavigate();

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    // Fonction pour naviguer vers la page produit
    const goToProductPage = (productId: number) =>
    {
        navigate(`/product/${productId}`); // Navigation vers la page produit
    };

    // Fonction pour passer à l'image suivante
    const nextImage = () =>
    {
        setCurrentImageIndex((prevIndex) =>
            prevIndex === products.length - 1 ? 0 : prevIndex + 1,
        );
    };

    // Fonction pour revenir à l'image précédente
    const prevImage = () =>
    {
        setCurrentImageIndex((prevIndex) =>
            prevIndex === 0 ? products.length - 1 : prevIndex - 1,
        );
    };

    // Obtenir le produit et l'image actuels
    const currentProduct = products[currentImageIndex];
    const currentImage = currentProduct?.Images?.[0]?.link; // Prend la première image du produit

    return (
        <div className="galleryContainer">
            {/* Header */}
            <div className="galleryHeader">
                <h1>Gallery</h1>
                <p>Découvrez nos produits :</p>
            </div>

            {/* Carousel d'images */}
            <div className="imageCarousel">
                <button className="carouselArrow left" onClick={prevImage}>
                    &lt;
                </button>

                <div className="carouselImages">
                    {products.length > 0 && currentImage ? (
                        <button
                            className="imageButton"
                            onClick={() => currentProduct && goToProductPage(currentProduct.id)}
                            aria-label={`Voir les détails de ${currentProduct?.name}`}
                        >
                            <img
                                src={currentImage}
                                alt={currentProduct?.name}
                                className="carouselImage"
                            />
                        </button>
                    ) : (
                        // console.log(currentProduct),
                        <div className="noProducts">Aucun produit disponible</div>
                    )}
                </div>

                <button className="carouselArrow right" onClick={nextImage}>
                    &gt;
                </button>
            </div>
        </div>
    );
}
