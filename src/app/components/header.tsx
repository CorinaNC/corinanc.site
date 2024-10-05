"use client";

import { Container, Box, Link, Icon } from '@chakra-ui/react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import './Header.css';

export default function Header() {
  return (
    <Container mt={10} mb={10} maxW="100%" className="header-container">
      <Box className="header-stack">
        <Box className="header-hstack">
          <Link href="https://github.com/CorinaNC" target="_blank" className="header-link">
            <Icon as={FaGithub} className="header-icon" />
            /CorinaNC
          </Link>
          <Link href="https://linkedin.com/in/CorinaNC" target="_blank" className="header-link">
            <Icon as={FaLinkedin} className="header-icon" />
            /in/CorinaNC
          </Link>
        </Box>
        <Box className="header-hstack">
          <Link href="/about" className="header-link">about</Link>
          <Link href="/projects" className="header-link">projects</Link>
          <Link href="/writings" className="header-link">writings</Link>
          <Link href="https://drive.google.com/file/d/1nyp1vLaALu7a_-4U_g4W5NqKmMQHbjBK/view?usp=sharing" target="_blank" className="header-link">resume</Link>
        </Box>
      </Box>
    </Container>
  );
}