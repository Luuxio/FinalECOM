import { Box, Button, Image, Text } from "@chakra-ui/react";
import type { Product } from "../../types/product";

interface ImageCarouselProps {
    currentImage: string | undefined;
    currentProduct: Product | undefined;
    nextImage: () => void;
    prevImage: () => void;
    goToProductPage: (productId: number) => void;
}

export default function ImageCarousel({
    currentImage,
    currentProduct,
    nextImage,
    prevImage,
    goToProductPage,
}: ImageCarouselProps)
{
    return (
        <Box position="relative" maxW="full" overflow="hidden">
            <Button
                position="absolute"
                left={0}
                top="50%"
                transform="translateY(-50%)"
                zIndex={2}
                onClick={prevImage}
                bg="rgba(0, 0, 0, 0.5)"
                color="white"
                _hover={{ bg: "rgba(0, 0, 0, 0.8)" }}
                borderRadius="full"
                w={12}
                h={12}
            >
                &lt;
            </Button>

            <Box display="flex" justifyContent="center" alignItems="center" w="full" h="400px">
                {currentImage && currentProduct ? (
                    <Button
                        onClick={() => goToProductPage(currentProduct.id)}
                        aria-label={`Voir les détails de ${currentProduct.name}`}
                        bg="transparent"
                        p={0}
                        border="none"
                        cursor="pointer"
                    >
                        <Image
                            src={currentImage}
                            alt={currentProduct.name}
                            maxH="400px"
                            maxW="full"
                            objectFit="contain"
                        />
                    </Button>
                ) : (
                    <Text>No products available</Text>
                )}
            </Box>

            <Button
                position="absolute"
                right={0}
                top="50%"
                transform="translateY(-50%)"
                zIndex={2}
                onClick={nextImage}
                bg="rgba(0, 0, 0, 0.5)"
                color="white"
                _hover={{ bg: "rgba(0, 0, 0, 0.8)" }}
                borderRadius="full"
                w={12}
                h={12}
            >
                &gt;
            </Button>
        </Box>
    );
}
