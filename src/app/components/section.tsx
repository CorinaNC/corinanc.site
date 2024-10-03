import { motion } from 'framer-motion'
import { chakra, shouldForwardProp } from '@chakra-ui/react'
import { ReactNode } from 'react';

const StyledDiv = chakra(motion.div, {
    shouldForwardProp: prop => {
      return shouldForwardProp(prop) || prop === 'transition'
    }
  })

  interface SectionProps {
  children: ReactNode;
  delay?: number;
}

const Section = ({ children, delay = 0 }: SectionProps) => (
  <StyledDiv
    initial={{ y: 10, opacity: 0, scale: 0.9, rotate: -10 }}
    animate={{ y: 0, opacity: 1, scale: 1, rotate: 0 }}
    transition={{ duration: 0.8, delay }}
    mb={6}
  >
    {children}
  </StyledDiv>
)

export default Section