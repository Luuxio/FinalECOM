import { Box, Heading, Text, Image } from "@chakra-ui/react";

interface ContentSectionProps {
    waterfallImage: string;
}

export default function ContentSection({ waterfallImage }: ContentSectionProps)
{
    return (
        <Box
            display="flex"
            flexDirection={{ base: "column", md: "row" }}
            alignItems="center"
            justifyContent="space-between"
            maxW="1200px"
            mx="auto"
            p={8}
            gap={8}
        >
            <Box flex={1}>
                <Heading as="h1" size="2xl" mb={4}>
                    OMG c trop bien ce site c waw
                </Heading>
                <Text fontSize="lg">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    sed do eiusmod tempor incididunt ut labore et dolore
                    magna aliqua. Ut enim ad minim veniam, quis nostrud
                    exercitation ullamco laboris nisi ut aliquip ex ea
                    commodo consequat.
                </Text>
            </Box>
            <Box flex={1}>
                <Image
                    src={waterfallImage}
                    alt="Waterfall"
                    w="full"
                    h="auto"
                    borderRadius="lg"
                />
            </Box>
        </Box>
    );
}
