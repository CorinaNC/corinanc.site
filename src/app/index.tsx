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

export default function Homepage() {
    return (
        <Container paddingTop="15px" maxW="2xl">
            <Box bg="#252127" minH="100vh">
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
                        paddingTop={5}>Welcome  Home</Heading>
                            <Box pt={5} >
                                <Stack spacing={3}>
                                    <Text>
                                    Greetings, my name is Corina; I'm currently a Junior at the University of Minnesota-Twin Cities studying Computer Science and Creative Writing!
                                    </Text>
                                    <Text>
                                    This past summer I worked as a software developer intern at Zurich Insurance!
                                    </Text>
                                    <Text>
                                    In fifth grade, when asked what I wanted to be when I grew up, I responded with: "A software developer!"
                                    </Text>
                                    <Text>
                                    Outside of computer science, I write stories, poetry and music. I'm also a huge fan of time consuming JRPGs such as the modern Persona games. I built this website to archive my journey as a developer and as a personal blog page to whomever may be interested.
                                    </Text>
                                </Stack>
                        </Box>
                    </Box>
                </VStack>
            </Box>
        </Container>
    )
}