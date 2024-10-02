'use client'
import { Link, Box, HStack, Container, Icon } from "@chakra-ui/react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Header() {
  return (
    <Container mt={50} mb={50} maxW="100%">
      <HStack justifyContent="center" >
        <Box mr={25}>
            <Link
              href="https://github.com/CorinaNC"
              target="_blank">
              <Icon as={FaGithub} boxSize={5} mr={2} />
              /CorinaNC
              </Link>
          </Box>
          <Box>
            <Link
              href="https://linkedin.com/in/CorinaNC">
              <Icon as={FaLinkedin} boxSize={5} mr={2} ml={6} />
              /in/CorinaNC
            </Link>
          </Box>
        <HStack ml={100} spacing={30}>
          <Box>
              <Link
                href="/about">
                about
              </Link>
            </Box>
            <Box>
              <Link
                href="/projects">
                projects
              </Link>
            </Box>
            <Box>
              <Link
                href="/writings">
                writings
              </Link>
            </Box>
            <Box>
              <Link
                href="/resume">
                  resume
                </Link>
            </Box>
          </HStack>
        </HStack>
      </Container>
  )
}
