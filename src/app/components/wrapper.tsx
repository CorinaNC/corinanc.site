import { Box } from '@chakra-ui/react';
import { ReactNode } from 'react';

interface WrapperProps {
  children: ReactNode;
}

const Wrapper = ({ children }: WrapperProps) => {
  return (
    <Box display="flex" flexDirection="column" minHeight="100vh">
      {children}
    </Box>
  );
};

export default Wrapper;