import { Box, 
  Container, 
  Link, 
  HStack, 
  Center,
  Icon} from '@chakra-ui/react'
  import { IoLogoGithub, IoLogoLinkedin, IoIosMailUnread } from 'react-icons/io';

export default function Footer() {
  return (
    <Container bg="#0C003D" justifyContent="center" pt={50} pb={50}>
      <HStack justifyContent="center" pb={30}>
      <Box>
            <Link
              href="https://github.com/CorinaNC"
              target="_blank"
              className="hover:text-gray-300"
            >
              GitHub
            </Link>
          </Box>
          <Box>
            <Link
              href="https://www.linkedin.com/in/CorinaNC/"
              target="_blank"
              className="hover:text-gray-300"
            >
              LinkedIn
            </Link>
          </Box>
          <Box>
            <Link
              href="mailto:conkl095@umn.edu"
              target="_blank"
              className="hover:text-gray-300"
            >
              Mail
            </Link>
          </Box>
          </HStack>
          <Container textAlign="center" fontSize="sm">
          Designed and Developed by Corina Conklin 
        </Container>
    </Container>
  );
}
