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
  <StyledDiv>
    {children}
  </StyledDiv>
)

export default Section