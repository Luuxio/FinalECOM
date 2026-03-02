import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useProducts } from "../hooks/useProducts";
import GalleryHeader from "../components/Gallery/GalleryHeader";
import ImageCarousel from "../components/Gallery/ImageCarousel";
import { Box } from "@chakra-ui/react";

export default function GalleryContainer()
{
    const { products, loading, error } = useProducts();
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const navigate = useNavigate();

    if (loading) return <Box>Loading...</Box>;
    if (error) return <Box>Error: {error}</Box>;

    const goToProductPage = (productId: number) =>
    {
        navigate(`/product/${productId}`);
    };

    const nextImage = () =>
    {
        setCurrentImageIndex((prevIndex) =>
            prevIndex === products.length - 1 ? 0 : prevIndex + 1,
        );
    };

    const prevImage = () =>
    {
        setCurrentImageIndex((prevIndex) =>
            prevIndex === 0 ? products.length - 1 : prevIndex - 1,
        );
    };

    const currentProduct = products[currentImageIndex];
    const currentImage = currentProduct?.Images?.[0]?.link;

    return (
        <Box maxW="1200px" mx="auto" p={5}>
            <GalleryHeader />
            <ImageCarousel
                currentImage={currentImage}
                currentProduct={currentProduct}
                nextImage={nextImage}
                prevImage={prevImage}
                goToProductPage={goToProductPage}
            />
        </Box>
    );
}
