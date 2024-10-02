import { Link, Box, HStack } from "@chakra-ui/react";

export default function Header() {
  return (
    <HStack justifyContent="center">
      <Box>
          <Link
            href="https://github.com/CorinaNC"
            target="_blank"
            className="hover:underline"
          >
            GitHub
          </Link>
        </Box>
        <Box>
          <Link
            href="https://linkedin.com/in/CorinaNC"
            target="_blank"
            className="hover:underline"
          >
            LinkedIn
          </Link>
        </Box>
      <HStack ml={50}>
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
  )
}
