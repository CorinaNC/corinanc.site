import { ReactNode } from 'react';
import { Container, Heading, Image, Link, Divider, Box, Text } from "@chakra-ui/react";
import { FaArrowLeft } from 'react-icons/fa';

interface ArticleLayoutProps {
  title: string;
  date?: string;
  mediaType?: 'image' | 'video' | 'none';
  mediaSrc?: string;
  children: ReactNode;
}

function splitText(text: string, threshold: number): string[] {
  const paragraphs = [];
  let currentParagraph = '';

  text.split(/([.!?] )/).forEach(segment => {
    if (currentParagraph.length + segment.length > threshold) {
      paragraphs.push(currentParagraph.trim());
      currentParagraph = segment;
    } else {
      currentParagraph += segment;
    }
  });

  if (currentParagraph) {
    paragraphs.push(currentParagraph.trim());
  }

  return paragraphs;
}

export default function Article({ title, date, mediaType = 'none', mediaSrc, children }: ArticleLayoutProps) {
  const text = typeof children === 'string' ? children : '';
  const paragraphs = text ? splitText(text, 300) : [];

  return (
    <Container alignContent="center">
      <Heading m={5} textAlign="center" fontFamily={"Comfortaa"}>
        {title}
      </Heading>
      {date && (
        <Text textColor="#A274B8" fontFamily="Courier" mb={10}>
          {date}
        </Text>
      )}
      {mediaType === 'image' && mediaSrc ? (
        <Image
          src={mediaSrc}
          alt={title}
          className="grid-item-thumbnail"
          style={{
            borderRadius: "10px",
            width: "75%",
            height: "75%",
            display: "block",
            marginLeft: "auto",
            marginRight: "auto",
            marginBottom: "10px"
          }}
        />
      ) : mediaType === 'video' && mediaSrc ? (
        <Box
          position="relative"
          paddingBottom="56.25%"
          height="0"
          overflow="hidden"
          maxWidth="100%"
          marginBottom="10px"
        >
          <Box
            as="iframe"
            src={mediaSrc}
            title={title}
            position="absolute"
            top="0"
            left="0"
            width="100%"
            height="100%"
            borderRadius="10px"
            allowFullScreen
          />
        </Box>
      ) : null}
      <Divider mb={10} mt={10} />
      {text ? (
        paragraphs.map((paragraph, index) => (
          <Text key={index} mt={5} mb={5}>
            {paragraph}
          </Text>
        ))
      ) : (
        children
      )}
      <Divider mt={10} />
      <Box mt={10} mb={10}>
        <Link href="/archive">
          <a style={{ display: 'flex', alignItems: 'center', textDecoration: 'none', color: 'inherit' }}>
            <FaArrowLeft style={{ marginRight: '5px' }} />
            Back to Archive
          </a>
        </Link>
      </Box>
    </Container>
  );
}