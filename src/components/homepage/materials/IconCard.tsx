import { Box, Typography, useMediaQuery, useTheme } from '@mui/material';
import Image from 'next/image';
import React from 'react';

interface IconCardProps {
  image: string;
  alt: string;
  title: string;
  length: number;
}

const IconCard: React.FC<IconCardProps> = ({ image, alt, title, length }) => {
  const theme = useTheme();
  const isMdDown = useMediaQuery(theme.breakpoints.down('md'));
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        pl: 4,
        pb: 4,
        opacity: 0,
        display: isMdDown && length > 10 ? 'none' : 'flex',
      }}
    >
      <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
        <Image width={60} height={60} src={image} alt={alt} />
      </Box>
      <Box
        sx={{
          display: { xs: 'flex', md: 'none' },
          px: 1,
          bgcolor: 'primary.main',
          color: 'secondary.main',
          borderRadius: '4px',
        }}
      >
        <Typography>{title}</Typography>
      </Box>
    </Box>
  );
};

export default IconCard;
