"use client"

import Article from "@/app/components/article";
import { List, Image, Container, Tooltip, Text, Divider, ListItem, Heading, Link, HStack } from "@chakra-ui/react";

const albums = [
  { name: "Wildlife", url: "https://genius.com/albums/La-dispute/Wildlife", image: "https://t2.genius.com/unsafe/860x0/https%3A%2F%2Fimages.genius.com%2F6ae868a782177983ddbab2c3d5c2e809.900x900x1.jpg"},
  { name: "Home, Like Noplace Is There", url: "https://genius.com/albums/The-hotelier/Home-like-noplace-is-there", image: "https://t2.genius.com/unsafe/860x0/https%3A%2F%2Fimages.genius.com%2F2b1d923355958d8a1baa7d304ad964f7.1000x1000x1.jpg" },
  { name: "Where I Go When I Am Sleeping", url: "https://genius.com/albums/Casey/Where-i-go-when-i-am-sleeping", image: "https://t2.genius.com/unsafe/860x0/https%3A%2F%2Fimages.genius.com%2F06fe19c10023a54a2c8cc65f57ea033e.1000x1000x1.png" },
  { name: "SELF-ish", url: "https://genius.com/albums/Will-wood-and-the-tapeworms/Self-ish", image: "https://t2.genius.com/unsafe/860x0/https%3A%2F%2Fimages.genius.com%2Fd242f8c22ade5d6278d6a8f6cf315e91.1000x1000x1.png" },
  { name: "Never Before Seen, Never Again Found", url: "https://genius.com/albums/Arms-length/Never-before-seen-never-again-found", image: "https://t2.genius.com/unsafe/860x0/https%3A%2F%2Fimages.genius.com%2Fb4dea156fd9b0f2393f9e6d989840317.1000x1000x1.jpg" },
  { name: "Disguise", url: "https://genius.com/albums/Motionless-in-white/Disguise", image: "https://t2.genius.com/unsafe/860x0/https%3A%2F%2Fimages.genius.com%2F354df53c5c4c5ce4168253a263e32fdd.1000x1000x1.png"},
  { name: "you'll be fine", url: "https://genius.com/albums/Hot-mulligan/Youll-be-fine", image: "https://t2.genius.com/unsafe/860x0/https%3A%2F%2Fimages.genius.com%2F9edd950cb4934aabacbe2aaae0640f7f.1000x1000x1.jpg"},
  { name: "The Greatest Mistake of My Life", url: "https://genius.com/albums/Holding-absence/The-greatest-mistake-of-my-life?cover_art_id=549550", image: "https://t2.genius.com/unsafe/860x0/https%3A%2F%2Fimages.genius.com%2Fc9b868f9d6d2222a3bb51c055cd9ee85.1000x1000x1.png"},
  { name: "Steady Glow", url: "https://genius.com/albums/In-her-own-words/Steady-glow", image: "https://t2.genius.com/unsafe/344x344/https%3A%2F%2Fimages.genius.com%2Fe38eb9860ef1810dd40a5c91963ff2ea.959x959x1.jpg"},
  { name: "SUPERBLOOM", url: "https://genius.com/albums/Silent-planet/Superbloom", image: "https://t2.genius.com/unsafe/859x0/https%3A%2F%2Fimages.genius.com%2Fb0a11a7ae8ac714d5cfbf587938188ba.1000x1000x1.png"},
  { name: "The Hum Goes on Forever", url: "https://genius.com/albums/The-wonder-years/The-hum-goes-on-forever", image: "https://t2.genius.com/unsafe/859x0/https%3A%2F%2Fimages.genius.com%2F0eef6fb0462888e67f622e7ada18ada8.900x900x1.jpg"},
  { name: "No One Was Driving The Car", url: "https://genius.com/albums/La-dispute/No-one-was-driving-the-car", image: "https://t2.genius.com/unsafe/859x0/https%3A%2F%2Fimages.genius.com%2Fede9ab2a9a0c412b91524a7d3f9e599d.1000x1000x1.webp"}
];

export default function favAlbums() {
  return (
    <Article title="Favorite Albums">
      <Container maxWidth={500} textAlign={"center"}>
        <Text mb={5}>Some albums that are personally quite special to me, most likely due to their lyrical content.  Though, of course, there are some exceptions (looking at you Motionless in White). </Text>
        <Divider mb={5} />
        <HStack spacing={4} wrap="wrap" justify="center">
          {albums.map((album, index) => (            
            <Link href={album.url} isExternal key={index}>
              <Tooltip label={album.name}>
              <Image 
                src={album.image} 
                border="1px solid white" 
                maxWidth="100" 
                objectFit="cover" 
                borderRadius="md"
              />
              </Tooltip>
            </Link>
          ))}
        </HStack>
      </Container>
    </Article>
  );
}