import { Box } from "@chakra-ui/react";
import { useState } from "react";

// Importe les images locales
import image1 from "../utils/img/1.jpg";
import image2 from "../utils/img/2.jpg";
import image3 from "../utils/img/3.jpg";
import image4 from "../utils/img/4.jpg";
import waterfallImage from "../utils/img/waterfall.jpg";
import ContentSection from "../components/Home/ContentSection";
import ImageCarousel from "../components/Home/ImageCarousel";

export default function HomeContainer()
{
    const images = [image1, image2, image3, image4];
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const nextImage = () =>
    {
        setCurrentImageIndex((prevIndex) =>
            prevIndex === images.length - 1 ? 0 : prevIndex + 1,
        );
    };

    const prevImage = () =>
    {
        setCurrentImageIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1,
        );
    };

    const goToImage = (index: number) =>
    {
        setCurrentImageIndex(index);
    };

    return (
        <Box maxW="100%" mx="auto" p={0}>
            <ImageCarousel
                images={images}
                currentImageIndex={currentImageIndex}
                nextImage={nextImage}
                prevImage={prevImage}
                goToImage={goToImage}
            />
            <ContentSection waterfallImage={waterfallImage} />
        </Box>
    );
}
