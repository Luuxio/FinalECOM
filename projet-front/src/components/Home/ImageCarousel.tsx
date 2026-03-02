import { Box, Button, Image } from "@chakra-ui/react";

export interface ImageCarouselProps {
  images: string[];
  currentImageIndex: number;
  nextImage: () => void;
  prevImage: () => void;
  goToImage: (index: number) => void;
}

export default function ImageCarousel({
    images,
    currentImageIndex,
    nextImage,
    prevImage,
    goToImage,
}: ImageCarouselProps)
{
    return (
        <Box position="relative" maxW="full" overflow="hidden" mb={8}>
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
                ←
            </Button>

            <Box display="flex" justifyContent="center" alignItems="center" w="full" h="400px">
                {images.map((image, index) => (
                    <Box
                        key={index}
                        display={index === currentImageIndex ? "block" : "none"}
                        w="full"
                        h="full"
                    >
                        <Image
                            src={image}
                            alt={`Slide ${index + 1}`}
                            w="full"
                            h="full"
                            objectFit="cover"
                        />
                    </Box>
                ))}
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
                →
            </Button>

            <Box
                display="flex"
                justifyContent="center"
                mt={4}
                gap={2}
            >
                {images.map((_, index) => (
                    <Button
                        key={index}
                        onClick={() => goToImage(index)}
                        w={3}
                        h={3}
                        borderRadius="full"
                        bg={index === currentImageIndex ? "brand.500" : "gray.300"}
                        _hover={{ bg: index === currentImageIndex ? "brand.600" : "gray.400" }}
                    />
                ))}
            </Box>
        </Box>
    );
}
