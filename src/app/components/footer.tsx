"use client"

import { Box, Container, Link, HStack, Center, Icon } from '@chakra-ui/react';
import { IoLogoGithub, IoLogoLinkedin, IoIosMail } from 'react-icons/io';

export default function Footer() {
  return (
    <Box mt="auto" pt={0}>
      <Container bg="#0C003D" maxW="100%" justifyContent="center" pt={50} pb={50}>
        <HStack justifyContent="center" spacing={30} pb={30}>
          <Box sx={{ _hover: { color: "Gray" } }}>
            <Link href="https://github.com/CorinaNC" target="_blank">
              <Icon as={IoLogoGithub} boxSize={50} />
            </Link>
          </Box>
          <Box sx={{ _hover: { color: "Gray" } }}>
            <Link href="https://www.linkedin.com/in/CorinaNC/" target="_blank">
              <Icon as={IoLogoLinkedin} boxSize={50} />
            </Link>
          </Box>
          <Box sx={{ _hover: { color: "Gray" } }}>
            <Link href="mailto:conkl095@umn.edu" target="_blank">
              <Icon as={IoIosMail} boxSize={50} />
            </Link>
          </Box>
        </HStack>
        <Container textAlign="center" fontSize="sm">
          Designed and Developed by Corina Conklin
        </Container>
      </Container>
    </Box>
  );
}