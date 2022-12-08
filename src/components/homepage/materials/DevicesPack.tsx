/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import { Box } from '@mui/material';
import Image from 'next/image';
import { devicesImage } from '@utills/utills';

interface DevicesPackProps {
  deviceContainer: React.RefObject<HTMLElement>;
}

const DevicesPack: React.FC<DevicesPackProps> = ({ deviceContainer }) => {
  return (
    <Box
      sx={{ position: 'relative', width: '100%', height: '100%' }}
      ref={deviceContainer}
    >
      <Box
        sx={{
          position: 'absolute',
          left: '50%',
          transform: 'translateX(-50%)',
          bottom: 0,
          opacity: 0,
        }}
      >
        <Image {...devicesImage.desktop} />
      </Box>
      <Box sx={{ position: 'absolute', left: '10%', bottom: 0, opacity: 0 }}>
        <Image {...devicesImage.mac} />
      </Box>
      <Box sx={{ position: 'absolute', left: '60%', bottom: 0, opacity: 0 }}>
        <Image {...devicesImage.phone} />
      </Box>
      <Box sx={{ position: 'absolute', left: '70%', bottom: 0, opacity: 0 }}>
        <Image {...devicesImage.tablet} />
      </Box>
    </Box>
  );
};

export default DevicesPack;
