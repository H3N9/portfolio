import { Box, Typography } from '@mui/material';
import React from 'react';
import IconCard from '../materials/IconCard';

interface ToolObject {
  icon: string;
  title: string;
  alt: string;
}

interface ToolContainerProps {
  tools: Array<ToolObject>;
  toolContainer: React.RefObject<HTMLElement>;
}

const ToolContainer: React.FC<ToolContainerProps> = ({
  tools,
  toolContainer,
}) => {
  return (
    <Box width="100%">
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
        }}
        ref={toolContainer}
      >
        {tools.map((image, index) => (
          <IconCard
            image={image.icon}
            alt={image.alt}
            key={index}
            title={image.title}
            length={index}
          />
        ))}
      </Box>
    </Box>
  );
};

export default ToolContainer;
