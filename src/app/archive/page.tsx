import { Text, Container, List, Link, Divider, HStack, Heading } from "@chakra-ui/react"

export default function Archive() {
    return (
        <Container alignContent="center">
            <Heading textAlign="left" fontStyle="bold" fontFamily="Courier">
                2024
            </Heading>
            <Divider mb={5} />
            <HStack alignItems="center">
                <List textDecoration="underline">
                    <Link href="archive/finishedArchive">
                    {'>'} Finished Archive
                    </Link>
                </List>
                <Text textColor="#A274B8" ml={5} fontFamily="Courier">
                    November 16th
                </Text>
            </HStack>
            <HStack alignItems="center">
                <List textDecoration="underline">
                    <Link href="archive/favoriteSongs">
                    {'>'} Favorite Songs & Albums
                    </Link>
                </List>
                <Text textColor="#A274B8" ml={5} fontFamily="Courier">
                    November 16th
                </Text>
            </HStack>
        </Container>
    )
}