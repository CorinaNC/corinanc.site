"use client"

import { Box, Container, Link, HStack, Text, Icon } from '@chakra-ui/react';
import { IoLogoGithub, IoLogoLinkedin, IoIosMail } from 'react-icons/io';

export default function Footer() {
  return (
    
    <Box mt="auto" maxWidth="100%">
      <Container bg="#0C003D" maxW="100%" justifyContent="center" pt={50} pb={50}>
        <HStack justifyContent="center" spacing={{ base: 10, md: 30 }} pb={30}>
          <Box sx={{ _hover: { color: "Gray" } }}>
            <Link href="https://github.com/CorinaNC" target="_blank">
              <Icon as={IoLogoGithub} boxSize={{ base: 30, md: 50 }} />
            </Link>
          </Box>
          <Box sx={{ _hover: { color: "Gray" } }}>
            <Link href="https://www.linkedin.com/in/CorinaNC/" target="_blank">
              <Icon as={IoLogoLinkedin} boxSize={{ base: 30, md: 50 }} />
            </Link>
          </Box>
          <Box sx={{ _hover: { color: "Gray" } }}>
            <Link href="mailto:corinaconklin@gmail.com" target="_blank">
              <Icon as={IoIosMail} boxSize={{ base: 30, md: 50 }} />
            </Link>
          </Box>
        </HStack>
        <Container textAlign="center" fontSize="sm">
          <Text>
          Designed and Developed by Corina Conklin
          </Text>
        </Container>
        <Container textAlign="center" fontSize="sm">
          <Text size="sm">Credit to <Link href="https://github.com/stephane-monnot" textDecoration="underline" fontFamily="inter" target="_blank">stephane-monnot</Link> for the timeline component!
          </Text>
        </Container>
      </Container>
    </Box>
  );
}