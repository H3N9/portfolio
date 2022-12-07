import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';

interface IconCardProps {
  image: string;
  alt: string;
  title: string;
}

const IconCard: React.FC<IconCardProps> = ({ image, alt, title }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        pl: 4,
      }}
    >
      <Image width={60} height={60} src={image} alt={alt} />
    </Box>
  );
};

export default IconCard;
