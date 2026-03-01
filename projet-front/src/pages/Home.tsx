import { useState } from "react";
import "../themes/HomePage.css";

// Importe les images locales
import image1 from "../utils/img/1.jpg";
import image2 from "../utils/img/2.jpg";
import image3 from "../utils/img/3.jpg";
import image4 from "../utils/img/4.jpg";
import waterfallImage from "../utils/img/waterfall.jpg"; // Remplace par ton image de cascade

export default function Home()
{
    // Utilise les images importées
    const images = [image1, image2, image3, image4];

    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    // Fonction pour passer à l'image suivante
    const nextImage = () =>
    {
        setCurrentImageIndex((prevIndex) =>
            prevIndex === images.length - 1 ? 0 : prevIndex + 1,
        );
    };

    // Fonction pour revenir à l'image précédente
    const prevImage = () =>
    {
        setCurrentImageIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1,
        );
    };

    return (
        <div className="gallery-page">
            {/* Section du carousel */}
            <div className="carousel-container">
                <button className="carousel-button left" onClick={prevImage}>
                    ←
                </button>
                <div className="carousel-images">
                    {images.map((image, index) => (
                        <div
                            key={index}
                            className={`carousel-image ${
                                index === currentImageIndex ? "active" : ""
                            }`}
                        >
                            <img src={image} alt={`Slide ${index + 1}`} />
                        </div>
                    ))}
                </div>
                <button className="carousel-button right" onClick={nextImage}>
                    →
                </button>
                <div className="carousel-dots">
                    {images.map((image,index) => (
                        <button
                            key={index}
                            className={`dot ${index === currentImageIndex ? "active" : ""}`}
                            onClick={() => setCurrentImageIndex(index)}
                        />
                    ))}
                </div>
            </div>

            {/* Section de contenu */}
            <div className="content-section">
                <div className="content-text">
                    <h1>OMG c trop bien ce site c waw</h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat.
                    </p>
                </div>
                <div className="content-image">
                    <img src={waterfallImage} alt="Waterfall" />
                </div>
            </div>

            {/* Barre de réseaux sociaux en bas */}
            <div className="social-bar">
                <div className="social-icons-bottom">
                    <span>📷</span>
                    <span>📘</span>
                    <span>🐦</span>
                </div>
            </div>
        </div>
    );
}
