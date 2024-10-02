"use client";

import { Box, 
  Container, 
  Link, 
  HStack, 
  Center,
  Icon} from '@chakra-ui/react'
  import { IoLogoGithub, IoLogoLinkedin, IoIosMail } from 'react-icons/io';

export default async function Footer() {
  return (
    <Container bg="#0C003D" justifyContent="center" pt={50} pb={50}>
      <HStack justifyContent="center" spacing={30} pb={30}>
      <Box>
            <Link
              href="https://github.com/CorinaNC"
              target="_blank"
              className="hover:text-gray-300">
              <Icon as={IoLogoGithub} boxSize={50}/>
            </Link>
          </Box>
          <Box>
            <Link
              href="https://www.linkedin.com/in/CorinaNC/"
              target="_blank"
              className="hover:text-gray-300"
            >
              <Icon as={IoLogoLinkedin} boxSize={50}/>
            </Link>
          </Box>
          <Box>
            <Link
              href="mailto:conkl095@umn.edu"
              target="_blank"
              className="hover:text-gray-300"
            >
              <Icon as={IoIosMail} boxSize={50}/>
            </Link>
          </Box>
          </HStack>
          <Container textAlign="center" fontSize="sm">
          Designed and Developed by Corina Conklin 
        </Container>
    </Container>
  );
}
