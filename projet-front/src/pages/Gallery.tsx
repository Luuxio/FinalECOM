import { useState } from "react";
import { useCategories } from "../hooks/useCategories";
import "../themes/GalleryPage.css";

export default function Gallery()
{
    const { categories, loading, error } = useCategories();
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;

    return (
        <div className="galleryContainer">
            <div
                className="galleryHeader"
                style={{ backgroundImage: "url('../utils/img/waterfall.jpg')" }}
            >
                <h1>Gallery</h1>
                <p>Explore le monde :</p>

                {/* Catégories comme boutons */}
                <div className="categoryButtons">
                    {categories.map((category) => (
                        <button
                            key={category.id}
                            className={`categoryButton ${selectedCategory === category.id ? "active" : ""}`}
                            onClick={() => setSelectedCategory(category.id)}
                        >
                            {category.name}
                        </button>
                    ))}
                </div>
            </div>

            {/* Carousel d'images */}
            <div className="imageCarousel">
                <button className="carouselArrow left" onClick={() => { /* Logique pour image précédente */ }}>
                    &lt;
                </button>

                <div className="carouselImages">
                    {selectedCategory ? (
                        // Affiche les images de la catégorie sélectionnée
                        <img
                            alt={categories.find(cat => cat.id === selectedCategory)?.name}
                            className="carouselImage"
                        />
                    ) : (
                        // Affiche toutes les images si aucune catégorie n'est sélectionnée
                        categories.map((category) => (
                            <img
                                key={category.id}
                                alt={category.name}
                                className="carouselImage"
                            />
                        ))
                    )}
                </div>

                <button className="carouselArrow right" onClick={() => { /* Logique pour image suivante */ }}>
                    &gt;
                </button>
            </div>
        </div>
    );
}
