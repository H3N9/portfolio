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
}

const ToolContainer: React.FC<ToolContainerProps> = ({ tools }) => {
  return (
    <Box width="100%">
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
        }}
      >
        {tools.map((image, index) => (
          <IconCard
            image={image.icon}
            alt={image.alt}
            key={index}
            title={image.title}
          />
        ))}
      </Box>
    </Box>
  );
};

export default ToolContainer;
