import {
    createSystem,
    defaultConfig,
    defineRecipe,
    defineStyle,
} from "@chakra-ui/react";

const buttonTheme = defineRecipe({
    variants: {
        variant: {
            contrast: defineStyle({
                bg: "brand.500", // Jaune vif
                color: "white",
                _hover: {
                    bg: "brand.600", // Jaune légèrement plus foncé
                },
            }),
            degrade: defineStyle({
                bg: "brand.700", // Gris-bleu foncé
                color: "white",
                _hover: {
                    bg: "brand.800", // Vert turquoise
                },
            }),
            pastel: defineStyle({
                bg: "brand.900", // Rose pastel
                color: "brand.700", // Gris-bleu foncé
                _hover: {
                    bg: "pink.100", // Rose très clair
                },
            }),
        },
    },
});

const textRecipe = defineRecipe({
    variants: {
        variant: {
            caption: {
                fontSize: "sm",
                color: "gray.500",
                fontStyle: "italic",
            },
        },
    },
});

const system = createSystem(defaultConfig, {
    theme: {
        tokens: {
            colors: {
                brand: {
                    50: { value: "#F0F0F5" },
                    100: { value: "#D4D3DC" },
                    200: { value: "#A9A8BC" },
                    500: { value: "#C8C000" },
                    600: { value: "#B0A800" },
                    700: { value: "#5A5C6C" },
                    800: { value: "#008080" },
                    900: { value: "#F0D0D0" },
                },
            },
            fonts: {
                heading: { value: "'Montserrat', sans-serif" },
                body: { value: "'Open Sans', sans-serif" },
            },
        },

        recipes: {
            button: buttonTheme,
            text: textRecipe,
        },
    },
});

export default system;
