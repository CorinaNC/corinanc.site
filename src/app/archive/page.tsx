import {
  Text,
  Container,
  List,
  Link,
  Divider,
  HStack,
  Heading,
} from "@chakra-ui/react";

export default function Archive() {
  return (
    <Container alignContent="center">
      <Heading size="1xl">Corina's Archive</Heading>
      <Divider mb={5} />
      <HStack alignItems="center">
        <List textDecoration="underline">
          <Link href="archive/favoriteAlbums">
            <Text _hover="">{">"} Favorite Albums</Text>
          </Link>
        </List>
      </HStack>
    </Container>
  );
}
