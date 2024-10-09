'use client'
import { Link, Box, HStack, Container, Icon, VStack, useBreakpointValue } from "@chakra-ui/react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useState, useEffect } from "react";

export default function Header() {
  const isMobile = useBreakpointValue({ base: true, md: false });
  return (
    <Container
      mt={10}
      mb={10}
      maxW="100%"
    >
      <VStack spacing={5} alignItems="center">
        <HStack spacing={5}>
          <Link href="https://github.com/CorinaNC" target="_blank" aria-label="GitHub">
            <Icon as={FaGithub} boxSize={6} />
            <Box as="span" display={{ base: 'none', md: 'inline' }}>/CorinaNC</Box>
          </Link>
          <Link href="https://linkedin.com/in/CorinaNC" target="_blank" aria-label="LinkedIn">
            <Icon as={FaLinkedin} boxSize={6} />
            <Box as="span" display={{ base: 'none', md: 'inline' }}>/in/CorinaNC</Box>
          </Link>
        </HStack>
        <HStack spacing={isMobile ? 5 : 10}>
          <Link href="/about">about</Link>
          <Link href="/projects">projects</Link>
          <Link href="/writings">writings</Link>
          <Link href="https://drive.google.com/file/d/1HYeHHX8arXeYCKmcFbdPnBpDOei3qmWT/view?usp=sharing" target="_blank">resume</Link>
        </HStack>
      </VStack>
    </Container>
  );
}
