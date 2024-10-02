"use client";

import { Link, Box, HStack, Container, Icon } from "@chakra-ui/react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default async function Header() {
  return (
    <Container mt={50} mb={50}>
      <HStack justifyContent="center">
        <Box mr={25}>
            <Link
              href="https://github.com/CorinaNC"
              target="_blank"
              sx={{
                _hover: {
                  color: "gray",
                  textDecoration: "underline",
                },
              }}
            >
              <Icon as={FaGithub} boxSize={25}mr={2} />
              /CorinaNC
              </Link>
          </Box>
          <Box>
            <Link
              href="https://linkedin.com/in/CorinaNC"
              sx={{
                _hover: {
                  color: "gray",
                  textDecoration: "underline",
                },
              }}
            >
              <Icon as={FaLinkedin} boxSize={25} mr={6} ml={6} />
              /in/CorinaNC
            </Link>
          </Box>
        <HStack ml={100} spacing={30}>
          <Box>
              <Link
                href="/about"
                className="hover:underline"
              >
                about
              </Link>
            </Box>
            <Box>
              <Link
                href="/projects"
                className="hover:underline"
              >
                projects
              </Link>
            </Box>
            <Box>
              <Link
                href="/writings"
                className="hover:underline"
              >
                writings
              </Link>
            </Box>
            <Box>
              <Link
                href="/resume"
                className="hover:underline">
                  resume
                </Link>
            </Box>
          </HStack>
        </HStack>
      </Container>
  )
}
