"use client"

import Article from "@/app/components/article";
import { List, Container, Divider, ListItem, Heading, Link } from "@chakra-ui/react";

const songs = [
  { name: "1. La Dispute - You and I in Unison", url: "https://genius.com/La-dispute-you-and-i-in-unison-lyrics" },
  { name: "2. Holding Absence - Die Alone (In Your Lover's Arms)", url: "https://genius.com/Holding-absence-die-alone-in-your-lovers-arms-lyrics" },
  { name: "3. The Wonder Years - You're the Reason I Don't Want the World to End", url: "https://genius.com/The-wonder-years-youre-the-reason-i-dont-want-the-world-to-end-lyrics" },
  { name: "4. Casey - Wavering", url: "https://genius.com/Casey-wavering-lyrics" },
  { name: "5. Will Wood - Cotard's Solution (Anatta, Dukkha, Anicca)", url: "https://genius.com/Will-wood-and-the-tapeworms-cotards-solution-anatta-dukkha-anicca-lyrics" },
  { name: "6. Silent Planet - SUPERBLOOM", url: "https://genius.com/Silent-planet-superbloom-lyrics"},
  { name: "7. Motionless in White - Eternally Yours", url: "https://genius.com/Motionless-in-white-eternally-yours-lyrics" },
  { name: "8. From Autumn To Ashes - Short Stories With Tragic Endings", url: "https://genius.com/From-autumn-to-ashes-short-stories-with-tragic-endings-lyrics" },
  { name: "9. In Her Own Words - Rosé by the Ocean", url: "https://genius.com/In-her-own-words-rose-by-the-ocean-lyrics" },
  { name: "10. Machinae Supremacy - Pendulum", url: "https://genius.com/Machinae-supremacy-pendulum-lyrics"}
];

const albums = [
  { name: "1. La Dispute - Wildlife (2011)", url: "https://genius.com/albums/La-dispute/Wildlife" },
  { name: "2. The Hotelier - Home, Like Noplace Is There (2014)", url: "https://genius.com/albums/The-hotelier/Home-like-noplace-is-there" },
  { name: "3. Casey - Where I Go When I Am Sleeping (2016)", url: "https://genius.com/albums/Casey/Where-i-go-when-i-am-sleeping" },
  { name: "4. Hot Mulligan - Why Would I Watch (2023)", url: "https://genius.com/albums/Hot-mulligan/Why-would-i-watch" },
  { name: "5. Motionless in White - Disguise (2019)", url: "https://genius.com/albums/Motionless-in-white/Disguise" },
];

export default function favSongs() {
  return (
    <Article title="Favorite Songs + Album DLC" date="Posted November 16th, 2024">
      <Container mt={10} textAlign={"center"}>
        <List mt={5}>
          {songs.map((song, index) => (
            <ListItem m={3} key={index}>
              <Link href={song.url} fontFamily="Helvetica" isExternal>
                {song.name}
              </Link>
            </ListItem>
          ))}
        </List>
        <Divider />
        <List mt={7}>
          {albums.map((album, index) => (
            <ListItem m={3} key={index}>
              <Link href={album.url} fontFamily="Helvetica" isExternal>
                {album.name}
              </Link>
            </ListItem>
          ))}
        </List>
      </Container>
    </Article>
  );
}