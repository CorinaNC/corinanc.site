import { Text, Container, List, Link, Divider, HStack, Heading } from "@chakra-ui/react"

export default function Archive() {
    return (
        <Container alignContent="center">
            <Heading textAlign="left" fontStyle="bold" fontFamily="Courier">
                2025
            </Heading>
            <Divider mb={5} />
            <HStack alignItems="center" mb={3}>
                <List textDecoration="underline">
                    <Link href="archive/juniorYearInternshipHunt">
                    {'>'} Junior Year </Link>
                </List>
            </HStack>
            <Heading textAlign="left" fontStyle="bold" fontFamily="Courier">
                2024
            </Heading>
            <Divider mb={5} />
            <HStack alignItems="center">
                <List textDecoration="underline">
                    <Link href="archive/endOfSemester">
                    {'>'} End of Semester Blues
                    </Link>
                </List>
                <Text textColor="#A274B8" ml={5} fontFamily="Courier">
                    December 17th
                </Text>
            </HStack>
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