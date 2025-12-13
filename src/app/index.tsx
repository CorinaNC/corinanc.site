import {Box,
    Heading,
    Text,
    VStack,
    Divider,
    Container,
    Image,
    HStack,
    Stack
} from "@chakra-ui/react";
import Corina from './public/images/corina.png';
import Experience from './components/experience';
import Technologies from "./components/technologies";

export default function Homepage() {
    
    return (
        <Container paddingTop="15px" maxW="full">
            <Box bg="#252127" mb="1.5rem;">
                <VStack spacing={50} align="center">
                    <HStack justifyContent="center" alignItems="center">
                        <Box pt={10} display={{ md: 'flex' }}>
                            <Image
                                src={Corina.src}
                                alt="Corina Conklin"
                                borderRadius="full"
                                boxSize="300px"
                                className="animated-border"
                            />
                            <Box flexGrow={1} paddingTop={50} marginLeft={10}>
                                <Heading as="h1">
                                    Hello, my name is Corina
                                </Heading>
                                <Text>Developer, Designer, and Writer.</Text>
                            </Box>
                        </Box>
                    </HStack>
                    <Box maxW='1000px' overflow='hidden'>
                        <Divider />
                        <Heading 
                            as="h3" 
                            color="White" 
                            textAlign="center" 
                            paddingBottom={5} 
                            paddingTop={5}>Welcome Home</Heading>
                        <Box pt={5} maxW="2xl">
                            <Stack spacing={3} 
                            pb={5}>
                                <Text>
                                    Software developer professionally specializing in full stack web development, mobile applications, UI/UX design & research, and human computer interaction. Experience developing software for the SaaS, technology, financial reporting, and insurance industries. Hobbyist writer, musician, and video editor.
                                </Text>
                            </Stack>
                        </Box>
                    </Box>
                </VStack>
            </Box>
            <Box ml={-30} mr={-30}>
                <Experience />
            </Box>
            <Technologies />
    </Container>
    )
}