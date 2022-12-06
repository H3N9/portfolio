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
  title: string;
}

const ToolContainer: React.FC<ToolContainerProps> = ({ tools, title }) => {
  return (
    <Box width="100%">
      <Typography variant="h6" pb={2}>
        {title}
      </Typography>
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-around',
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
