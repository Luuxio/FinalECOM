import { Box } from "@chakra-ui/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import waterfallImage from "../utils/img/waterfall.jpg";
import ContentSection from "../components/Home/ContentSection";

import { useProducts } from "../hooks/useProducts";
import ImageCarousel from "../components/Gallery/ImageCarousel";

export default function HomeContainer()
{
    const { products } = useProducts();
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const navigate = useNavigate();

    const nextImage = () =>
        setCurrentImageIndex((prev) => (prev === products.length - 1 ? 0 : prev + 1));

    const prevImage = () =>
        setCurrentImageIndex((prev) => (prev === 0 ? products.length - 1 : prev - 1));

    const goToProductPage = (productId: number) =>
        navigate(`/product/${productId}`);

    const currentProduct = products[currentImageIndex];
    const currentImage = currentProduct?.Images?.[0]?.link;

    return (
        <Box maxW="100%" mx="auto" p={0}>
            <ImageCarousel
                currentImage={currentImage}
                currentProduct={currentProduct}
                nextImage={nextImage}
                prevImage={prevImage}
                goToProductPage={goToProductPage}
            />
            <ContentSection waterfallImage={waterfallImage} />
        </Box>
    );
}
