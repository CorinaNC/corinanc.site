import { Box, Text, LinkBox, Image, LinkOverlay } from '@chakra-ui/react'
import { Global } from '@emotion/react'
import { ReactNode } from 'react';

interface WorkGridItemProps {
  children: ReactNode;
  href: string;
  title: string;
  thumbnail: string;
}

export const WorkGridItem = ({ children, href, title, thumbnail }: WorkGridItemProps) => (
  <Box
    w="100%"
    textAlign="center"
    transition="all 0.2s ease-in-out"
    _hover={{ transform: 'translateY(-2px)', color: '#4C7863' }}>
    <LinkBox cursor="pointer">
      <Box
        className="image-container"
        style={{
          position: 'relative',
          width: '100%',
          paddingBottom: '75%', 
          overflow: 'hidden',
          borderRadius: '30px',
          boxShadow: '0 0 20px 0 rgba(0, 0, 0, 0.2)',
        }}
      >
        <Image
          src={thumbnail}
          alt={title}
          className="grid-item-thumbnail"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
        />
      </Box>
      <LinkOverlay href={href} target={'_blank'}>
        <Text mt={2} fontSize={20} fontFamily="Helvetica" color={'white'}>
          {title}
        </Text>
      </LinkOverlay>
      <Text fontSize={12} fontFamily={"helvetica"} color={'white'} mb={3}>
        {children}
      </Text>
    </LinkBox>
  </Box>
);

export const GridItemStyle = () => (
  <Global
    styles={`
      .grid-item-thumbnail {
        border-radius: 12px;
      }
    `}
  />
);