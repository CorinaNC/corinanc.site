import {Box,
    Heading,
    Text,
    VStack,
    Image,
    Divider,
    Container
} from "@chakra-ui/react";

export default function Homepage() {
    return (
        <Container paddingTop="15px">
            <Box bg="#252127" minH="100vh">
                <VStack spacing={8} align="center">
                    <Box pt={10} display={{ md: 'flex' }}>
                        <Image src="https://media.discordapp.net/attachments/440991514144014386/1291075674769199155/profile.png?ex=66fec76b&is=66fd75eb&hm=5c7d59782e183a877bec36d1a4528c8ef38c903cef9c8caa9448c6833e857d4e&=&format=webp&quality=lossless&width=352&height=350 " alt="Corina Conklin"/>
                        <Box flexGrow={1} paddingTop={50}>
                            <Heading as="h1" color="White">Hello, my name is Corina</Heading>
                            <Text color="White">Developer, Designer, and Writer.</Text>
                        </Box>
                    </Box>
                    <Box maxW='md' borderRadius='lg' overflow='hidden'>
                        <Divider />
                        <Heading 
                        as="h2" 
                        color="White" 
                        textAlign="center" 
                        paddingBottom={5} 
                        paddingTop={5}>Welcome  Home</Heading>
                            <Box>
                                <Text color="White">
                                Greetings, my name is Corina; I’m currently a Junior at the University of Minnesota-Twin Cities studying Compter Science and Creative Writing!  
                                </Text>
                                <Text color="White" pt={2}>
                                In fifth grade, when asked what I wanted to be when I grew up, I responded with: "A software developer!"
                                </Text>
                                <Text color="White" pt={2}>
                                Outside of computer science, I write stories, poetry and music. I'm also a huge fan of time consuming JRPGs such as the modern Persona games. I built this website to archive my journey as a developer and as a personal blog page to whomever may be interested.
                                </Text>
                        </Box>
                    </Box>
                </VStack>
            </Box>
        </Container>
    )
}